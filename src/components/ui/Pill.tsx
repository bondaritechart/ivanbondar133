export const Pill = ({ label }: { label: string }) => (
  <span className="border-primary/30 bg-primary/10 hover:bg-primary/20 inline-block rounded-full border px-3 py-1 text-xs text-purple-300 transition-colors duration-200">
    {label}
  </span>
);
