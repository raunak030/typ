'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, CheckCircle2 } from 'lucide-react';

export default function ContentManagement() {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load content:', err);
        setIsLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Failed to save content:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const updateHomeHero = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      home: {
        ...prev.home,
        hero: {
          ...prev.home.hero,
          [field]: value
        }
      }
    }));
  };

  const updateHomePillars = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      home: {
        ...prev.home,
        pillars: {
          ...prev.home.pillars,
          [field]: value
        }
      }
    }));
  };

  const updateHomeCta = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      home: {
        ...prev.home,
        cta: {
          ...prev.home.cta,
          [field]: value
        }
      }
    }));
  };

  const updateAboutHeader = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      about: {
        ...prev.about,
        header: {
          ...prev.about.header,
          [field]: value
        }
      }
    }));
  };

  const updateAboutMission = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      about: {
        ...prev.about,
        mission: {
          ...prev.about.mission,
          [field]: value
        }
      }
    }));
  };

  const updateAboutStructure = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      about: {
        ...prev.about,
        structure: {
          ...prev.about.structure,
          [field]: value
        }
      }
    }));
  };

  const updateInitiatives = (page: string, section: string, field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      initiatives: {
        ...prev.initiatives,
        [page]: {
          ...prev.initiatives?.[page],
          [section]: {
            ...prev.initiatives?.[page]?.[section],
            [field]: value
          }
        }
      }
    }));
  };

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sticky top-0 bg-slate-50 z-10 py-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Content Management</h1>
          <p className="text-sm text-slate-500 mt-1">Edit the content of the public website.</p>
        </div>
        <div className="flex items-center gap-3">
          {saveSuccess && (
            <span className="text-sm font-medium text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" /> Saved
            </span>
          )}
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'home' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
        >
          Home Page
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'about' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
        >
          About Page
        </button>
        <button
          onClick={() => setActiveTab('initiatives')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'initiatives' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
        >
          Initiatives Pages
        </button>
      </div>

      <div className="space-y-8">
        {activeTab === 'home' && (
          <>
            {/* Home Page - Hero Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-900">Home Page: Hero Section</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tagline</label>
              <input 
                type="text" 
                value={content?.home?.hero?.tagline || ''}
                onChange={(e) => updateHomeHero('tagline', e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input 
                type="text" 
                value={content?.home?.hero?.title || ''}
                onChange={(e) => updateHomeHero('title', e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea 
                value={content?.home?.hero?.description || ''}
                onChange={(e) => updateHomeHero('description', e.target.value)}
                rows={4}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Primary CTA Text</label>
                <input 
                  type="text" 
                  value={content?.home?.hero?.primaryCtaText || ''}
                  onChange={(e) => updateHomeHero('primaryCtaText', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Primary CTA Link</label>
                <input 
                  type="text" 
                  value={content?.home?.hero?.primaryCtaLink || ''}
                  onChange={(e) => updateHomeHero('primaryCtaLink', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Secondary CTA Text</label>
                <input 
                  type="text" 
                  value={content?.home?.hero?.secondaryCtaText || ''}
                  onChange={(e) => updateHomeHero('secondaryCtaText', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Secondary CTA Link</label>
                <input 
                  type="text" 
                  value={content?.home?.hero?.secondaryCtaLink || ''}
                  onChange={(e) => updateHomeHero('secondaryCtaLink', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Home Page - Pillars Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-900">Home Page: Pillars Section</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input 
                type="text" 
                value={content?.home?.pillars?.title || ''}
                onChange={(e) => updateHomePillars('title', e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea 
                value={content?.home?.pillars?.description || ''}
                onChange={(e) => updateHomePillars('description', e.target.value)}
                rows={3}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* Home Page - CTA Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-900">Home Page: Bottom CTA</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input 
                type="text" 
                value={content?.home?.cta?.title || ''}
                onChange={(e) => updateHomeCta('title', e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea 
                value={content?.home?.cta?.description || ''}
                onChange={(e) => updateHomeCta('description', e.target.value)}
                rows={3}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Primary CTA Text</label>
                <input 
                  type="text" 
                  value={content?.home?.cta?.primaryCtaText || ''}
                  onChange={(e) => updateHomeCta('primaryCtaText', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Primary CTA Link</label>
                <input 
                  type="text" 
                  value={content?.home?.cta?.primaryCtaLink || ''}
                  onChange={(e) => updateHomeCta('primaryCtaLink', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Secondary CTA Text</label>
                <input 
                  type="text" 
                  value={content?.home?.cta?.secondaryCtaText || ''}
                  onChange={(e) => updateHomeCta('secondaryCtaText', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Secondary CTA Link</label>
                <input 
                  type="text" 
                  value={content?.home?.cta?.secondaryCtaLink || ''}
                  onChange={(e) => updateHomeCta('secondaryCtaLink', e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </section>
        </>
        )}

        {activeTab === 'about' && (
          <>
        {/* About Page - Header Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-900">About Page: Header Section</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input 
                type="text" 
                value={content?.about?.header?.title || ''}
                onChange={(e) => updateAboutHeader('title', e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
              <textarea 
                value={content?.about?.header?.subtitle || ''}
                onChange={(e) => updateAboutHeader('subtitle', e.target.value)}
                rows={2}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* About Page - Mission Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-900">About Page: Mission Section</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input 
                type="text" 
                value={content?.about?.mission?.title || ''}
                onChange={(e) => updateAboutMission('title', e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
              <textarea 
                value={content?.about?.mission?.content || ''}
                onChange={(e) => updateAboutMission('content', e.target.value)}
                rows={4}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* About Page - Structure Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-900">About Page: Structure Section</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input 
                type="text" 
                value={content?.about?.structure?.title || ''}
                onChange={(e) => updateAboutStructure('title', e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
              <textarea 
                value={content?.about?.structure?.content || ''}
                onChange={(e) => updateAboutStructure('content', e.target.value)}
                rows={4}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>
        </>
        )}

        {activeTab === 'initiatives' && (
          <>
            {/* Initiatives - National Conferences */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h2 className="text-lg font-semibold text-slate-900">National Conferences</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Header Title</label>
                  <input 
                    type="text" 
                    value={content?.initiatives?.nationalConferences?.header?.title || ''}
                    onChange={(e) => updateInitiatives('nationalConferences', 'header', 'title', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Header Subtitle</label>
                  <textarea 
                    value={content?.initiatives?.nationalConferences?.header?.subtitle || ''}
                    onChange={(e) => updateInitiatives('nationalConferences', 'header', 'subtitle', e.target.value)}
                    rows={2}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Title</label>
                  <input 
                    type="text" 
                    value={content?.initiatives?.nationalConferences?.overview?.title || ''}
                    onChange={(e) => updateInitiatives('nationalConferences', 'overview', 'title', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Content 1</label>
                  <textarea 
                    value={content?.initiatives?.nationalConferences?.overview?.content1 || ''}
                    onChange={(e) => updateInitiatives('nationalConferences', 'overview', 'content1', e.target.value)}
                    rows={3}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Content 2</label>
                  <textarea 
                    value={content?.initiatives?.nationalConferences?.overview?.content2 || ''}
                    onChange={(e) => updateInitiatives('nationalConferences', 'overview', 'content2', e.target.value)}
                    rows={3}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </section>

            {/* Initiatives - State Chapters */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h2 className="text-lg font-semibold text-slate-900">State Chapters</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Header Title</label>
                  <input 
                    type="text" 
                    value={content?.initiatives?.stateChapters?.header?.title || ''}
                    onChange={(e) => updateInitiatives('stateChapters', 'header', 'title', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Header Subtitle</label>
                  <textarea 
                    value={content?.initiatives?.stateChapters?.header?.subtitle || ''}
                    onChange={(e) => updateInitiatives('stateChapters', 'header', 'subtitle', e.target.value)}
                    rows={2}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Title</label>
                  <input 
                    type="text" 
                    value={content?.initiatives?.stateChapters?.overview?.title || ''}
                    onChange={(e) => updateInitiatives('stateChapters', 'overview', 'title', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Content 1</label>
                  <textarea 
                    value={content?.initiatives?.stateChapters?.overview?.content1 || ''}
                    onChange={(e) => updateInitiatives('stateChapters', 'overview', 'content1', e.target.value)}
                    rows={3}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Content 2</label>
                  <textarea 
                    value={content?.initiatives?.stateChapters?.overview?.content2 || ''}
                    onChange={(e) => updateInitiatives('stateChapters', 'overview', 'content2', e.target.value)}
                    rows={3}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </section>

            {/* Initiatives - Youth Reports */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h2 className="text-lg font-semibold text-slate-900">Youth Reports</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Header Title</label>
                  <input 
                    type="text" 
                    value={content?.initiatives?.youthReports?.header?.title || ''}
                    onChange={(e) => updateInitiatives('youthReports', 'header', 'title', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Header Subtitle</label>
                  <textarea 
                    value={content?.initiatives?.youthReports?.header?.subtitle || ''}
                    onChange={(e) => updateInitiatives('youthReports', 'header', 'subtitle', e.target.value)}
                    rows={2}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Title</label>
                  <input 
                    type="text" 
                    value={content?.initiatives?.youthReports?.overview?.title || ''}
                    onChange={(e) => updateInitiatives('youthReports', 'overview', 'title', e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Content 1</label>
                  <textarea 
                    value={content?.initiatives?.youthReports?.overview?.content1 || ''}
                    onChange={(e) => updateInitiatives('youthReports', 'overview', 'content1', e.target.value)}
                    rows={3}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Overview Content 2</label>
                  <textarea 
                    value={content?.initiatives?.youthReports?.overview?.content2 || ''}
                    onChange={(e) => updateInitiatives('youthReports', 'overview', 'content2', e.target.value)}
                    rows={3}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
