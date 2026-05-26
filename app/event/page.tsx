import Image from "next/image";

const eventDetails = [
  { label: "Date", value: "Friday, June 12" },
  { label: "Time", value: "8:00 AM - 4:00 PM" },
  { label: "Location", value: "Church of the Heartland" },
  { label: "Address", value: "9635 M Street, Omaha, NE" },
  { label: "Ticket", value: "$50" },
  { label: "Food", value: "Provided" },
];

const walkAway = [
  {
    title: "Practical Growth & Marketing Clarity",
    body: "Direct-response thinking, lead flow, sales clarity, and the systems that actually move revenue forward.",
  },
  {
    title: "Messaging, Brand, and Positioning",
    body: "A sharper view of how your business is perceived, how clearly you communicate, and where trust is being built or lost.",
  },
  {
    title: "Leadership & Decision Making",
    body: "Honest conversations about pressure, people, cash flow, hard calls, and the weight owners carry that most people never see.",
  },
  {
    title: "The Stoplight Session",
    body: "Bring one real issue: green, yellow, or red. The room helps you think it through with perspective from other serious owners.",
  },
];

const forYou = [
  "You own or operate a real business.",
  "You are responsible for clients, people, decisions, or revenue.",
  "You want practical clarity, not theory or hype.",
  "You value faith-informed leadership without pressure or pretense.",
  "You want to be in a room with Omaha owners who actually get it.",
];

const notForYou = [
  "You are looking for a pitch fest or referral swap.",
  "You want a passive seminar where nothing is asked of you.",
  "You are not ready to be honest about what is working and what is not.",
  "You are hoping one event fixes what only execution can fix.",
];

