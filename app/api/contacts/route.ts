import { NextResponse } from 'next/server';

const mockContacts = [
  { 
    id: 1, 
    name: 'Rahul Sharma', 
    email: 'rahul.s@example.com', 
    message: 'Interested in volunteering for the upcoming state chapter in Maharashtra. Please let me know the process.', 
    date: '2026-02-28T10:00:00Z', 
    status: 'new' 
  },
  { 
    id: 2, 
    name: 'Priya Patel', 
    email: 'priya.p@example.com', 
    message: 'How can I access the raw data for the 2025 National Youth Report for my university thesis?', 
    date: '2026-02-27T14:30:00Z', 
    status: 'read' 
  },
  { 
    id: 3, 
    name: 'Amit Kumar', 
    email: 'amit.k@example.com', 
    message: 'Partnership inquiry from the University of Delhi Student Union regarding the next National Conference.', 
    date: '2026-02-26T09:15:00Z', 
    status: 'replied' 
  },
  { 
    id: 4, 
    name: 'Sneha Reddy', 
    email: 'sneha.reddy@example.com', 
    message: 'I submitted a policy brief draft last week. When can I expect to hear back from the editorial team?', 
    date: '2026-02-25T16:45:00Z', 
    status: 'read' 
  },
  { 
    id: 5, 
    name: 'Vikram Singh', 
    email: 'vikram.s@example.com', 
    message: 'Is there an age limit to join the advisory board? I am 29 and have 5 years of public policy experience.', 
    date: '2026-02-24T11:20:00Z', 
    status: 'replied' 
  }
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  return NextResponse.json(mockContacts);
}
