import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Lineup", href: "#lineup" },
  { label: "Experience", href: "#experience" },
  { label: "Tickets", href: "#ticket" },
  { label: "Venue", href: "#venue" },
];

const founders = [
  { name: "Justin Falck", image: "/founders/justin.jpg", role: "Marketing & Direct Response" },
  { name: "Landon Rhodes", image: "/founders/landon.jpg", role: "Operations & Leadership" },
  { name: "Megan Rhodes", image: "/founders/megan.jpg", role: "Brand & Culture" },
  { name: "Austin Hall", image: "/founders/austin.jpg", role: "Sales & Revenue Systems" },
  { name: "Darren Clausen", image: "/founders/darren.jpg", role: "Strategy & Long-Term Vision" },
];

const outcomes = [
  "Get clarity on the decision that is weighing on your business right now.",
  "See what is actually moving revenue forward and what is wasting time.",
  "Think with owners who understand pressure, payroll, clients, and responsibility.",
  "Leave with one practical next move you can execute immediately.",
];

const pillars = [
  {
    title: "Clarity",
    kicker: "See the real issue",
    body: "Most owners are not short on ideas. They are short on clean thinking. The day is built to help you name the real constraint.",
  },
  {
    title: "Counsel",
    kicker: "Think with serious owners",
    body: "You will hear from operators who have made hard calls, built real companies, and learned lessons the expensive way.",
  },
  {
    title: "Conviction",
    kicker: "Lead with integrity",
    body: "The Forge is built on Christian values: honest work, responsibility, stewardship, and a higher standard for leadership.",
  },
  {
    title: "Craft",
    kicker: "Build what lasts",
    body: "Marketing, sales, positioning, systems, leadership, and the practical work of making a business stronger.",
  },
];

const schedule = [
  { time: "8:00 AM", title: "Doors Open + Owner Check-In" },
  { time: "9:00 AM", title: "Forge Sessions Begin" },
  { time: "12:00 PM", title: "Food + Owner Conversation" },
  { time: "1:00 PM", title: "Stoplight Session" },
  { time: "4:00 PM", title: "Clear Next Steps" },
];

const ticketIncludes = [
  "Full-day Forge event access",
  "Food provided",
  "Founder-led sessions",
  "Stoplight Session participation",
  "Business-owner discussion and clarity work",
];

const faqs = [
  {
    q: "When is the event?",
    a: "Friday, June 12 from 8:00 AM to 4:00 PM.",
  },
  {
    q: "Where is it hosted?",
    a: "Church of the Heartland, 9635 M Street, Omaha, NE.",
  },
  {
    q: "Is food included?",
    a: "Yes. Food is provided with your ticket.",
  },
  {
    q: "Who is this for?",
    a: "Business owners, operators, agency owners, consultants, service providers, and leaders carrying real responsibility.",
  },
  {
    q: "Do I have to be a Christian?",
    a: "No. The Forge is built on Christian values, but you do not need to be a Christian to attend. You do need to be willing to engage with honesty and integrity.",
  },
];

function CheckoutForm({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <form action="/api/checkout/event-ticket" method="POST">
      <button type="submit" className={className}>
        {children}
      </button>
    </form>
  );
}

export const metadata = {
  title: "The Forge Event — June 12, 2026",
  description:
    "A one-day Forge event for Omaha business owners who want practical clarity, honest conversation, and a room of peers who understand the weight of ownership.",
};

