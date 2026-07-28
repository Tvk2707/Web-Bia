export function ArtDecoLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-yellow-600/0 via-yellow-600/50 to-yellow-600/0"></div>
      <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
      <div className="flex-1 h-px bg-gradient-to-r from-yellow-600/0 via-yellow-600/50 to-yellow-600/0"></div>
    </div>
  );
}

export function ArtDecoCorner({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="w-6 h-6 border-2 border-yellow-600/30"></div>
    </div>
  );
}

export function ArtDecoDivider() {
  return (
    <div className="flex justify-center items-center gap-4 py-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-yellow-600 rotate-45"></div>
        <div className="w-1 h-1 bg-yellow-600 rotate-45"></div>
        <div className="w-1 h-1 bg-yellow-600 rotate-45"></div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
    </div>
  );
}
