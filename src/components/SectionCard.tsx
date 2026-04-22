type SectionCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionCard({
  title,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm ${className}`}>
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}