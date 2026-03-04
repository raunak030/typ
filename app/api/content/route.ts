import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'content.json');

function ensureDataFile() {
  const dir = path.dirname(dataFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    const defaultContent = {
      home: {
        hero: {
          tagline: "A National Youth Dialogue Platform",
          title: "Rational Civic Discussion for India's Future",
          description: "The Yuva Panchayat is a non-political, non-partisan, and idea-driven institution promoting structured dialogue over emotional reaction. We build the intellectual infrastructure for the next generation of Indian leadership.",
          primaryCtaText: "Read Our Mission",
          primaryCtaLink: "/about",
          secondaryCtaText: "Explore Publications",
          secondaryCtaLink: "/publications"
        },
        pillars: {
          title: "Institutional Framework",
          description: "Our initiatives are designed to foster rigorous debate, comprehensive research, and actionable policy recommendations across the nation."
        },
        cta: {
          title: "Join the Dialogue",
          description: "We are building a network of thoughtful, informed, and dedicated young leaders. Become a member to participate in state chapters, access exclusive research, and attend national conferences.",
          primaryCtaText: "Apply for Membership",
          primaryCtaLink: "/join",
          secondaryCtaText: "Contact the Secretariat",
          secondaryCtaLink: "/contact"
        }
      }
    };
    fs.writeFileSync(dataFilePath, JSON.stringify(defaultContent, null, 2));
  }
}

export async function GET() {
  try {
    ensureDataFile();
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    ensureDataFile();
    const body = await request.json();
    const currentData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    
    // Deep merge for nested objects (simple version)
    const newData = { ...currentData };
    if (body.home) {
      newData.home = { ...newData.home, ...body.home };
      if (body.home.hero) newData.home.hero = { ...currentData.home?.hero, ...body.home.hero };
      if (body.home.pillars) newData.home.pillars = { ...currentData.home?.pillars, ...body.home.pillars };
      if (body.home.cta) newData.home.cta = { ...currentData.home?.cta, ...body.home.cta };
    }
    if (body.about) {
      newData.about = { ...newData.about, ...body.about };
      if (body.about.header) newData.about.header = { ...currentData.about?.header, ...body.about.header };
      if (body.about.mission) newData.about.mission = { ...currentData.about?.mission, ...body.about.mission };
      if (body.about.structure) newData.about.structure = { ...currentData.about?.structure, ...body.about.structure };
    }
    if (body.initiatives) {
      newData.initiatives = { ...newData.initiatives, ...body.initiatives };
      if (body.initiatives.nationalConferences) {
        newData.initiatives.nationalConferences = { ...currentData.initiatives?.nationalConferences, ...body.initiatives.nationalConferences };
        if (body.initiatives.nationalConferences.header) newData.initiatives.nationalConferences.header = { ...currentData.initiatives?.nationalConferences?.header, ...body.initiatives.nationalConferences.header };
        if (body.initiatives.nationalConferences.overview) newData.initiatives.nationalConferences.overview = { ...currentData.initiatives?.nationalConferences?.overview, ...body.initiatives.nationalConferences.overview };
      }
      if (body.initiatives.stateChapters) {
        newData.initiatives.stateChapters = { ...currentData.initiatives?.stateChapters, ...body.initiatives.stateChapters };
        if (body.initiatives.stateChapters.header) newData.initiatives.stateChapters.header = { ...currentData.initiatives?.stateChapters?.header, ...body.initiatives.stateChapters.header };
        if (body.initiatives.stateChapters.overview) newData.initiatives.stateChapters.overview = { ...currentData.initiatives?.stateChapters?.overview, ...body.initiatives.stateChapters.overview };
      }
      if (body.initiatives.youthReports) {
        newData.initiatives.youthReports = { ...currentData.initiatives?.youthReports, ...body.initiatives.youthReports };
        if (body.initiatives.youthReports.header) newData.initiatives.youthReports.header = { ...currentData.initiatives?.youthReports?.header, ...body.initiatives.youthReports.header };
        if (body.initiatives.youthReports.overview) newData.initiatives.youthReports.overview = { ...currentData.initiatives?.youthReports?.overview, ...body.initiatives.youthReports.overview };
      }
    }
    
    fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
    return NextResponse.json({ success: true, content: newData });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
