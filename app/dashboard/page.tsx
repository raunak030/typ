'use client';

import { useState, useEffect } from 'react';
import { Users, Mail, FileText, TrendingUp, ArrowUpRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  status: string;
}

export default function DashboardOverview() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const stats = [
    { name: 'Total Contacts', value: '2,845', change: '+12.5%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'New Messages', value: contacts.filter(c => c.status === 'new').length.toString(), change: '+4.2%', icon: Mail, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { name: 'Publications', value: '12', change: '+2 this month', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { name: 'Site Visits', value: '45.2K', change: '+18.1%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.name}</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
                <span className="text-emerald-600 font-medium">{stat.change}</span>
                <span className="ml-2 text-slate-500">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent CRM Activity */}
      <div className="rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200 px-6 py-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Recent Inquiries (CRM)</h2>
          <Link href="/dashboard/contacts" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View all
          </Link>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Message Snippet</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {contacts.slice(0, 5).map((contact) => (
                  <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{contact.name}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{contact.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-md truncate" title={contact.message}>
                        {contact.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
