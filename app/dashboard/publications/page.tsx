'use client';

import { useState, useEffect } from 'react';
import { Search, Plus, FileText, Edit2, Trash2, Loader2, X } from 'lucide-react';

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

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPub, setEditingPub] = useState<Publication | null>(null);
  const [formData, setFormData] = useState<Partial<Publication>>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const res = await fetch('/api/publications');
      const data = await res.json();
      setPublications(data);
    } catch (error) {
      console.error('Failed to fetch publications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPublications = publications.filter(pub => 
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenModal = (pub?: Publication) => {
    if (pub) {
      setEditingPub(pub);
      setFormData(pub);
    } else {
      setEditingPub(null);
      setFormData({
        type: 'policy-brief',
        typeLabel: 'Policy Brief',
        topic: 'civic-engagement',
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        title: '',
        link: '/publications/new-post',
        description: '',
        author: 'Admin',
        imageSeed: 'report' + Math.floor(Math.random() * 100)
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPub(null);
    setFormData({});
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const method = editingPub ? 'PUT' : 'POST';
      const res = await fetch('/api/publications', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        await fetchPublications();
        handleCloseModal();
      }
    } catch (error) {
      console.error('Failed to save publication:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this publication?')) return;
    
    try {
      const res = await fetch(`/api/publications?id=${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        await fetchPublications();
      }
    } catch (error) {
      console.error('Failed to delete publication:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Publications</h1>
          <p className="text-sm text-slate-500 mt-1">Manage articles, news, and press releases.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleOpenModal()}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Publication
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Search publications..."
            />
          </div>
          <div className="text-sm text-slate-500 font-medium">
            {filteredPublications.length} publications
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
            </div>
          ) : filteredPublications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-500">
              <FileText className="h-12 w-12 mb-4 text-slate-300" />
              <p>No publications found.</p>
            </div>
          ) : (
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 font-medium">Title</th>
                  <th className="px-6 py-4 font-medium">Author</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredPublications.map((pub) => (
                  <tr key={pub.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900 max-w-xs truncate">{pub.title}</td>
                    <td className="px-6 py-4">{pub.author}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800">
                        {pub.typeLabel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {pub.date}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handleOpenModal(pub)}
                          className="p-1 text-slate-400 hover:text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(pub.id)}
                          className="p-1 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Edit/Create Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0">
              <h3 className="text-lg font-semibold text-slate-900">
                {editingPub ? 'Edit Publication' : 'New Publication'}
              </h3>
              <button 
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input 
                  type="text" 
                  value={formData.title || ''}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
                  <input 
                    type="text" 
                    value={formData.author || ''}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date (e.g. Oct 2025)</label>
                  <input 
                    type="text" 
                    value={formData.date || ''}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Type Label</label>
                  <input 
                    type="text" 
                    value={formData.typeLabel || ''}
                    onChange={(e) => setFormData({...formData, typeLabel: e.target.value, type: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Topic</label>
                  <input 
                    type="text" 
                    value={formData.topic || ''}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea 
                  value={formData.description || ''}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3 shrink-0">
              <button 
                onClick={handleCloseModal}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors disabled:opacity-50 flex items-center"
              >
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Publication
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
