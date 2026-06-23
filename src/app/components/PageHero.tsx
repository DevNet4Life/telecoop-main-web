interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  position?: string;
}

export function PageHero({ title, subtitle, imageUrl, position = "center" }: PageHeroProps) {
  return (
    <div
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: position,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
      {/* Red bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-white mb-3">{title}</h1>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed italic font-normal">{subtitle}</p>
      </div>
    </div>
  );
}
