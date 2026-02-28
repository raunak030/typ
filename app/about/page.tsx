import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About The Yuva Panchayat
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Building the intellectual infrastructure for the next generation of Indian leadership.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                The Yuva Panchayat was established with a singular vision: to elevate the quality of civic discourse among India&apos;s youth. In an era increasingly defined by polarization and emotional reaction, we provide a structured, non-partisan platform for rational dialogue, rigorous research, and evidence-based policy formulation.
              </p>

              <div className="my-12 relative aspect-[21/9] w-full overflow-hidden bg-slate-200">
                <Image
                  src="https://picsum.photos/seed/about-mission/1200/600?grayscale"
                  alt="Youth dialogue session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Core Principles</h2>
              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-1">Non-Partisan Engagement</strong>
                    <span className="text-slate-600">We do not align with any political party. Our allegiance is to the democratic process and the intellectual rigor of policy debate.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-1">Evidence Over Emotion</strong>
                    <span className="text-slate-600">Discussions must be grounded in data, historical context, and logical analysis rather than rhetoric or sentiment.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-1">Constructive Outcomes</strong>
                    <span className="text-slate-600">Dialogue is not an end in itself. We aim to produce actionable policy recommendations and comprehensive research reports.</span>
                  </div>
                </li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Institutional Structure</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Operating as a think tank and a national forum, The Yuva Panchayat is structured to ensure both deep research capabilities and broad geographic reach. Our National Secretariat coordinates the efforts of State Chapters, ensuring that localized issues receive national attention and that national policies are examined through regional lenses.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
