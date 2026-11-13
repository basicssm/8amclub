"use client";
import { useState } from "react";
import { FILTERS, PRODUCTS } from "@/lib/products";
import Image from "next/image";
import { useCart } from "./CartProvider";

export default function Shop() {
  const { add } = useCart();
  const [filter, setFilter] = useState<string>("all");
  const [sizes, setSizes] = useState<Record<string, string>>(
    Object.fromEntries(PRODUCTS.map((p) => [p.id, p.sizes[0]]))
  );

  return (
    <section className="shop" id="shop">
      <div className="shop__head">
        <p className="label mono">( 03 ) The Shop</p>
        <h2>WEAR THE<br />CREW.</h2>
        <div className="filters mono">
          {FILTERS.map((f) => (
            <button key={f.key} className={filter === f.key ? "is-on" : ""} onClick={() => setFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {PRODUCTS.map((p) => (
          <article key={p.id} className={`card${filter !== "all" && filter !== p.type ? " is-hidden" : ""}`}>
            <div className="card__img">
              {p.tag && <span className="card__tag">{p.tag}</span>}
              {p.images.map((src, n) => (
                <Image
                  key={src}
                  src={src}
                  alt={n === 0 ? p.name : `${p.name} (back)`}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                  className={n === 0 ? "card__photo" : "card__photo card__photo--alt"}
                  style={{ objectPosition: p.pos }}
                />
              ))}
            </div>
            <div className="card__body">
              <div className="card__row">
                <h3 className="card__name">{p.name}</h3>
                <span className="card__price">€{p.price}</span>
              </div>
              <p className="card__desc">{p.desc}</p>
              <div className="sizes">
                {p.sizes.map((z) => (
                  <button
                    key={z}
                    className={sizes[p.id] === z ? "is-on" : ""}
                    onClick={() => setSizes((s) => ({ ...s, [p.id]: z }))}
                  >
                    {z}
                  </button>
                ))}
              </div>
              <button className="btn btn--full" onClick={() => add(p.id, sizes[p.id])}>Add to bag</button>
            </div>
          </article>
        ))}
      </div>
      <p className="shop__note mono">Small batches. Made for the 8 AM crew and anyone who wants to join.</p>
    </section>
  );
}
