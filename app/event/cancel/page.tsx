import Image from "next/image";

export const metadata = {
  title: "Checkout Canceled — The Forge Event",
  description: "Your Forge event checkout was canceled.",
};

export default function EventCancelPage() {
  return (
    <main className="min-h-screen bg-forge-paper">
      <header className="border-b border-forge-ink/10 bg-white">
        <div className="container-wide flex items-center justify-between py-5 px-6">
          <a href="/" className="flex items-center gap-3" aria-label="The Forge home">
            <Image src="/logo.jpg" alt="The Forge" width={64} height={64} className="h-12 w-auto" priority />
          </a>
          <a href="/event" className="display text-sm tracking-widest text-forge-red hover:text-forge-redDark">
            RETURN TO EVENT
          </a>
        </div>
      </header>

      <section className="section">
        <div className="container-narrow text-center bg-white border border-forge-ink/10 p-8 md:p-12">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">CHECKOUT CANCELED</p>
          <h1 className="display text-4xl md:text-6xl leading-tight mb-6">No ticket was purchased.</h1>
          <p className="text-lg text-forge-steel max-w-2xl mx-auto mb-8">
            You can return to the event page whenever you are ready and complete your ticket purchase through Stripe.
          </p>
          <a href="/event#ticket" className="btn-primary">Get My Ticket</a>
        </div>
      </section>
    </main>
  );
}
