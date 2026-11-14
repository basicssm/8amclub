"use client";
import { useCart } from "./CartProvider";
import { useLang } from "./LangProvider";
import { LANGS } from "@/lib/i18n";

export default function Nav() {
  const { count, setOpen } = useCart();
  const { lang, setLang, t } = useLang();
  return (
    <header className="nav">
      <a href="#top" className="nav__logo" aria-label="8AM Club">8AM<span>CLUB</span></a>
      <nav>
        <a href="#manifesto">{t.nav.manifesto}</a>
        <a href="#values">{t.nav.values}</a>
        <a href="#shop">{t.nav.shop}</a>
        <div className="nav__lang" role="group" aria-label={t.nav.lang}>
          {LANGS.map((l) => (
            <button key={l} className={l === lang ? "is-on" : ""} aria-pressed={l === lang} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="nav__cart" onClick={() => setOpen(true)}>{t.nav.bag} <b>{count}</b></button>
      </nav>
    </header>
  );
}
