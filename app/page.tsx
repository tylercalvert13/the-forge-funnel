import Image from "next/image";

const PRICE_MONTHLY_URL = "#pricing"; // TODO: replace with GHL checkout link for $100/mo
const PRICE_ANNUAL_URL = "#pricing";  // TODO: replace with GHL checkout link for $1,000/yr

const founders = [
  { name: "Justin Falck", image: "/founders/justin.jpg", title: "Founding Member", specialty: "Marketing & Direct Response" },
  { name: "Landon Rhodes", image: "/founders/landon.jpg", title: "Founding Member", specialty: "Operations & Leadership" },
  { name: "Megan Rhodes", image: "/founders/megan.jpg", title: "Founding Member", specialty: "Brand & Culture" },
  { name: "Austin Hall", image: "/founders/austin.jpg", title: "Founding Member", specialty: "Sales & Revenue Systems" },
  { name: "Darren Clausen", image: "/founders/darren.jpg", title: "Founding Member", specialty: "Strategy & Long-Term Vision" },
];

const stack = [
  { item: "Monthly group call with Stoplight Session", value: "$500 / month value" },
  { item: "Quarterly in-person Forge intensive (4 per year)", value: "$400 / year value" },
  { item: "Direct access to five founding operators", value: "$1,000+ / month value" },
  { item: "Growing curriculum library (every call recorded)", value: "$500+ and compounding" },
  { item: "Local, vetted peer community of Omaha owners", value: "Cannot be purchased elsewhere" },
];

const forYou = [
  "You own a business and you're the one carrying the weight.",
  "You're done with shallow networking and motivational seminars.",
  "You want a room where you can be fully honest, without posturing.",
  "You operate with integrity and you want peers who do too.",
  "You're in Omaha or close enough to show up in person quarterly.",
];

const notForYou = [
  "You're looking for a pitch rotation or referral group.",
  "You want passive content and zero accountability.",
  "You're not actually running or building a business yet.",
  "You're hoping to network your way out of doing the work.",
];