export default function EventPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-forge-ink">
      <div className="bg-forge-red text-white">
        <div className="container-wide flex flex-col items-center justify-between gap-2 px-6 py-3 text-center md:flex-row">
          <p className="display text-xs tracking-[0.28em]">ONE DAY ONLY</p>
          <p className="text-sm">June 12 · 8 AM - 4 PM · Church of the Heartland · $50 ticket</p>
          <a href="#ticket" className="display text-xs tracking-[0.2em] underline underline-offset-4">
            GET TICKETS
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111]/92 backdrop-blur">
        <div className="container-wide flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="The Forge home">
            <Image src="/logo.jpg" alt="The Forge" width={64} height={64} className="h-12 w-auto brightness-110" priority />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="display text-xs tracking-[0.18em] text-white/72 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#ticket" className="display text-sm tracking-widest text-white hover:text-forge-red">
            GET TICKET -
          </a>
        </div>
      </header>

      <section id="about" className="relative isolate overflow-hidden bg-[#111] text-white">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute -left-24 top-8 display text-[22rem] leading-none text-white">FORGE</div>
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-[48%] bg-forge-red md:block" />
        <div className="container-wide relative grid min-h-[820px] items-center gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex border border-forge-red bg-forge-red/15 px-4 py-2">
              <p className="display text-xs tracking-[0.28em] text-forge-red">FOR OMAHA BUSINESS OWNERS</p>
            </div>
            <h1 className="display max-w-4xl text-6xl leading-[0.86] md:text-8xl">
              One day that sharpens the owner.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/78">
              A high-energy Forge event for owners who want real clarity, practical strategy, and a room full of people
              who understand what it costs to build.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CheckoutForm className="btn-primary border-0 cursor-pointer">Get My Ticket - $50</CheckoutForm>
              <a href="#lineup" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-forge-ink">
                See The Lineup
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative min-h-[620px]">
              <div className="absolute left-0 top-0 h-[58%] w-[58%] overflow-hidden border-[10px] border-white bg-white shadow-2xl">
                <Image
                  src="/founders/justin.jpg"
                  alt="Justin Falck"
                  fill
                  priority
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute right-0 top-12 h-[48%] w-[48%] overflow-hidden border-[10px] border-[#111] bg-white shadow-2xl">
                <Image
                  src="/founders/megan.jpg"
                  alt="Megan Rhodes"
                  fill
                  priority
                  sizes="(min-width: 768px) 25vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-14 left-[10%] h-[38%] w-[38%] overflow-hidden border-[10px] border-[#111] bg-white shadow-2xl">
                <Image
                  src="/founders/landon.jpg"
                  alt="Landon Rhodes"
                  fill
                  sizes="(min-width: 768px) 20vw, 70vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-[8%] h-[42%] w-[42%] overflow-hidden border-[10px] border-white bg-white shadow-2xl">
                <Image
                  src="/founders/austin.jpg"
                  alt="Austin Hall"
                  fill
                  sizes="(min-width: 768px) 22vw, 70vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-[31%] left-[42%] z-20 bg-forge-red px-7 py-5 text-center shadow-2xl">
                <p className="display text-6xl leading-none">$50</p>
                <p className="display mt-1 text-xs tracking-[0.22em]">TICKET</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 bg-white text-forge-ink">
          <div className="container-wide grid border-y border-forge-ink/10 md:grid-cols-4">
            <div className="border-forge-ink/10 p-6 md:border-r">
              <p className="display text-xs tracking-[0.22em] text-forge-red">DATE</p>
              <p className="mt-2 text-xl">Friday, June 12</p>
            </div>
            <div className="border-forge-ink/10 p-6 md:border-r">
              <p className="display text-xs tracking-[0.22em] text-forge-red">TIME</p>
              <p className="mt-2 text-xl">8:00 AM - 4:00 PM</p>
            </div>
            <div className="border-forge-ink/10 p-6 md:border-r">
              <p className="display text-xs tracking-[0.22em] text-forge-red">VENUE</p>
              <p className="mt-2 text-xl">Church of the Heartland</p>
            </div>
            <div className="p-6">
              <p className="display text-xs tracking-[0.22em] text-forge-red">INCLUDED</p>
              <p className="mt-2 text-xl">Food Provided</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forge-paper px-6 py-20">
        <div className="container-narrow text-center">
          <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">SURGE THE ROOM WITH CLARITY</p>
          <h2 className="display text-5xl leading-[0.92] md:text-7xl">
            This is not another sit-and-listen business event.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-forge-steel">
            You will hear from operators, work through real business constraints, and put the weight you are carrying in
            front of a room that can actually help you think.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="container-wide grid gap-5 md:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <div key={outcome} className="relative overflow-hidden bg-[#111] p-7 text-white">
              <p className="display absolute -right-3 -top-8 text-8xl text-white/8">{index + 1}</p>
              <div className="mb-8 h-2 w-16 bg-forge-red" />
              <p className="relative text-lg leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden bg-[#111] px-6 py-24 text-white">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">LEARN THE</p>
              <h2 className="display text-6xl leading-[0.86] md:text-8xl">
                Four C's
                <span className="block text-forge-red">of business impact.</span>
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border border-white/15 bg-white/[0.045] p-7">
                  <p className="display text-4xl">{pillar.title}</p>
                  <p className="display mt-2 text-xs tracking-[0.22em] text-forge-red">{pillar.kicker}</p>
                  <p className="mt-6 leading-relaxed text-white/72">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lineup" className="bg-forge-paper px-6 py-24">
        <div className="container-wide">
          <div className="mb-14 text-center">
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">HEAR FROM LOCAL OPERATORS</p>
            <h2 className="display mx-auto max-w-4xl text-5xl leading-[0.9] md:text-7xl">
              Built by people still in the arena.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {founders.map((founder) => (
              <div key={founder.name} className="group bg-white p-3 shadow-sm transition-transform hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-forge-ink/5">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="display text-lg">{founder.name}</p>
                  <p className="mt-1 text-xs text-forge-stone">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container-wide grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">THE EXPERIENCE</p>
            <h2 className="display text-5xl leading-[0.9] md:text-7xl">The day is built for action.</h2>
          </div>
          <div className="space-y-4">
            {schedule.map((item) => (
              <div key={item.time} className="grid grid-cols-[120px_1fr] border-b border-forge-ink/10 py-4">
                <p className="display text-forge-red">{item.time}</p>
                <p className="text-lg text-forge-ink">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ticket" className="relative overflow-hidden bg-forge-red px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] leading-none">
            TICKETS
          </div>
        </div>
        <div className="container-wide relative grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="display mb-4 text-xs tracking-[0.3em]">CHOOSE YOUR EXPERIENCE</p>
            <h2 className="display text-5xl leading-[0.9] md:text-7xl">Secure your seat in the room.</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/82">
              One ticket gets you the full Forge event: founder-led sessions, owner conversation, Stoplight Session,
              food, and a clear next move.
            </p>
          </div>

          <div className="border-[10px] border-white bg-[#111] p-8 shadow-2xl">
            <div className="mb-6 inline-flex bg-forge-red px-4 py-2">
              <p className="display text-xs tracking-[0.24em]">LIMITED SEATS</p>
            </div>
            <p className="display text-xl tracking-[0.18em] text-forge-red">STANDARD TICKET</p>
            <div className="my-5 flex items-end gap-4">
              <p className="display text-8xl leading-none">$50</p>
              <p className="pb-4 text-white/60">per person</p>
            </div>
            <ul className="mb-8 grid gap-3">
              {ticketIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-white/84">
                  <span className="display text-forge-red">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CheckoutForm className="btn-primary w-full border-0 cursor-pointer">Buy Ticket - $50</CheckoutForm>
            <p className="mt-4 text-center text-xs text-white/50">Secure checkout powered by Stripe.</p>
          </div>
        </div>
      </section>

      <section id="venue" className="bg-forge-paper px-6 py-24">
        <div className="container-wide grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">VENUE</p>
            <h2 className="display text-5xl leading-[0.9] md:text-7xl">Church of the Heartland</h2>
            <p className="mt-7 text-lg leading-relaxed text-forge-steel">
              9635 M Street, Omaha, NE. Doors open before the first session so you can get settled and meet the room.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Date", "Friday, June 12"],
              ["Time", "8:00 AM - 4:00 PM"],
              ["Address", "9635 M Street"],
              ["Food", "Provided"],
            ].map(([label, value]) => (
              <div key={label} className="bg-white p-7 shadow-sm">
                <p className="display text-xs tracking-[0.24em] text-forge-red">{label}</p>
                <p className="mt-3 text-xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container-narrow">
          <div className="mb-10 text-center">
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">KNOW BEFORE YOU GO</p>
            <h2 className="display text-5xl leading-[0.9] md:text-7xl">Questions owners ask.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group border border-forge-ink/10 bg-forge-paper p-6">
                <summary className="display flex cursor-pointer list-none items-start justify-between gap-5 text-lg">
                  <span>{item.q}</span>
                  <span className="text-2xl text-forge-red transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-forge-steel">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-24 text-white">
        <div className="container-narrow text-center">
          <p className="display mb-5 text-xs tracking-[0.3em] text-forge-red">ARE YOU READY?</p>
          <h2 className="display mb-8 text-5xl leading-[0.9] md:text-7xl">Be in the room on June 12.</h2>
          <CheckoutForm className="btn-primary border-0 cursor-pointer">Get My Ticket - $50</CheckoutForm>
        </div>
      </section>

      <footer className="bg-black px-6 py-10 text-white/60">
        <div className="container-wide flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="The Forge" width={40} height={40} className="h-10 w-auto" />
            <p className="text-xs">A ministry of Church of the Heartland · Omaha, NE</p>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="/" className="hover:text-white">The Forge</a>
            <a href="mailto:hello@churchoftheheartland.org" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
