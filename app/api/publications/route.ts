import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'publications.json');

const defaultPublicationsData = [
  {
    id: 1,
    type: "policy-brief",
    typeLabel: "Policy Brief",
    topic: "civic-engagement",
    date: "Oct 2025",
    title: "The State of Youth Civic Engagement in Urban India",
    link: "/publications/civic-engagement-report-2025",
    description: "An empirical analysis of political participation, institutional trust, and civic awareness among urban youth demographics across tier-1 and tier-2 cities.",
    author: "Dr. Siddharth Menon",
    imageSeed: "report1"
  },
  {
    id: 2,
    type: "working-paper",
    typeLabel: "Working Paper",
    topic: "economy",
    date: "Sep 2025",
    title: "Frameworks for Economic Mobility in the Digital Age",
    link: "/publications/economic-mobility-framework",
    description: "Examining the intersection of digital literacy, gig economy structures, and long-term economic security for young professionals entering the workforce.",
    author: "Priya Sharma, MPP",
    imageSeed: "report2"
  },
  {
    id: 3,
    type: "annual-report",
    typeLabel: "Annual Report",
    topic: "governance",
    date: "Aug 2025",
    title: "The National Youth Report 2025: Priorities & Perspectives",
    link: "/publications/national-youth-report-2025",
    description: "Our flagship annual publication synthesizing data from over 50,000 respondents across 28 states, outlining key policy priorities for the upcoming legislative session.",
    author: "The Yuva Panchayat Research Desk",
    imageSeed: "report3"
  }
];

function ensureDataFile() {
  const dir = path.dirname(dataFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify(defaultPublicationsData, null, 2));
  }
}

export async function GET() {
  try {
    ensureDataFile();
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json(defaultPublicationsData);
  }
}

export async function POST(request: Request) {
  try {
    ensureDataFile();
    const body = await request.json();
    const currentData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    
    const newPub = {
      ...body,
      id: Date.now()
    };
    
    currentData.unshift(newPub);
    fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));
    
    return NextResponse.json({ success: true, publication: newPub });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add publication' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    ensureDataFile();
    const body = await request.json();
    const currentData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    
    const index = currentData.findIndex((p: any) => p.id === body.id);
    if (index !== -1) {
      currentData[index] = { ...currentData[index], ...body };
      fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));
      return NextResponse.json({ success: true, publication: currentData[index] });
    }
    return NextResponse.json({ error: 'Publication not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update publication' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '0');
    
    ensureDataFile();
    const currentData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    
    const newData = currentData.filter((p: any) => p.id !== id);
    fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete publication' }, { status: 500 });
  }
}
