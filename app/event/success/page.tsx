import Image from "next/image";

export const metadata = {
  title: "Ticket Confirmed — The Forge Event",
  description: "Your ticket for The Forge event has been confirmed.",
};

export default function EventSuccessPage() {
  return (
    <main className="min-h-screen bg-forge-paper">
      <header className="border-b border-forge-ink/10 bg-white">
        <div className="container-wide flex items-center justify-between py-5 px-6">
          <a href="/" className="flex items-center gap-3" aria-label="The Forge home">
            <Image src="/logo.jpg" alt="The Forge" width={64} height={64} className="h-12 w-auto" priority />
          </a>
          <a href="/event" className="display text-sm tracking-widest text-forge-red hover:text-forge-redDark">
            EVENT DETAILS
          </a>
        </div>
      </header>

      <section className="section">
        <div className="container-narrow text-center bg-white border border-forge-ink/10 p-8 md:p-12">
          <p className="display text-xs tracking-[0.3em] text-forge-red mb-4">YOU ARE IN</p>
          <h1 className="display text-4xl md:text-6xl leading-tight mb-6">Your ticket is confirmed.</h1>
          <p className="text-lg text-forge-steel max-w-2xl mx-auto mb-8">
            Stripe will send your receipt by email. We will see you June 12 from 8 AM to 4 PM at Church of the
            Heartland, 9635 M Street, Omaha.
          </p>
          <a href="/event" className="btn-primary">Back To Event Page</a>
        </div>
      </section>
    </main>
  );
}
