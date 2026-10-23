import Image from "next/image";
import { site } from "@/lib/site";

const wrap = "mx-auto w-full max-w-6xl px-5";
const btn = "inline-flex min-h-11 items-center justify-center rounded-full px-6 font-semibold transition-colors duration-200";
const gold = `${btn} bg-[var(--gold)] text-[#120e05] hover:bg-[#e0c486]`;
const ghost = `${btn} border border-[var(--line)] hover:border-[var(--gold)]`;

function H({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} data-reveal className="mb-10 text-3xl font-bold sm:text-4xl">{children}</h2>;
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(8,8,11,.94)] md:bg-[rgba(8,8,11,.7)] md:backdrop-blur-md">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#top" className="font-bold">{site.name}</a>
        <nav aria-label="القائمة الرئيسية" className="hidden gap-8 text-sm text-[var(--mute)] md:flex">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="py-3 hover:text-[var(--ink)]">{n.label}</a>
          ))}
        </nav>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={`${gold} text-sm`}>واتساب</a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className={`${wrap} flex min-h-[86svh] flex-col justify-center py-20`}>
        <h1 className="max-w-3xl text-4xl font-bold sm:text-6xl">مواقع تشبه علامتك، وتفتح في ثوانٍ.</h1>
        <p className="mt-6 max-w-xl text-lg text-[var(--mute)]">
          أنا ياسين، مصمم ومطوّر مواقع مستقل في تونس. أبني مواقع فاخرة وسريعة لعلامات تريد أن تبدو أكبر من حجمها.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={gold}>ابدأ مشروعك على واتساب</a>
          <a href="#work" className={ghost}>شاهد الأعمال</a>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="sec py-20">
      <div className={wrap}>
        <H id="services">ما أقدّمه</H>
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {site.services.map((s) => (
            <div key={s.t} data-reveal className="border-t border-[var(--line)] pt-5">
              <h3 className="text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 max-w-md text-[var(--mute)]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="sec py-20">
      <div className={wrap}>
        <H id="work">أعمال مختارة</H>
        <div className="grid gap-8 md:grid-cols-3">
          {site.projects.map((p) => (
            <article key={p.t} data-reveal>
              <div className="aspect-[8/5] overflow-hidden rounded-xl border border-[var(--line)] bg-gradient-to-br from-[#1b1a22] to-[#0e0e13]">
                    sizes="(max-width:768px) 100vw, 33vw" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
              <p className="text-[var(--mute)]">{p.d}</p>
              <p className="mt-2 text-sm text-[var(--gold)]">{p.tags.join("، ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  if (!site.testimonials.length) return null;
  return (
    <section className="sec py-20">
      <div className={wrap}>
        <H id="reviews">آراء العملاء</H>
        <div className="grid gap-8 md:grid-cols-2">
          {site.testimonials.map((t) => (
            <figure key={t.n} data-reveal className="border-s-2 border-[var(--gold)] ps-5">
              <blockquote className="text-lg">{t.q}</blockquote>
              <figcaption className="mt-2 text-sm text-[var(--mute)]">{t.n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="sec py-20">
      <div className={wrap}>
        <H id="pricing">الأسعار</H>
        <div className="grid gap-6 md:grid-cols-3">
          {site.pricing.map((p) => (
            <div key={p.t} data-reveal className="rounded-xl border border-[var(--line)] p-6">
              <h3 className="text-lg font-semibold">{p.t}</h3>
              <p className="mt-1 text-2xl font-bold text-[var(--gold)]">{p.p}</p>
              <ul className="mt-4 space-y-1 text-[var(--mute)]">
                {p.f.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="sec py-20">
      <div className={`${wrap} max-w-3xl`}>
        <H id="faq">أسئلة شائعة</H>
        {site.faq.map((f) => (
          <details key={f.q} className="border-t border-[var(--line)] last:border-b">
            <summary className="flex min-h-11 items-center justify-between gap-4 py-4 font-semibold">
              {f.q}<span className="plus text-xl text-[var(--gold)]" aria-hidden="true">+</span>
            </summary>
            <p className="pb-4 text-[var(--mute)]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="sec py-24">
      <div className={`${wrap} text-center`}>
        <h2 id="contact" className="text-3xl font-bold sm:text-5xl">لديك مشروع؟ لنبدأ.</h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--mute)]">أرسل لي وصفاً قصيراً وسأرد بخطة وسعر.</p>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={`${gold} mt-8`}>راسلني على واتساب</a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8 text-center text-sm text-[var(--mute)]">
      © {new Date().getFullYear()} {site.name}
    </footer>
  );
}
