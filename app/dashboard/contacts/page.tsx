'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Mail, MoreHorizontal, Loader2, Users, Edit2, X } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  status: string;
}

export default function ContactsCRM() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contacts');
        if (response.ok) {
          const data = await response.json();
          setContacts(data);
        }
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (contact: Contact) => {
    setEditingContact({ ...contact });
  };

  const handleSave = () => {
    if (!editingContact) return;
    setContacts(contacts.map(c => c.id === editingContact.id ? editingContact : c));
    setEditingContact(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">CRM / Contacts</h1>
          <p className="text-sm text-slate-500 mt-1">Manage inquiries, partnership requests, and user messages.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-slate-300 hover:bg-slate-50 transition-colors">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors">
            <Mail className="mr-2 h-4 w-4" />
            Compose
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
              placeholder="Search contacts, emails, or messages..."
            />
          </div>
          <div className="text-sm text-slate-500 font-medium">
            {filteredContacts.length} contacts
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-500">
              <Users className="h-12 w-12 mb-4 text-slate-300" />
              <p>No contacts found matching your search.</p>
            </div>
          ) : (
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Message</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{contact.name}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{contact.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-md truncate" title={contact.message}>
                        {contact.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">
                      {new Date(contact.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        contact.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        contact.status === 'replied' ? 'bg-emerald-100 text-emerald-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleEdit(contact); }}
                        className="text-slate-400 hover:text-indigo-600 transition-colors p-1 rounded-md hover:bg-indigo-50 opacity-0 group-hover:opacity-100"
                        title="Edit Contact"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editingContact && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Edit Contact</h3>
              <button 
                onClick={() => setEditingContact(null)}
                className="text-slate-400 hover:text-slate-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  value={editingContact.name}
                  onChange={(e) => setEditingContact({...editingContact, name: e.target.value})}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={editingContact.email}
                  onChange={(e) => setEditingContact({...editingContact, email: e.target.value})}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select 
                  value={editingContact.status}
                  onChange={(e) => setEditingContact({...editingContact, status: e.target.value})}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="new">New</option>
                  <option value="replied">Replied</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  value={editingContact.message}
                  onChange={(e) => setEditingContact({...editingContact, message: e.target.value})}
                  rows={4}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
              <button 
                onClick={() => setEditingContact(null)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
