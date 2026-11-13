"use client";
import { useCart } from "./CartProvider";

export default function Nav() {
  const { count, setOpen } = useCart();
  return (
    <header className="nav">
      <a href="#top" className="nav__logo" aria-label="8AM Club">8AM<span>CLUB</span></a>
      <nav>
        <a href="#manifesto">Manifesto</a>
        <a href="#values">Values</a>
        <a href="#shop">Shop</a>
        <button className="nav__cart" onClick={() => setOpen(true)}>Bag <b>{count}</b></button>
      </nav>
    </header>
  );
}
