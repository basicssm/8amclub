"use client";
import Image from "next/image";
import Clock from "@/components/Clock";
import Reveal from "@/components/Reveal";
import Shop from "@/components/Shop";
import JoinForm from "@/components/JoinForm";
import { useLang } from "@/components/LangProvider";

/** Renders "*text*" segments as highlighted <mark>. */
const rich = (s: string) => s.split("*").map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <main id="top">
        <section className="hero">
          <div className="hero__time mono">
            <b style={{ color: "var(--fg)", fontSize: 14 }}><Clock /></b> <em>{t.hero.until}</em>
          </div>
          <Image className="hero__logo" src="/assets/logo.jpg" alt="8AM Club" width={700} height={480} priority />
          <p className="hero__sub mono">{t.hero.sub}</p>
          <a href="#manifesto" className="hero__down mono">{t.hero.down}</a>
        </section>

        <section className="manifesto" id="manifesto">
          <p className="label mono">{t.manifesto.label}</p>
          <Reveal as="p" className="manifesto__text">{rich(t.manifesto.text)}</Reveal>
        </section>

        <section className="values" id="values">
          <p className="label mono">{t.values.label}</p>
          <ul>
            {t.values.items.map(([name, line], i) => (
              <li key={i}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <b>{name}</b>
                <i>{line}</i>
              </li>
            ))}
          </ul>
        </section>

        <section className="statement">
          <Reveal as="h2">{t.statement[0]}<br />{t.statement[1]}<br /><span>{t.statement[2]}</span></Reveal>
        </section>

        <Shop />

        <section className="join">
          <p className="label mono">{t.join.label}</p>
          <Reveal as="h2">{t.join.title[0]}<br />{t.join.title[1]}<span>8.</span></Reveal>
          <p className="mono">{t.join.sub}</p>
          <JoinForm />
        </section>
      </main>

      <footer className="footer mono">
        <span>© 8AM CLUB</span>
        <span>{t.footer.tag}</span>
        <a href="#top">{t.footer.top}</a>
      </footer>
    </>
  );
}
