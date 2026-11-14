"use client";
import { useCart } from "./CartProvider";
import { useLang } from "./LangProvider";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";

export default function CartDrawer() {
  const { t, pt } = useLang();
  const { items, total, open, setOpen, change, remove, toast, toastMsg, toastOn } = useCart();

  return (
    <>
      <div className={`overlay${open ? " is-on" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`cart${open ? " is-on" : ""}`} aria-label={t.cart.aria} aria-hidden={!open}>
        <div className="cart__head">
          <h3>{t.cart.title}</h3>
          <button onClick={() => setOpen(false)} aria-label={t.cart.close}>✕</button>
        </div>
        <div className="cart__items">
          {items.length === 0 ? (
            <p className="cart__empty mono">{t.cart.empty[0]}<br />{t.cart.empty[1]}</p>
          ) : (
            items.map((it, idx) => {
              const p = PRODUCTS.find((x) => x.id === it.id)!;
              return (
                <div className="ci" key={it.id + it.size}>
                  <div className="ci__img"><Image src={p.images[0]} alt={pt(p).name} fill sizes="90px" style={{ objectPosition: p.pos }} /></div>
                  <div>
                    <div className="ci__name">{pt(p).name}</div>
                    <div className="ci__meta">{it.size === "One size" ? t.shop.oneSize : `${t.cart.size} ${it.size}`}</div>
                    <div className="ci__qty mono">
                      <button onClick={() => change(idx, -1)}>−</button>
                      {it.qty}
                      <button onClick={() => change(idx, 1)}>+</button>
                    </div>
                  </div>
                  <div className="ci__side">
                    <b>€{p.price * it.qty}</b>
                    <button className="ci__rm mono" onClick={() => remove(idx)}>{t.cart.remove}</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="cart__foot">
          <div className="cart__total mono"><span>{t.cart.total}</span><b>€{total}</b></div>
          {/* TODO: connect a real checkout (Shopify Buy Button, Stripe Payment Links, Snipcart…) */}
          <button
            className="btn btn--full"
            onClick={() => toast(items.length ? t.cart.checkoutSoon : t.cart.emptyToast)}
          >
            {t.cart.checkout}
          </button>
          <p className="mono cart__small">{t.cart.freeShip}</p>
        </div>
      </aside>
      <div className={`toast mono${toastOn ? " is-on" : ""}`} role="status">{toastMsg}</div>
    </>
  );
}
