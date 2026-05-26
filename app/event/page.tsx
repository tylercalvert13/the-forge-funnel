import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Lineup", href: "#lineup" },
  { label: "Tickets", href: "#ticket" },
  { label: "Venue", href: "#venue" },
];

const outcomes = [
  "Clarity on the decision that is weighing on your business right now",
  "A sharper view of your marketing, sales, leadership, and positioning",
  "Honest perspective from owners who understand the pressure",
  "A practical next step you can take back into the business immediately",
];

const pillars = [
  {
    title: "Clarity",
    subtitle: "See the real issue",
    body: "Step out of the noise long enough to identify what is actually slowing momentum.",
  },
  {
    title: "Counsel",
    subtitle: "Think with other owners",
    body: "Get perspective from people who have had to make hard calls with real stakes attached.",
  },
  {
    title: "Conviction",
    subtitle: "Lead with integrity",
    body: "The Forge is built on Christian values: honest work, clear standards, and responsibility.",
  },
  {
    title: "Craft",
    subtitle: "Build what lasts",
    body: "Leave with practical business insight around growth, messaging, systems, and leadership.",
  },
];

const experience = [
  {
    title: "Practical Growth & Marketing",
    body: "Direct-response thinking, lead flow, offer clarity, sales movement, and the places most owners waste time.",
  },
  {
    title: "Brand, Messaging & Positioning",
    body: "How your business is perceived, what people believe you can solve, and how trust is built before the sale.",
  },
  {
    title: "Leadership Under Pressure",
    body: "The hidden weight of leading people, making decisions, managing cash flow, and staying steady.",
  },
  {
    title: "The Stoplight Session",
    body: "Bring one real issue: green, yellow, or red. The room helps you think through what to optimize, unblock, or fix.",
  },
];

const founders = [
  { name: "Justin Falck", image: "/founders/justin.jpg", role: "Marketing & Direct Response" },
  { name: "Landon Rhodes", image: "/founders/landon.jpg", role: "Operations & Leadership" },
  { name: "Megan Rhodes", image: "/founders/megan.jpg", role: "Brand & Culture" },
  { name: "Austin Hall", image: "/founders/austin.jpg", role: "Sales & Revenue Systems" },
  { name: "Darren Clausen", image: "/founders/darren.jpg", role: "Strategy & Long-Term Vision" },
];

const ticketIncludes = [
  "Full-day Forge event access",
  "Food provided",
  "Stoplight Session participation",
  "Founder-led business teaching",
  "Owner-to-owner discussion and clarity work",
];

