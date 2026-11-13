"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/lib/products";

type Item = { id: string; size: string; qty: number };
type Ctx = {
  items: Item[];
  count: number;
  total: number;
  open: boolean;
  toastMsg: string;
  toastOn: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string, size: string) => void;
  change: (idx: number, delta: number) => void;
  remove: (idx: number) => void;
  toast: (msg: string) => void;
};

const CartCtx = createContext<Ctx | null>(null);
export const useCart = () => {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
};

const KEY = "8am-cart";

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastOn, setToastOn] = useState(false);
  const loaded = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    try {
      const raw: Item[] = JSON.parse(localStorage.getItem(KEY) || "[]");
      setItems(raw.filter((i) => PRODUCTS.some((p) => p.id === i.id)));
    } catch {}
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastOn(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastOn(false), 2200);
  }, []);

  const add = (id: string, size: string) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === id && i.size === size);
      return found
        ? prev.map((i) => (i === found ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { id, size, qty: 1 }];
    });
    toast("Added to bag");
  };
  const change = (idx: number, d: number) =>
    setItems((prev) => prev.flatMap((it, k) => (k !== idx ? [it] : it.qty + d < 1 ? [] : [{ ...it, qty: it.qty + d }])));
  const remove = (idx: number) => setItems((prev) => prev.filter((_, k) => k !== idx));

  const count = items.reduce((a, i) => a + i.qty, 0);
  const total = items.reduce((a, i) => a + (PRODUCTS.find((p) => p.id === i.id)?.price ?? 0) * i.qty, 0);

  return (
    <CartCtx.Provider value={{ items, count, total, open, toastMsg, toastOn, setOpen, add, change, remove, toast }}>
      {children}
    </CartCtx.Provider>
  );
}
