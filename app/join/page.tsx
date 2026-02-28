import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Join() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-slate-50">
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Become a Member
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Join a national network of young leaders committed to rational civic dialogue and evidence-based policy.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm border border-slate-200">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Personal Information</h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First Name</label>
                      <input type="text" id="firstName" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last Name</label>
                      <input type="text" id="lastName" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                      <input type="email" id="email" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                      <input type="tel" id="phone" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-slate-700">Date of Birth</label>
                      <input type="date" id="dob" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                  </div>
                </div>

                {/* Academic & Professional */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Academic & Professional Background</h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="institution" className="block text-sm font-medium text-slate-700">Current Institution / Organization</label>
                      <input type="text" id="institution" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                    <div>
                      <label htmlFor="degree" className="block text-sm font-medium text-slate-700">Degree / Role</label>
                      <input type="text" id="degree" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                    <div>
                      <label htmlFor="field" className="block text-sm font-medium text-slate-700">Field of Study / Industry</label>
                      <input type="text" id="field" className="mt-1 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" />
                    </div>
                  </div>
                </div>

                {/* Engagement */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Areas of Interest</h2>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">Select the initiatives you are most interested in contributing to:</p>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input id="interest-research" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="interest-research" className="font-medium text-slate-700">Policy Research & Writing</label>
                        <p className="text-slate-500">Contributing to Youth Reports and Issue Briefs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input id="interest-chapters" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="interest-chapters" className="font-medium text-slate-700">State Chapter Leadership</label>
                        <p className="text-slate-500">Organizing local dialogues and managing regional operations.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input id="interest-conferences" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="interest-conferences" className="font-medium text-slate-700">National Conferences</label>
                        <p className="text-slate-500">Attending or helping organize flagship summits.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statement of Purpose */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Statement of Purpose</h2>
                  <div>
                    <label htmlFor="sop" className="block text-sm font-medium text-slate-700">Briefly describe why you want to join The Yuva Panchayat and what perspective you bring to civic dialogue. (Max 250 words)</label>
                    <textarea id="sop" rows={5} className="mt-2 block w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full flex justify-center rounded-sm bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-colors">
                    Submit Application
                  </button>
                  <p className="mt-4 text-center text-xs text-slate-500">
                    By submitting this application, you agree to our <Link href="/terms" className="underline hover:text-slate-900">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-slate-900">Privacy Policy</Link>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