const faqs = [
  {
    q: "When is the event?",
    a: "The Forge event is Friday, June 12 from 8:00 AM to 4:00 PM.",
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
    q: "Who should attend?",
    a: "Business owners, operators, consultants, agency owners, service providers, and leaders who carry real responsibility and want practical clarity.",
  },
  {
    q: "Do I need to be a Christian?",
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
    <main className="min-h-screen bg-white">
      <div className="bg-forge-red text-white">
        <div className="container-wide flex flex-col gap-2 px-6 py-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="display text-xs tracking-[0.28em]">LIMITED SEATING</p>
          <p className="text-sm">One focused day for Omaha business owners. June 12 · 8 AM - 4 PM.</p>
          <a href="#ticket" className="display text-xs tracking-[0.2em] underline underline-offset-4">
            GET TICKETS
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-forge-ink/10 bg-white/95 backdrop-blur">
        <div className="container-wide flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="The Forge home">
            <Image src="/logo.jpg" alt="The Forge" width={64} height={64} className="h-12 w-auto" priority />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="display text-xs tracking-[0.18em] text-forge-steel hover:text-forge-red"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#ticket" className="display text-sm tracking-widest text-forge-red hover:text-forge-redDark">
            GET TICKET -
          </a>
        </div>
      </header>

      <section id="about" className="bg-forge-ink text-white">
        <div className="container-wide grid min-h-[720px] items-center gap-12 px-6 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-24">
          <div>
            <p className="display mb-5 text-xs tracking-[0.32em] text-forge-red">THE FORGE EVENT · OMAHA</p>
            <h1 className="display mb-7 text-5xl leading-[0.95] md:text-7xl">
              One day to sharpen how you build, lead, and carry the weight.
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
              A full-day Forge experience for business owners who want more than another seminar. Real strategy. Real
              conversation. Real owners in the room.
            </p>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              <div className="border border-white/15 bg-white/5 p-5">
                <p className="display text-xs tracking-[0.22em] text-forge-red">DATE</p>
                <p className="mt-2 text-xl">June 12</p>
              </div>
              <div className="border border-white/15 bg-white/5 p-5">
                <p className="display text-xs tracking-[0.22em] text-forge-red">TIME</p>
                <p className="mt-2 text-xl">8 AM - 4 PM</p>
              </div>
              <div className="border border-white/15 bg-white/5 p-5">
                <p className="display text-xs tracking-[0.22em] text-forge-red">TICKET</p>
                <p className="mt-2 text-xl">$50</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <CheckoutForm className="btn-primary border-0 cursor-pointer">Get My Ticket - $50</CheckoutForm>
              <a href="#experience" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-forge-ink">
                See The Experience
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-forge-red/70" />
            <div className="relative grid grid-cols-2 gap-3 bg-black p-3">
              {founders.slice(0, 4).map((founder) => (
                <div key={founder.name} className="relative aspect-[4/5] overflow-hidden bg-white/10">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 768px) 22vw, 45vw"
                    className="object-cover"
                    priority={founder.name === "Justin Falck"}
                  />
                </div>
              ))}
            </div>
            <div className="relative mt-4 bg-forge-red p-5 text-center">
              <p className="display text-sm tracking-[0.22em]">CHURCH OF THE HEARTLAND</p>
              <p className="mt-1 text-sm text-white/80">9635 M Street · Omaha, NE · Food provided</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-narrow text-center">
          <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">WHY THIS ROOM MATTERS</p>
          <h2 className="display mb-8 text-4xl leading-tight md:text-6xl">
            Business owners do not need more noise. They need clarity.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-forge-steel">
            You carry decisions most people never see: growth, hiring, cash flow, culture, sales, client pressure, and
            the next move. The Forge creates a room where owners can step back, think clearly, and leave with useful
            direction.
          </p>
        </div>
      </section>

      <section className="bg-forge-paper py-16 px-6">
        <div className="container-wide grid gap-5 md:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <div key={outcome} className="border border-forge-ink/10 bg-white p-6">
              <p className="display mb-5 text-4xl text-forge-red">{String(index + 1).padStart(2, "0")}</p>
              <p className="text-lg leading-relaxed text-forge-ink">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-forge-ink text-white">
        <div className="container-narrow text-center">
          <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">THE FOUR C'S</p>
          <h2 className="display mb-12 text-4xl leading-tight md:text-6xl">What the day is built around.</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border border-white/15 bg-white/[0.04] p-7 text-left">
                <p className="display text-3xl text-white">{pillar.title}</p>
                <p className="display mt-2 text-xs tracking-[0.22em] text-forge-red">{pillar.subtitle}</p>
                <p className="mt-5 leading-relaxed text-white/72">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section bg-white">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">THE EXPERIENCE</p>
            <h2 className="display mx-auto max-w-4xl text-4xl leading-tight md:text-6xl">
              A one-day event designed to create usable business clarity.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <div key={item.title} className="border border-forge-ink/10 bg-forge-paper p-7">
                <p className="display mb-3 text-2xl text-forge-ink">{item.title}</p>
                <p className="leading-relaxed text-forge-steel">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#ticket" className="btn-primary">
              Get Tickets
            </a>
          </div>
        </div>
      </section>

      <section id="lineup" className="section bg-forge-paper">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">HEAR FROM LOCAL OPERATORS</p>
            <h2 className="display text-4xl leading-tight md:text-6xl">The people behind The Forge.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-forge-steel">
              Not theorists. Owners and operators still building, leading, selling, hiring, and learning in real time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white p-3 text-center shadow-sm">
                <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-forge-ink/5">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="display text-lg">{founder.name}</p>
                <p className="mt-1 text-xs text-forge-stone">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ticket" className="section bg-white">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">CHOOSE YOUR EXPERIENCE</p>
            <h2 className="display text-4xl leading-tight md:text-6xl">Secure your seat in the room.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-forge-steel">
              One ticket. One full day. Practical clarity, founder-led sessions, food provided, and a room of owners
              serious about what they are building.
            </p>
          </div>

          <div className="mx-auto max-w-xl border-4 border-forge-red bg-forge-ink p-7 text-white shadow-2xl">
            <p className="display mb-2 text-xs tracking-[0.28em] text-forge-red">THE FORGE EVENT</p>
            <div className="mb-4 flex items-end gap-3">
              <p className="display text-6xl">$50</p>
              <p className="pb-2 text-white/60">per ticket</p>
            </div>
            <p className="mb-7 text-white/72">Friday, June 12 · 8 AM - 4 PM · Church of the Heartland</p>
            <ul className="mb-8 space-y-3">
              {ticketIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-white/82">
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

      <section id="venue" className="section bg-forge-paper">
        <div className="container-wide grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">VENUE</p>
            <h2 className="display mb-6 text-4xl leading-tight md:text-6xl">Church of the Heartland</h2>
            <p className="text-lg leading-relaxed text-forge-steel">
              9635 M Street, Omaha, NE. Plan to arrive with enough time to get settled before the day starts at 8 AM.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white p-6">
              <p className="display text-sm tracking-[0.22em] text-forge-red">DATE</p>
              <p className="mt-3 text-xl">Friday, June 12</p>
            </div>
            <div className="bg-white p-6">
              <p className="display text-sm tracking-[0.22em] text-forge-red">TIME</p>
              <p className="mt-3 text-xl">8:00 AM - 4:00 PM</p>
            </div>
            <div className="bg-white p-6">
              <p className="display text-sm tracking-[0.22em] text-forge-red">LOCATION</p>
              <p className="mt-3 text-xl">9635 M Street</p>
            </div>
            <div className="bg-white p-6">
              <p className="display text-sm tracking-[0.22em] text-forge-red">FOOD</p>
              <p className="mt-3 text-xl">Provided</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 text-center">
            <p className="display mb-4 text-xs tracking-[0.3em] text-forge-red">KNOW BEFORE YOU GO</p>
            <h2 className="display text-4xl leading-tight md:text-6xl">Questions owners ask.</h2>
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

      <section className="section bg-forge-red text-white">
        <div className="container-narrow text-center">
          <p className="display mb-5 text-xs tracking-[0.3em]">DON'T MISS THE ROOM</p>
          <h2 className="display mb-8 text-4xl leading-tight md:text-6xl">Be part of The Forge on June 12.</h2>
          <CheckoutForm className="btn-secondary !border-white !bg-white !text-forge-ink hover:!bg-forge-ink hover:!text-white border-0 cursor-pointer">
            Get My Ticket - $50
          </CheckoutForm>
        </div>
      </section>

      <footer className="bg-black px-6 py-10 text-white/60">
        <div className="container-wide flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="The Forge" width={40} height={40} className="h-10 w-auto" />
            <p className="text-xs">A ministry of Church of the Heartland · Omaha, NE</p>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="/" className="hover:text-white">
              The Forge
            </a>
            <a href="mailto:hello@churchoftheheartland.org" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
