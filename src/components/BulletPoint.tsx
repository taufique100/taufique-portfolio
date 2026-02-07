export function BulletPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-cyan-400/40">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      </span>
      <p className="min-w-0 text-white/60 leading-7">
        {text}
      </p>
    </div>
  );
}
