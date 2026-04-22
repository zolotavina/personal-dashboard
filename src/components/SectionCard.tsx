type SectionCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function SectionCard({
  title,
  children,
  className = "",
  contentClassName = "",
}: SectionCardProps) {
  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm ${className}`}>
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <div className={contentClassName}>{children}</div>
    </div>
  );
}