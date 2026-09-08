import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-100 relative bg-white" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">healthy-template</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Connected employee wellness for HR and people teams.
            </p>
          </div>

            <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Product</p>
              <div className="space-y-2">
                <Link href="/product" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Product Overview</Link>
                <Link href="/integrations" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Integrations</Link>
                <Link href="/challenges" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Challenges</Link>
                <Link href="/how-it-works" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">How It Works</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">For Teams</p>
              <div className="space-y-2">
                <Link href="/for-employers" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">For HR Teams</Link>
                <Link href="/signup" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Get Started</Link>
                <Link href="/contact" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Legal</p>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
                <Link href="/contact" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">&copy; 2026 healthy-template. All rights reserved.</p>
          <p className="text-xs text-gray-300">Built for the future of workplace wellness.</p>
        </div>
      </div>
    </footer>
  );
}
