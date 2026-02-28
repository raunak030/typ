'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, ChevronDown, X, Loader2 } from 'lucide-react';
import { Suspense, useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface Publication {
  id: number;
  type: string;
  typeLabel: string;
  topic: string;
  date: string;
  title: string;
  link: string;
  description: string;
  author: string;
  imageSeed: string;
}

function PublicationsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const typeFilter = searchParams.get('type') || '';
  const topicFilter = searchParams.get('topic') || '';
  const sortOrder = searchParams.get('sort') || 'newest';
  const searchQuery = searchParams.get('q') || '';
  const currentPage = Number(searchParams.get('page')) || 1;

  const [searchInput, setSearchInput] = useState(searchQuery);
  const [publicationsData, setPublicationsData] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/publications');
        if (!response.ok) {
          throw new Error('Failed to fetch publications');
        }
        const data = await response.json();
        setPublicationsData(data);
      } catch (err) {
        setError('An error occurred while loading publications.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    if (key !== 'page') {
      params.set('page', '1');
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    handleFilterChange('page', page.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilterChange('q', searchInput);
  };

  let filteredPublications = publicationsData.filter((pub) => {
    if (typeFilter && pub.type !== typeFilter) return false;
    if (topicFilter && pub.topic !== topicFilter) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchTitle = pub.title.toLowerCase().includes(query);
      const matchDesc = pub.description.toLowerCase().includes(query);
      const matchAuthor = pub.author.toLowerCase().includes(query);
      if (!matchTitle && !matchDesc && !matchAuthor) return false;
    }
    return true;
  });

  if (sortOrder === 'oldest') {
    filteredPublications.reverse();
  }

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage) || 1;
  const currentPublications = filteredPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Research & Publications
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Evidence-based analysis, policy briefs, and comprehensive reports from The Yuva Panchayat Research Desk.
          </p>
          
          {/* Prominent Search Bar */}
          <form onSubmit={handleSearch} className="mt-10 max-w-2xl mx-auto relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="block w-full rounded-sm border-0 bg-white/10 py-4 pl-12 pr-24 text-base text-white placeholder-slate-400 shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-white sm:text-lg"
              placeholder="Search by title, keyword, or author..."
            />
            <button type="submit" className="absolute inset-y-2 right-2 rounded-sm bg-white px-6 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 transition-colors">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          
          {/* Filters */}
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
              <div className="flex items-center gap-2 hidden sm:flex">
                <Filter className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">Filters:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <select 
                    value={typeFilter}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="appearance-none w-full sm:w-48 rounded-full border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all cursor-pointer"
                  >
                    <option value="">All Types</option>
                    <option value="policy-brief">Policy Brief</option>
                    <option value="working-paper">Working Paper</option>
                    <option value="annual-report">Annual Report</option>
                    <option value="issue-brief">Issue Brief</option>
                    <option value="data-analysis">Data Analysis</option>
                    <option value="white-paper">White Paper</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                </div>
                
                <div className="relative w-full sm:w-auto">
                  <select 
                    value={topicFilter}
                    onChange={(e) => handleFilterChange('topic', e.target.value)}
                    className="appearance-none w-full sm:w-48 rounded-full border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all cursor-pointer"
                  >
                    <option value="">All Topics</option>
                    <option value="civic-engagement">Civic Engagement</option>
                    <option value="economy">Economy & Employment</option>
                    <option value="education">Education</option>
                    <option value="environment">Environment & Climate</option>
                    <option value="technology">Technology & AI</option>
                    <option value="governance">Governance</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                </div>

                {(typeFilter || topicFilter || sortOrder !== 'newest' || searchQuery) && (
                  <button
                    onClick={() => router.push(pathname)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors w-full sm:w-auto"
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="relative w-full sm:w-auto mt-4 lg:mt-0">
              <select 
                value={sortOrder}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="appearance-none w-full sm:w-56 rounded-full border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all cursor-pointer lg:ml-auto"
              >
                <option value="newest">Sort by Date (Descending)</option>
                <option value="oldest">Sort by Date (Ascending)</option>
                <option value="popular">Most Read</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            </div>
          </div>

          {/* Publications Grid */}
          {isLoading ? (
            <div className="flex justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-lg text-red-500">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 text-sm font-medium text-slate-900 hover:underline"
              >
                Try again
              </button>
            </div>
          ) : currentPublications.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPublications.map((pub) => (
                <article key={pub.id} className="group flex flex-col bg-white border border-slate-200 transition-shadow hover:shadow-md">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                    <Image
                      src={`https://picsum.photos/seed/${pub.imageSeed}/800/600?grayscale`}
                      alt="Report cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      <span className="text-sm font-medium text-slate-900">{pub.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-slate-500">No publications found matching your filters.</p>
              <button 
                onClick={() => router.push(pathname)}
                className="mt-4 text-sm font-medium text-slate-900 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center gap-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                      currentPage === page 
                        ? 'bg-slate-900 text-white' 
                        : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  Next
                </button>
              </nav>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default function Publications() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center"><p>Loading...</p></div>}>
        <PublicationsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
