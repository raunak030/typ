import Link from 'next/link';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white text-slate-950 font-serif font-bold text-xl">
                YP
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight text-white">The Yuva</span>
                <span className="font-serif text-lg font-bold leading-tight text-white">Panchayat</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              A national youth dialogue platform focused on rational civic discussion in India. Non-political, non-partisan, and idea-driven.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Institution</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/advisory-board" className="hover:text-white transition-colors">Advisory Board</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Initiatives</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/initiatives/national-conferences" className="hover:text-white transition-colors">National Conferences</Link></li>
              <li><Link href="/initiatives/state-chapters" className="hover:text-white transition-colors">State Chapters</Link></li>
              <li><Link href="/initiatives/youth-reports" className="hover:text-white transition-colors">Youth Reports</Link></li>
              <li><Link href="/publications" className="hover:text-white transition-colors">Research & Publications</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact Secretariat</h3>
            <p className="mb-4 text-sm">Send us your inquiries, partnership proposals, or feedback.</p>
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs">&copy; {new Date().getFullYear()} The Yuva Panchayat. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors text-slate-500">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