const founders = [
  { name: "Justin Falck", image: "/founders/justin.jpg" },
  { name: "Landon Rhodes", image: "/founders/landon.jpg" },
  { name: "Megan Rhodes", image: "/founders/megan.jpg" },
  { name: "Austin Hall", image: "/founders/austin.jpg" },
  { name: "Darren Clausen", image: "/founders/darren.jpg" },
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
    <main className="min-h-screen">
      <header className="border-b border-forge-ink/10 bg-white">
        <div className="container-wide flex items-center justify-between py-5 px-6">
          <a href="/" className="flex items-center gap-3" aria-label="The Forge home">
            <Image src="/logo.jpg" alt="The Forge" width={64} height={64} className="h-12 w-auto" priority />
          </a>
          <a href="#ticket" className="display text-sm tracking-widest text-forge-red hover:text-forge-redDark">
            GET MY TICKET -
          </a>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container-narrow text-center">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-6">FOR OMAHA BUSINESS OWNERS</p>
          <h1 className="display text-4xl md:text-6xl leading-tight mb-6">
            A one-day room for owners who need clarity.
          </h1>
          <p className="text-lg md:text-xl text-forge-steel max-w-2xl mx-auto mb-10">
            Not another seminar. Not another networking event. A full-day Forge experience for serious business owners
            who want real conversation, practical strategy, and a room that understands the weight.
          </p>

          <div className="bg-forge-ink text-white border-4 border-forge-red max-w-3xl mx-auto p-6 md:p-8 mb-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="display text-xs tracking-[0.2em] text-forge-red mb-2">WHEN</p>
                <p className="text-lg">June 12</p>
                <p className="text-white/60 text-sm">8 AM - 4 PM</p>
              </div>
              <div>
                <p className="display text-xs tracking-[0.2em] text-forge-red mb-2">WHERE</p>
                <p className="text-lg">Church of the Heartland</p>
                <p className="text-white/60 text-sm">Omaha, NE</p>
              </div>
              <div>
                <p className="display text-xs tracking-[0.2em] text-forge-red mb-2">TICKET</p>
                <p className="text-lg">$50</p>
                <p className="text-white/60 text-sm">Food provided</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CheckoutForm className="btn-primary border-0 cursor-pointer">Get My Ticket - $50</CheckoutForm>
            <a href="#details" className="btn-secondary">See The Day</a>
          </div>
          <p className="text-sm text-forge-stone mt-4">Seating is intentionally limited to protect the quality of the room.</p>
        </div>
      </section>

      <section className="section bg-forge-paper">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">WHY THIS EXISTS</p>
            <h2 className="display text-3xl md:text-5xl leading-tight">
              If you are the one carrying the decisions, you already know.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-forge-steel max-w-2xl mx-auto">
            <p>You think about growth even when things are going fine.</p>
            <p>You feel the pressure of leading people, managing cash flow, and making the right calls.</p>
            <p>You have been in rooms that were shallow, salesy, or full of people who do not understand ownership.</p>
            <p className="display text-2xl text-forge-ink italic">
              "It would be useful to be in a room with people who actually get it."
            </p>
            <p className="pt-4">
              That is what this Forge event is built to create: one focused day with serious owners, real problems,
              and practical clarity you can use immediately.
            </p>
          </div>
        </div>
      </section>

      <section id="details" className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">WHAT YOU WILL WALK AWAY WITH</p>
            <h2 className="display text-3xl md:text-5xl leading-tight">Real clarity for the parts of business that matter.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {walkAway.map((item) => (
              <div key={item.title} className="border border-forge-ink/10 bg-forge-paper p-6">
                <p className="display text-xl text-forge-ink mb-3">{item.title}</p>
                <p className="text-forge-steel leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-forge-ink text-white">
        <div className="container-narrow text-center">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">THE STOPLIGHT SESSION</p>
          <h2 className="display text-3xl md:text-5xl leading-tight mb-8">The part of the day people remember.</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Every owner has something that needs attention. Bring one real issue from your business and put it through
            the Stoplight Session.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="border border-white/20 p-6">
              <div className="w-4 h-4 rounded-full bg-green-500 mx-auto mb-4" />
              <p className="display text-sm tracking-widest mb-2">GREEN LIGHT</p>
              <p className="text-sm text-white/70">Something working that could be optimized.</p>
            </div>
            <div className="border border-white/20 p-6">
              <div className="w-4 h-4 rounded-full bg-yellow-400 mx-auto mb-4" />
              <p className="display text-sm tracking-widest mb-2">YELLOW LIGHT</p>
              <p className="text-sm text-white/70">Something slowing momentum.</p>
            </div>
            <div className="border border-white/20 p-6">
              <div className="w-4 h-4 rounded-full bg-forge-red mx-auto mb-4" />
              <p className="display text-sm tracking-widest mb-2">RED LIGHT</p>
              <p className="text-sm text-white/70">Something actively holding the business back.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-forge-paper">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">EVENT DETAILS</p>
            <h2 className="display text-3xl md:text-5xl leading-tight">One day. One room. Clear next steps.</h2>
          </div>
          <div className="bg-white border border-forge-ink/10 shadow-sm">
            {eventDetails.map((detail, i) => (
              <div
                key={detail.label}
                className={`flex flex-col md:flex-row md:items-center justify-between gap-2 px-6 md:px-10 py-5 ${
                  i !== eventDetails.length - 1 ? "border-b border-forge-ink/10" : ""
                }`}
              >
                <p className="display text-sm tracking-wider text-forge-red">{detail.label}</p>
                <p className="text-lg text-forge-ink md:text-right">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">THIS IS FOR YOU IF</p>
              <ul className="space-y-4 text-lg text-forge-steel">
                {forYou.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="text-forge-red display">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="display text-xs tracking-[0.3em] text-forge-stone mb-4">THIS IS NOT FOR YOU IF</p>
              <ul className="space-y-4 text-lg text-forge-steel">
                {notForYou.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="text-forge-stone display">✗</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-forge-paper">
        <div className="container-narrow text-center">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">THE PEOPLE BEHIND THE ROOM</p>
          <h2 className="display text-3xl md:text-5xl leading-tight mb-6">Led by owners still in the arena.</h2>
          <p className="text-lg text-forge-steel max-w-2xl mx-auto mb-10">
            The Forge is led by local operators who have built service-based companies, managed teams, worked with
            thousands of owners, and learned the hard way what actually works.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white border border-forge-ink/10 p-3">
                <div className="relative aspect-[4/5] bg-forge-ink/5 mb-4 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="display text-base">{founder.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ticket" className="section bg-forge-ink text-white">
        <div className="container-narrow text-center">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-6">GET YOUR TICKET</p>
          <h2 className="display text-3xl md:text-5xl leading-tight mb-6">Be in the room on June 12.</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Your $50 ticket reserves your seat for the full-day Forge event at Church of the Heartland. Stripe will
            securely handle payment and send your receipt.
          </p>
          <CheckoutForm className="btn-primary border-0 cursor-pointer">Buy My Ticket - $50</CheckoutForm>
          <p className="text-white/60 text-sm mt-5">June 12, 8 AM - 4 PM · Church of the Heartland · Food provided</p>
        </div>
      </section>

      <footer className="bg-black text-white/60 py-10 px-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
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
