import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function NationalConferences() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-300">
              Initiatives
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              National Conferences
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Our flagship summits bringing together youth leaders, policymakers, and academics to deliberate on critical national issues.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">The Premier Forum for Youth Policy Dialogue</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The Yuva Panchayat National Conferences are not typical youth summits. They are rigorous, multi-day policy formulation exercises designed to bridge the gap between young citizens and institutional decision-makers.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Each conference focuses on a specific thematic area—ranging from economic mobility to climate resilience—and culminates in a formal policy document presented to relevant government ministries and legislative committees.
                </p>
                <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 font-serif mb-1">15+</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Conferences Held</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 font-serif mb-1">5,000+</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Delegates Engaged</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 font-serif mb-1">42</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Policy Briefs Submitted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 font-serif mb-1">28</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">States Represented</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square w-full overflow-hidden bg-slate-200 lg:aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/conference-main/1200/900?grayscale"
                  alt="National Conference Plenary Session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Conference */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-y border-slate-200">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl font-bold text-slate-900">Upcoming Summit</h2>
            </div>
            
            <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative min-h-[250px] bg-slate-900 md:col-span-1">
                  <Image
                    src="https://picsum.photos/seed/delhi-summit/600/800?grayscale"
                    alt="Delhi Summit"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="inline-flex items-center rounded-sm bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md w-fit">
                      Registrations Open
                    </div>
                    <div>
                      <div className="text-4xl font-serif font-bold text-white mb-1">2026</div>
                      <div className="text-lg font-medium text-slate-300">Annual Policy Conclave</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:col-span-2 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                    The Future of Work: AI, Automation, and the Indian Workforce
                  </h3>
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>November 12-14, 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>New Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4 text-slate-400" />
                      <span>500 Delegates</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Join leading economists, technologists, and policymakers to draft comprehensive recommendations on preparing India&apos;s youth demographic for the disruptions and opportunities of the AI era.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/events/future-of-work-2026"
                      className="inline-flex items-center justify-center rounded-sm bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                    >
                      Apply as Delegate
                    </Link>
                    <Link
                      href="/events/future-of-work-2026/agenda"
                      className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      View Agenda
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Conferences Archive */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Past Conferences Archive</h2>
              <Link href="/events/archive" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Past Event 1 */}
              <div className="border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">October 2025 • Mumbai</div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                  <Link href="/events/urban-governance-2025" className="hover:underline">
                    Urban Governance and Sustainable Cities
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  Examining decentralized administration and infrastructure financing for India&apos;s rapidly expanding urban centers.
                </p>
                <Link href="/publications/urban-governance-report" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  Read Outcome Report <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Past Event 2 */}
              <div className="border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">March 2025 • Bengaluru</div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                  <Link href="/events/digital-public-infrastructure-2025" className="hover:underline">
                    Digital Public Infrastructure & Data Privacy
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  Balancing state capacity, service delivery efficiency, and individual privacy rights in the digital age.
                </p>
                <Link href="/publications/dpi-privacy-framework" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  Read Outcome Report <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Past Event 3 */}
              <div className="border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">September 2024 • Pune</div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                  <Link href="/events/higher-education-reform-2024" className="hover:underline">
                    Higher Education Reform & Employability
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  Aligning university curricula with industry requirements and fostering research-driven academic institutions.
                </p>
                <Link href="/publications/education-reform-brief" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  Read Outcome Report <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
