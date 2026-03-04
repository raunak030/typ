import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, BookOpen, Globe, Users, FileText, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getSiteContent } from '@/lib/content';

async function getLatestPublications() {
  try {
    // In a real app, this would fetch from a database or use an absolute URL
    // For this environment, we can read the file directly or use a helper
    const fs = require('fs');
    const path = require('path');
    const dataFilePath = path.join(process.cwd(), 'data', 'publications.json');
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      const pubs = JSON.parse(data);
      return pubs.slice(0, 3);
    }
  } catch (error) {
    console.error('Failed to load publications for home page', error);
  }
  return [];
}

export default async function Home() {
  const content = getSiteContent();
  const homeContent = content.home;
  const latestPublications = await getLatestPublications();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://picsum.photos/seed/institution/1920/1080?grayscale"
              alt="Institutional background"
              fill
              sizes="100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-300 backdrop-blur-sm">
                {homeContent.hero.tagline}
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {homeContent.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                {homeContent.hero.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={homeContent.hero.primaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200"
                >
                  {homeContent.hero.primaryCtaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={homeContent.hero.secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-700 bg-transparent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                >
                  {homeContent.hero.secondaryCtaText}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {homeContent.pillars.title}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {homeContent.pillars.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="group relative border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-md">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-slate-900 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">National Conferences</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Annual flagship summits bringing together youth leaders, policymakers, and academics to deliberate on critical national issues.
                </p>
                <Link href="/initiatives/national-conferences" className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:underline">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Pillar 2 */}
              <div className="group relative border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-md">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-slate-900 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">State Chapters</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Decentralized institutional presence ensuring regional representation and localized civic engagement across Indian states.
                </p>
                <Link href="/initiatives/state-chapters" className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:underline">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Pillar 3 */}
              <div className="group relative border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-md">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-slate-900 text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">Youth Reports</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Comprehensive, data-driven assessments of youth perspectives on governance, economy, and social policy.
                </p>
                <Link href="/initiatives/youth-reports" className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:underline">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Pillar 4 */}
              <div className="group relative border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-md">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-slate-900 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">Research & Publications</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Rigorous academic and policy research produced by our network of young scholars and subject matter experts.
                </p>
                <Link href="/publications" className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:underline">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Research Section */}
        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-y border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Latest Publications
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Evidence-based analysis and policy recommendations from our research divisions.
                </p>
              </div>
              <Link
                href="/publications"
                className="inline-flex items-center text-sm font-medium text-slate-900 hover:underline"
              >
                View all publications <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {latestPublications.map((pub: any) => (
                <article key={pub.id} className="group flex flex-col bg-white border border-slate-200 transition-shadow hover:shadow-md">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                    <Image
                      src={`https://picsum.photos/seed/${pub.imageSeed}/800/600?grayscale`}
                      alt="Report cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      <span>{pub.typeLabel}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                      <span>{pub.date}</span>
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-slate-900 group-hover:underline">
                      <Link href={pub.link}>
                        {pub.title}
                      </Link>
                    </h3>
                    <p className="mb-6 flex-1 text-sm text-slate-600 line-clamp-3">
                      {pub.description}
                    </p>
                    <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                      <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden relative">
                        <Image src={`https://picsum.photos/seed/author${pub.id}/100/100?grayscale`} alt="Author" fill sizes="32px" className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-sm font-medium text-slate-900">{pub.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {homeContent.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              {homeContent.cta.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={homeContent.cta.primaryCtaLink}
                className="inline-flex w-full items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 sm:w-auto"
              >
                {homeContent.cta.primaryCtaText}
              </Link>
              <Link
                href={homeContent.cta.secondaryCtaLink}
                className="inline-flex w-full items-center justify-center rounded-sm border border-slate-700 bg-transparent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-slate-800 sm:w-auto"
              >
                {homeContent.cta.secondaryCtaText}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
