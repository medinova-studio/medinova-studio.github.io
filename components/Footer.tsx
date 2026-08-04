export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
              <span className="text-ink-950 font-bold text-xs font-display">
                M
              </span>
            </div>
            <span className="font-display font-bold text-white text-sm">
              MEDINOVA <span className="text-cyan">STUDIO</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-[11px] text-slate-600">
            &copy; {new Date().getFullYear()} Medinova Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
