import { NextResponse } from 'next/server';

const publicationsData = [
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
  },
  {
    id: 4,
    type: "issue-brief",
    typeLabel: "Issue Brief",
    topic: "environment",
    date: "Jul 2025",
    title: "Climate Resilience Policy for Coastal Communities",
    link: "/publications/climate-resilience-policy",
    description: "A comprehensive review of adaptation strategies and infrastructure requirements for vulnerable populations in India's coastal states.",
    author: "Environmental Policy Group",
    imageSeed: "report4"
  },
  {
    id: 5,
    type: "data-analysis",
    typeLabel: "Data Analysis",
    topic: "education",
    date: "Jun 2025",
    title: "Post-Pandemic Education Outcomes in Rural Districts",
    link: "/publications/education-outcomes-rural",
    description: "Analyzing the long-term impact of remote learning on standardized test scores and dropout rates in rural educational institutions.",
    author: "Education Task Force",
    imageSeed: "report5"
  },
  {
    id: 6,
    type: "white-paper",
    typeLabel: "White Paper",
    topic: "technology",
    date: "May 2025",
    title: "Governance Frameworks for Artificial Intelligence",
    link: "/publications/ai-governance-frameworks",
    description: "Proposing regulatory structures that balance innovation with ethical considerations and data privacy in the rapidly evolving AI sector.",
    author: "Technology & Society Initiative",
    imageSeed: "report6"
  },
  {
    id: 7,
    type: "policy-brief",
    typeLabel: "Policy Brief",
    topic: "education",
    date: "Apr 2025",
    title: "Healthcare Access for Marginalized Youth",
    link: "/publications/healthcare-access",
    description: "Evaluating the effectiveness of current public health initiatives in reaching marginalized youth populations in semi-urban areas.",
    author: "Health Policy Unit",
    imageSeed: "report7"
  },
  {
    id: 8,
    type: "working-paper",
    typeLabel: "Working Paper",
    topic: "economy",
    date: "Mar 2025",
    title: "The Future of Work: Skill Gaps and Opportunities",
    link: "/publications/future-of-work",
    description: "Identifying critical skill gaps in the current workforce and proposing educational reforms to better prepare youth for future job markets.",
    author: "Economic Research Team",
    imageSeed: "report8"
  },
  {
    id: 9,
    type: "data-analysis",
    typeLabel: "Data Analysis",
    topic: "education",
    date: "Feb 2025",
    title: "Mental Health Trends Among University Students",
    link: "/publications/mental-health-trends",
    description: "A quantitative study on the rising rates of anxiety and depression among university students and the availability of support services.",
    author: "Youth Wellbeing Initiative",
    imageSeed: "report9"
  },
  {
    id: 10,
    type: "issue-brief",
    typeLabel: "Issue Brief",
    topic: "technology",
    date: "Jan 2025",
    title: "Digital Divide: Internet Access in Rural India",
    link: "/publications/digital-divide",
    description: "Analyzing the ongoing challenges of internet connectivity in rural areas and its impact on educational and economic opportunities.",
    author: "Tech Policy Group",
    imageSeed: "report10"
  },
  {
    id: 11,
    type: "white-paper",
    typeLabel: "White Paper",
    topic: "governance",
    date: "Dec 2024",
    title: "Sustainable Urban Planning and Youth Inclusion",
    link: "/publications/sustainable-urban-planning",
    description: "Exploring how urban planning can be more inclusive of youth perspectives to create sustainable and livable cities.",
    author: "Urban Development Desk",
    imageSeed: "report11"
  },
  {
    id: 12,
    type: "policy-brief",
    typeLabel: "Policy Brief",
    topic: "governance",
    date: "Nov 2024",
    title: "Reforming the Juvenile Justice System",
    link: "/publications/juvenile-justice-reform",
    description: "A critical review of the current juvenile justice system with recommendations for a more rehabilitative approach.",
    author: "Legal Research Team",
    imageSeed: "report12"
  }
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json(publicationsData);
}
