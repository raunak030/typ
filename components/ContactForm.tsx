'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {status === 'success' && (
        <div className="rounded-sm bg-emerald-500/10 border border-emerald-500/20 p-3 text-sm text-emerald-400">
          Message sent successfully! We will get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="rounded-sm bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
          Failed to send message. Please try again later.
        </div>
      )}
      <input 
        type="text" 
        placeholder="Full Name" 
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full rounded-sm border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
        required
        disabled={status === 'loading'}
      />
      <input 
        type="email" 
        placeholder="Email Address" 
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full rounded-sm border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
        required
        disabled={status === 'loading'}
      />
      <textarea 
        placeholder="Your Message" 
        rows={3}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full rounded-sm border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600 resize-none"
        required
        disabled={status === 'loading'}
      ></textarea>
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full rounded-sm bg-white px-4 py-2.5 text-sm font-medium text-slate-950 hover:bg-slate-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
