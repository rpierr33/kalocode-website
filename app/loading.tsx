export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-[#1E1E1E]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00FF94] animate-spin" />
        </div>
        <span className="font-mono text-xs text-[#888888] tracking-widest uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
