import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Map, Users, Target, ArrowRight } from 'lucide-react';

export default function StateChapters() {
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
              State Chapters
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Decentralized institutional presence ensuring regional representation and localized civic engagement across Indian states.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 relative aspect-square w-full overflow-hidden bg-slate-200 lg:aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/state-chapters-map/1200/900?grayscale"
                  alt="State Chapters Network"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Localizing National Discourse</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  India&apos;s diversity demands that national policy discussions be informed by regional realities. The Yuva Panchayat State Chapters serve as the crucial link between local civic issues and national policy frameworks.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Operated by dedicated regional secretariats, these chapters conduct localized research, host state-level dialogues, and ensure that the unique perspectives of their respective states are represented at our national forums.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 text-slate-900">
                        <Map className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Regional Policy Research</h3>
                      <p className="text-sm text-slate-600">Producing data-driven reports on state-specific challenges, from agricultural economics in Punjab to coastal resilience in Kerala.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 text-slate-900">
                        <Users className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Grassroots Engagement</h3>
                      <p className="text-sm text-slate-600">Organizing town halls, university debates, and stakeholder consultations to gather diverse youth perspectives.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 text-slate-900">
                        <Target className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Leadership Development</h3>
                      <p className="text-sm text-slate-600">Identifying and mentoring the next generation of regional civic leaders through structured fellowship programs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Chapters Directory */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-slate-900">Active State Chapters</h2>
              <p className="mt-4 text-slate-600">Find your regional secretariat and get involved locally.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Chapter Card */}
              <div className="group bg-white border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Maharashtra</h3>
                <div className="text-sm text-slate-500 mb-4">Secretariat: Mumbai</div>
                <div className="space-y-2 mb-6 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Members</span>
                    <span className="font-medium text-slate-900">1,240</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Focus Area</span>
                    <span className="font-medium text-slate-900">Urban Infra</span>
                  </div>
                </div>
                <Link href="/chapters/maharashtra" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  View Chapter <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Chapter Card */}
              <div className="group bg-white border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Karnataka</h3>
                <div className="text-sm text-slate-500 mb-4">Secretariat: Bengaluru</div>
                <div className="space-y-2 mb-6 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Members</span>
                    <span className="font-medium text-slate-900">980</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Focus Area</span>
                    <span className="font-medium text-slate-900">Tech Policy</span>
                  </div>
                </div>
                <Link href="/chapters/karnataka" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  View Chapter <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Chapter Card */}
              <div className="group bg-white border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Uttar Pradesh</h3>
                <div className="text-sm text-slate-500 mb-4">Secretariat: Lucknow</div>
                <div className="space-y-2 mb-6 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Members</span>
                    <span className="font-medium text-slate-900">2,100</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Focus Area</span>
                    <span className="font-medium text-slate-900">Agritech</span>
                  </div>
                </div>
                <Link href="/chapters/uttar-pradesh" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  View Chapter <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Chapter Card */}
              <div className="group bg-white border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Tamil Nadu</h3>
                <div className="text-sm text-slate-500 mb-4">Secretariat: Chennai</div>
                <div className="space-y-2 mb-6 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Members</span>
                    <span className="font-medium text-slate-900">850</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Focus Area</span>
                    <span className="font-medium text-slate-900">Education</span>
                  </div>
                </div>
                <Link href="/chapters/tamil-nadu" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  View Chapter <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/chapters"
                className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                View All 28 State Chapters
              </Link>
            </div>
          </div>
        </section>

        {/* Start a Chapter CTA */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Establish a Local Chapter
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Don&apos;t see an active chapter in your district or university? We provide the institutional framework, training, and resources to help you establish a local presence.
            </p>
            <div className="mt-10">
              <Link
                href="/chapters/apply"
                className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200"
              >
                Apply to Lead a Chapter
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