const faq = [
  {
    q: "Do I have to be a Christian?",
    a: "No. The Forge is built on Christian values and led by people of faith. You do not have to share those beliefs to benefit from the room. You do have to be willing to operate with integrity — because that is the standard everyone in this room holds.",
  },
  {
    q: "What if I join and it's not worth it?",
    a: "60-day no-questions-asked refund. If The Forge is not worth every dollar in your first 60 days, email us and we'll send every dollar back. No forms, no conditions, no awkward conversation.",
  },
  {
    q: "How is this different from BNI or a typical networking group?",
    a: "BNI is referral-based. The Forge is not. There is no pitch rotation, no mandatory meeting attendance, no quotas. You come with a real problem. The room helps you think clearly. That's it.",
  },
  {
    q: "How is this different from a $25K national mastermind?",
    a: "National masterminds make you travel, charge five figures, and rarely produce local relationships. The Forge is local. You'll see these people at church, at events, around town. Accountability is real because the relationships are real.",
  },
  {
    q: "What happens immediately after I join?",
    a: "You get an email and a text within minutes. Both link to the Forge community. One of the founders will personally welcome you by name within 24 hours. Your first monthly call (with a Stoplight Session) is on the calendar already — bring a real problem.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Monthly members can cancel any time, no questions. Annual members have the full 60-day refund window. After that, annual is committed for the year.",
  },
  {
    q: "What's the time commitment?",
    a: "One call per month (about 90 minutes). Quarterly in-person events (one full day, four per year). A community you check when you have a question — not when a program tells you to. Designed for owners who are already full.",
  },
  {
    q: "What size businesses are in the room?",
    a: "Owners ranging from low six figures to mid eight figures in revenue. The unifying trait is not size — it's seriousness about what they're building.",
  },
  {
    q: "Will the price ever go up?",
    a: "Yes. As the curriculum library grows and the proof compounds, the price will increase for new members. Charter members lock in their rate for as long as they remain active.",
  },
  {
    q: "Who do I contact with questions?",
    a: "Email us. We're real people. We'll write back.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* TOP BAR */}
      <header className="border-b border-forge-ink/10 bg-white">
        <div className="container-wide flex items-center justify-between py-5 px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="The Forge" width={64} height={64} className="h-12 w-auto" priority />
          </div>
          <a href="#pricing" className="display text-sm tracking-widest text-forge-red hover:text-forge-redDark">JOIN THE FORGE →</a>
        </div>
      </header>

      {/* HERO + VSL */}
      <section className="section bg-white">
        <div className="container-narrow text-center">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-6">FOR OMAHA BUSINESS OWNERS</p>
          <h1 className="display text-4xl md:text-6xl leading-tight mb-6">
            The room business owners <br className="hidden md:block" />have been waiting for.
          </h1>
          <p className="text-lg md:text-xl text-forge-steel max-w-2xl mx-auto mb-10">
            A local mastermind built on Christian values. Real owners. Real problems. Real progress.
          </p>

          {/* VSL PLACEHOLDER */}
          <div className="aspect-video bg-forge-ink rounded-sm shadow-2xl mx-auto max-w-3xl mb-8 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 text-center px-6">
              <div className="w-20 h-20 rounded-full bg-forge-red/90 flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <p className="display text-sm tracking-[0.2em] uppercase">VSL — Coming Soon</p>
              <p className="text-xs text-white/50 mt-2">Justin will walk you through what The Forge is and why now.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={PRICE_ANNUAL_URL} className="btn-primary">Join The Forge — Annual</a>
            <a href={PRICE_MONTHLY_URL} className="btn-secondary">Or Pay Monthly</a>
          </div>
          <p className="text-sm text-forge-stone mt-4">$1,000/year (save $200) or $100/month · 60-day money-back guarantee</p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section bg-forge-paper">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">THE GAP WE BUILT THIS TO FILL</p>
            <h2 className="display text-3xl md:text-5xl leading-tight">If you're the one carrying the weight, you already know.</h2>
          </div>
          <div className="space-y-5 text-lg text-forge-steel max-w-2xl mx-auto">
            <p>You're making the hard calls on growth, hiring, and cash flow.</p>
            <p>You don't really have a room of peers you can be fully honest with.</p>
            <p>Most networking events feel shallow, or like someone's trying to sell you something.</p>
            <p>And even when things are going fine, there's still that thought in the back of your mind:</p>
            <p className="display text-2xl text-forge-ink italic">"It would be nice to be in a room with other owners who actually get it."</p>
            <p className="pt-4">That's the gap we built The Forge to fill.</p>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">WHAT THE FORGE ACTUALLY IS</p>
            <h2 className="display text-3xl md:text-5xl leading-tight mb-6">Not a network. Not a seminar. A room.</h2>
            <hr className="hr-rule" />
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="display text-sm tracking-widest text-forge-red mb-3">IT IS</p>
              <ul className="space-y-3 text-lg text-forge-steel">
                <li>A room of local Omaha business owners</li>
                <li>Built on strong Christian values</li>
                <li>Focused on practical growth, leadership, and execution</li>
                <li>Led by five operators still actively running businesses</li>
              </ul>
            </div>
            <div>
              <p className="display text-sm tracking-widest text-forge-red mb-3">IT IS NOT</p>
              <ul className="space-y-3 text-lg text-forge-steel">
                <li>A church service</li>
                <li>A networking mixer or pitch fest</li>
                <li>A motivational seminar</li>
                <li>A national mastermind you have to fly to</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-12 text-forge-stone italic">You do not have to be a Christian to be in The Forge. You do have to operate with integrity.</p>
        </div>
      </section>

      {/* STOPLIGHT SESSION */}
      <section className="section bg-forge-ink text-white">
        <div className="container-narrow text-center">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">THE STOPLIGHT SESSION</p>
          <h2 className="display text-3xl md:text-5xl leading-tight mb-8">The reason people remember the room.</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Every member brings one real issue they're working through. Not hypothetical. Not "someday." Something that's real right now.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
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
          <p className="text-white/80 max-w-2xl mx-auto">
            Then five experienced operators help you think it through. Most paid masterminds never actually make time for this. The Forge is built around it.
          </p>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="section bg-forge-paper">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">WHAT YOU GET</p>
            <h2 className="display text-3xl md:text-5xl leading-tight">Everything in the room. Everything that comes with it.</h2>
          </div>
          <div className="bg-white border border-forge-ink/10 shadow-sm">
            {stack.map((row, i) => (
              <div key={i} className={`flex flex-col md:flex-row md:items-center justify-between gap-2 px-6 md:px-10 py-6 ${i !== stack.length - 1 ? "border-b border-forge-ink/10" : ""}`}>
                <p className="text-lg md:text-xl text-forge-ink">{row.item}</p>
                <p className="display text-sm tracking-wider text-forge-red whitespace-nowrap">{row.value}</p>
              </div>
            ))}
            <div className="bg-forge-ink text-white px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center justify-between">
              <p className="display text-lg tracking-wider">TOTAL STACK VALUE</p>
              <p className="display text-2xl tracking-wider">$2,000+ / month</p>
            </div>
          </div>
          <p className="text-center mt-8 text-forge-steel text-lg">
            Your investment: <span className="display text-forge-red">$100/month</span> or <span className="display text-forge-red">$1,000/year</span>.
          </p>
        </div>
      </section>

      {/* FOR / NOT FOR */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">THIS IS FOR YOU IF</p>
              <ul className="space-y-4 text-lg text-forge-steel">
                {forYou.map((line, i) => (
                  <li key={i} className="flex gap-3"><span className="text-forge-red display">✓</span><span>{line}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="display text-xs tracking-[0.3em] text-forge-stone mb-4">THIS IS NOT FOR YOU IF</p>
              <ul className="space-y-4 text-lg text-forge-steel">
                {notForYou.map((line, i) => (
                  <li key={i} className="flex gap-3"><span className="text-forge-stone display">✗</span><span>{line}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section bg-forge-paper">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">THE FOUNDING MEMBERS</p>
            <h2 className="display text-3xl md:text-5xl leading-tight mb-4">Still in the arena.</h2>
            <p className="text-lg text-forge-steel max-w-2xl mx-auto">Not advisors who stepped out. Five Omaha operators actively running real businesses. Combined experience scaling companies into the seven and eight figures.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {founders.map((f) => (
              <div key={f.name} className="bg-white border border-forge-ink/10 p-3 text-center">
                <div className="relative aspect-[4/5] bg-forge-ink/5 mb-4 overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="display text-base">{f.name}</p>
                <p className="text-xs text-forge-stone mt-1">{f.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">JOIN THE FORGE</p>
            <h2 className="display text-3xl md:text-5xl leading-tight mb-4">You are either in. Or you are not.</h2>
            <p className="text-lg text-forge-steel">Charter member pricing. Locked in for as long as you remain active.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* ANNUAL */}
            <div className="relative bg-forge-ink text-white p-8 border-4 border-forge-red">
              <div className="absolute -top-3 right-6 bg-forge-red text-white display text-xs tracking-widest px-3 py-1">SAVE $200</div>
              <p className="display text-sm tracking-widest text-forge-red mb-2">ANNUAL</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="display text-5xl">$1,000</span>
                <span className="text-white/60">/year</span>
              </div>
              <p className="text-sm text-white/60 mb-6"><span className="line-through">$1,200</span> &nbsp;equivalent to $83/month</p>
              <ul className="space-y-2 text-sm text-white/80 mb-8">
                <li>✓ Lock in charter member pricing</li>
                <li>✓ Full access to everything</li>
                <li>✓ 60-day money-back guarantee</li>
              </ul>
              <a href={PRICE_ANNUAL_URL} className="btn-primary block text-center w-full">Join The Forge — Annual</a>
            </div>

            {/* MONTHLY */}
            <div className="bg-white border-2 border-forge-ink p-8">
              <p className="display text-sm tracking-widest text-forge-red mb-2">MONTHLY</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="display text-5xl text-forge-ink">$100</span>
                <span className="text-forge-stone">/month</span>
              </div>
              <p className="text-sm text-forge-stone mb-6">Cancel anytime.</p>
              <ul className="space-y-2 text-sm text-forge-steel mb-8">
                <li>✓ Same full access</li>
                <li>✓ Lock in current pricing</li>
                <li>✓ 60-day money-back guarantee</li>
              </ul>
              <a href={PRICE_MONTHLY_URL} className="btn-secondary block text-center w-full">Join The Forge — Monthly</a>
            </div>
          </div>

          <p className="text-center mt-8 text-forge-stone italic">Same Forge. Same access. Same five founders. Same room. Pick the cadence that works.</p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section bg-forge-red text-white">
        <div className="container-narrow text-center">
          <div className="inline-block border-4 border-white/30 p-10 max-w-2xl">
            <p className="display text-xs tracking-[0.3em] mb-4">OUR PROMISE TO YOU</p>
            <h2 className="display text-4xl md:text-5xl mb-6">60-Day Money-Back Guarantee</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              If The Forge is not worth every dollar in your first 60 days, email us and we will refund you in full. No forms. No conditions. No awkward conversation.
            </p>
            <p className="text-white/80 mt-4 italic">We are confident enough in what we built to back it up.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-forge-paper">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">QUESTIONS</p>
            <h2 className="display text-3xl md:text-5xl">Answered honestly.</h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="bg-white border border-forge-ink/10 p-6 group">
                <summary className="display text-lg cursor-pointer list-none flex justify-between items-start gap-4">
                  <span>{item.q}</span>
                  <span className="text-forge-red text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-forge-steel leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-forge-ink text-white">
        <div className="container-narrow text-center">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-6">ONE MORE THING</p>
          <h2 className="display text-3xl md:text-5xl leading-tight mb-8 max-w-2xl mx-auto">
            Most business owners don't regret joining rooms like this.
            <br className="hidden md:block" /> They regret waiting too long to put themselves in one.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={PRICE_ANNUAL_URL} className="btn-primary">Join The Forge — $1,000/year</a>
            <a href={PRICE_MONTHLY_URL} className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-forge-ink">Or $100/month</a>
          </div>
          <p className="text-white/60 text-sm">Backed by our 60-day no-questions-asked refund.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white/60 py-10 px-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="The Forge" width={40} height={40} className="h-10 w-auto" />
            <p className="text-xs">A ministry of Church of the Heartland · Omaha, NE</p>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:hello@churchoftheheartland.org" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
