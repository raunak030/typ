import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, BarChart, Download, ArrowRight } from 'lucide-react';

export default function YouthReports() {
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
              Youth Reports
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Comprehensive, data-driven assessments of youth perspectives on governance, economy, and social policy.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Empirical Data for Policy Action</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The Yuva Panchayat Youth Reports are the definitive source for understanding the priorities, anxieties, and aspirations of India&apos;s largest demographic dividend. We move beyond anecdotal evidence to provide rigorous, survey-based insights.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our methodology involves stratified sampling across urban, semi-urban, and rural districts, ensuring that our findings accurately reflect the diverse realities of young Indians. These reports serve as foundational documents for policymakers, academics, and industry leaders.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 text-slate-900">
                        <BarChart className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Quantitative Rigor</h3>
                      <p className="text-sm text-slate-600">Sample sizes exceeding 50,000 respondents across 28 states, analyzed using advanced statistical modeling.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 text-slate-900">
                        <FileText className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Thematic Focus</h3>
                      <p className="text-sm text-slate-600">Deep dives into specific sectors including employment, education, mental health, and digital access.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square w-full overflow-hidden bg-slate-200 lg:aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/youth-reports-data/1200/900?grayscale"
                  alt="Data Analysis and Reporting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Report */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-y border-slate-200">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl font-bold text-slate-900">Flagship Publication</h2>
            </div>
            
            <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[300px] bg-slate-200 md:col-span-1">
                  <Image
                    src="https://picsum.photos/seed/national-youth-report/800/800?grayscale"
                    alt="National Youth Report Cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:col-span-1 flex flex-col justify-center">
                  <div className="mb-3 inline-flex items-center rounded-sm bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-600 w-fit">
                    Annual Report
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                    The National Youth Report 2025
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our comprehensive annual assessment of youth perspectives on governance, economic mobility, and social cohesion. Based on surveys of 75,000 young adults across India.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Publication Date</span>
                      <span className="font-medium text-slate-900">August 15, 2025</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Pages</span>
                      <span className="font-medium text-slate-900">142</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Authors</span>
                      <span className="font-medium text-slate-900">Research Desk</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/publications/national-youth-report-2025/download"
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 w-full"
                    >
                      <Download className="h-4 w-4" />
                      Download Full Report
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Reports Grid */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Recent Thematic Reports</h2>
              <Link href="/publications?type=report" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Report Card */}
              <div className="border border-slate-200 p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Education • Q3 2025</div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                  <Link href="/publications/skills-gap-analysis" className="hover:underline">
                    The Skills Gap Analysis: Industry Needs vs. Academic Output
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mb-6 flex-1">
                  A quantitative assessment of the disparity between university curricula and the evolving requirements of India&apos;s technology and manufacturing sectors.
                </p>
                <Link href="/publications/skills-gap-analysis/download" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  <Download className="h-3 w-3" /> Download PDF
                </Link>
              </div>

              {/* Report Card */}
              <div className="border border-slate-200 p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Economy • Q2 2025</div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                  <Link href="/publications/gig-economy-youth" className="hover:underline">
                    Youth in the Gig Economy: Security and Mobility
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mb-6 flex-1">
                  Evaluating the long-term economic prospects, social security needs, and regulatory frameworks required for young platform workers.
                </p>
                <Link href="/publications/gig-economy-youth/download" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  <Download className="h-3 w-3" /> Download PDF
                </Link>
              </div>

              {/* Report Card */}
              <div className="border border-slate-200 p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Governance • Q1 2025</div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                  <Link href="/publications/local-governance-participation" className="hover:underline">
                    Youth Participation in Local Governance
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mb-6 flex-1">
                  Analyzing the barriers to entry and effectiveness of youth involvement in Panchayati Raj institutions and urban local bodies.
                </p>
                <Link href="/publications/local-governance-participation/download" className="text-sm font-medium text-slate-900 hover:underline flex items-center gap-1">
                  <Download className="h-3 w-3" /> Download PDF
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
