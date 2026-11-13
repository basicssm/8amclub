import Image from "next/image";
import Clock from "@/components/Clock";
import Reveal from "@/components/Reveal";
import Shop from "@/components/Shop";
import JoinForm from "@/components/JoinForm";

const VALUES = [
  ["Effort", "Every rep counts, even the ugly ones."],
  ["Discipline", "The alarm rings. We go."],
  ["Friendship", "You show up for them. They show up for you."],
  ["Family", "Not the ones we were born with. The ones we chose."],
  ["Brotherhood", "Shared sweat, shared laughs, shared tables."],
  ["Growth", "Better than yesterday. Not better than anyone."],
];

export default function Home() {
  return (
    <>
      <main id="top">
        <section className="hero">
          <div className="hero__time mono">
            <b style={{ color: "var(--fg)", fontSize: 14 }}><Clock /></b> <em>until the next 8 AM</em>
          </div>
          <Image className="hero__logo" src="/assets/logo.jpg" alt="8AM Club" width={700} height={480} priority />
          <p className="hero__sub mono">Est. at sunrise · Crossfit · Family</p>
          <a href="#manifesto" className="hero__down mono">↓ Show up</a>
        </section>

        <section className="manifesto" id="manifesto">
          <p className="label mono">( 01 ) Manifesto</p>
          <Reveal as="p" className="manifesto__text">
            Always showing up at <mark>8 AM</mark>, we built a tight-knit crew that feels like <mark>family</mark>.
            We love training hard, pushing each other, and enjoying the party and good times just as much as the
            discipline. We don’t need to be elite or the best — all we need is the <mark>love we share.</mark>
          </Reveal>
        </section>

        <section className="values" id="values">
          <p className="label mono">( 02 ) What we are about</p>
          <ul>
            {VALUES.map(([name, line], i) => (
              <li key={name}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <b>{name}</b>
                <i>{line}</i>
              </li>
            ))}
          </ul>
        </section>

        <section className="statement">
          <Reveal as="h2">NOT ELITE.<br />NOT THE BEST.<br /><span>JUST HERE.</span></Reveal>
        </section>

        <Shop />

        <section className="join">
          <p className="label mono">( 04 ) Join us</p>
          <Reveal as="h2">SEE YOU<br />AT <span>8.</span></Reveal>
          <p className="mono">Every day. Come as you are. Leave a bit stronger.</p>
          <JoinForm />
        </section>
      </main>

      <footer className="footer mono">
        <span>© 8AM CLUB</span>
        <span>Train · Eat · Party · Repeat</span>
        <a href="#top">↑ Top</a>
      </footer>
    </>
  );
}
