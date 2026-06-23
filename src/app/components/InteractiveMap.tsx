export function InteractiveMap() {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-slate-200" style={{ height: "420px" }}>
      <iframe
        title="TeleCoop Main Office Location"
        src="https://maps.google.com/maps?q=Tabang+Plaridel+Bulacan+Philippines&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
