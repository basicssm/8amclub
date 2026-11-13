"use client";
import { useCart } from "./CartProvider";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";

export default function CartDrawer() {
  const { items, total, open, setOpen, change, remove, toast, toastMsg, toastOn } = useCart();

  return (
    <>
      <div className={`overlay${open ? " is-on" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`cart${open ? " is-on" : ""}`} aria-label="Shopping bag" aria-hidden={!open}>
        <div className="cart__head">
          <h3>BAG</h3>
          <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>
        <div className="cart__items">
          {items.length === 0 ? (
            <p className="cart__empty mono">Your bag is empty.<br />Go get something.</p>
          ) : (
            items.map((it, idx) => {
              const p = PRODUCTS.find((x) => x.id === it.id)!;
              return (
                <div className="ci" key={it.id + it.size}>
                  <div className="ci__img"><Image src={p.images[0]} alt={p.name} fill sizes="90px" style={{ objectPosition: p.pos }} /></div>
                  <div>
                    <div className="ci__name">{p.name}</div>
                    <div className="ci__meta">Size {it.size}</div>
                    <div className="ci__qty mono">
                      <button onClick={() => change(idx, -1)}>−</button>
                      {it.qty}
                      <button onClick={() => change(idx, 1)}>+</button>
                    </div>
                  </div>
                  <div className="ci__side">
                    <b>€{p.price * it.qty}</b>
                    <button className="ci__rm mono" onClick={() => remove(idx)}>Remove</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="cart__foot">
          <div className="cart__total mono"><span>Total</span><b>€{total}</b></div>
          {/* TODO: connect a real checkout (Shopify Buy Button, Stripe Payment Links, Snipcart…) */}
          <button
            className="btn btn--full"
            onClick={() => toast(items.length ? "Checkout coming soon — drop 01 is cooking" : "Your bag is empty")}
          >
            Checkout
          </button>
          <p className="mono cart__small">Free shipping over €80</p>
        </div>
      </aside>
      <div className={`toast mono${toastOn ? " is-on" : ""}`} role="status">{toastMsg}</div>
    </>
  );
}
