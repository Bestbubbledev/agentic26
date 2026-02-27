const logos = ["Meridian", "Stackflow", "Brightpath", "Coreloop", "Venturi", "Nexpoint"];

export default function TrustLogos() {
  return (
    <section className="py-12 border-y border-white/5 bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6 font-medium">
          Trusted by growing businesses across the US
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-40 grayscale select-none">
          {logos.map((name) => (
            <span
              key={name}
              className="text-xl font-medium tracking-tighter uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
