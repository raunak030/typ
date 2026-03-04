import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'content.json');

export function getSiteContent() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading content file:', error);
  }
  
  // Return default content if file doesn't exist or error occurs
  return {
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
    },
    about: {
      header: {
        title: "About The Yuva Panchayat",
        subtitle: "Building the intellectual infrastructure for the next generation of Indian leadership."
      },
      mission: {
        title: "Our Mission",
        content: "The Yuva Panchayat was established with a singular vision: to elevate the quality of civic discourse among India's youth. In an era increasingly defined by polarization and emotional reaction, we provide a structured, non-partisan platform for rational dialogue, rigorous research, and evidence-based policy formulation."
      },
      structure: {
        title: "Institutional Structure",
        content: "Operating as a think tank and a national forum, The Yuva Panchayat is structured to ensure both deep research capabilities and broad geographic reach. Our National Secretariat coordinates the efforts of State Chapters, ensuring that localized issues receive national attention and that national policies are examined through regional lenses."
      }
    },
    initiatives: {
      nationalConferences: {
        header: {
          title: "National Conferences",
          subtitle: "Our flagship summits bringing together youth leaders, policymakers, and academics to deliberate on critical national issues."
        },
        overview: {
          title: "The Premier Forum for Youth Policy Dialogue",
          content1: "The Yuva Panchayat National Conferences are not typical youth summits. They are rigorous, multi-day policy formulation exercises designed to bridge the gap between young citizens and institutional decision-makers.",
          content2: "Each conference focuses on a specific thematic area—ranging from economic mobility to climate resilience—and culminates in a formal policy document presented to relevant government ministries and legislative committees."
        }
      },
      stateChapters: {
        header: {
          title: "State Chapters",
          subtitle: "Decentralized institutional presence ensuring regional representation and localized civic engagement across Indian states."
        },
        overview: {
          title: "Localizing National Discourse",
          content1: "India's diversity demands that national policy discussions be informed by regional realities. The Yuva Panchayat State Chapters serve as the crucial link between local civic issues and national policy frameworks.",
          content2: "Operated by dedicated regional secretariats, these chapters conduct localized research, host state-level dialogues, and ensure that the unique perspectives of their respective states are represented at our national forums."
        }
      },
      youthReports: {
        header: {
          title: "Youth Reports",
          subtitle: "Comprehensive, data-driven assessments of youth perspectives on governance, economy, and social policy."
        },
        overview: {
          title: "Evidence-Based Policy Advocacy",
          content1: "Our Youth Reports are the culmination of extensive primary research, surveys, and focus group discussions conducted across the country.",
          content2: "These reports serve as a critical resource for policymakers, providing actionable insights into the priorities and concerns of India's youth demographic."
        }
      }
    }
  };
}
