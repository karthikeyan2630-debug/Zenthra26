import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./components/Icon";

const GOOGLE_FORM_LINK = "https://forms.gle/p9mTx7d22hEvAhSp8";
const LOGO = "/WhatsApp_Image_2025-09-12_at_18.22.28_4ebc8d65-removebg-preview.png";


const techEvents = [

  {
    number: "01",
    icon: "fileText",
    category: "PRESENTATION • INNOVATION • TECHNOLOGY",
    title: "Paper Presentation",
    description:
      "A technical event where participants present a research topic or innovative idea before a panel of judges, demonstrating their subject knowledge, communication skills, and presentation abilities.",
    rules: [
      "Each team may have 2–4 members.",
      "Participants must submit their abstract/paper within the specified deadline.",
      "The presentation must be based on a relevant technical topic.",
      "Presentation time will be limited to the allotted duration.",
      "Participants must use the specified presentation format.",
      "Evaluation will be based on content, technical knowledge, clarity, originality, and presentation skills.",
      "Judges' decision is final."
    ]
  },

  {
    number: "02",
    icon: "bug",
    category: "DEBUGGING • PROGRAMMING • ALGORITHMS",
    title: "Glitch Verse",
    description:
      "A coding challenge focused on programming, debugging, and algorithmic problem-solving, testing participants' accuracy, logic, and coding efficiency.",
    rules: [
      "Each team must have 1–4 members.",
      "Participants must use only approved programming languages.",
      "Participants must carry a valid college ID.",
      "All challenges must be completed within the given time.",
      "Unfair practices will lead to disqualification.",
      "Evaluation will be based on accuracy, efficiency, debugging, and test-case performance.",
      "Judges' decision is final."
    ]
  },

  {
    number: "03",
    icon: "zap",
    category: "VIBE CODING • PROBLEM SOLVING • CREATIVITY",
    title: "Vibe Craft",
    description:
      "A real-time vibe coding challenge where teams are given a problem statement on the spot. Participants must understand the given problem, develop a working solution, and demonstrate their creativity and technical skills through rapid coding.",
    rules: [
      "Teams will receive a problem statement at the venue.",
      "The problem must be solved during the event.",
      "Participants can use their preferred coding tools and technologies.",
      "Teams must develop and demonstrate a working solution.",
      "Teams will be evaluated based on creativity, functionality, technical implementation, and overall solution quality.",
      "The team with the best solution wins.",
      "Judges' decision is final."
    ]
  },

  {
    number: "04",
    icon: "search",
    category: "CLUES • DEBUGGING • TEAMWORK",
    title: "Code Hunt",
    description:
      "A team-based debugging and clue-hunting game where participants must solve a hidden challenge by interacting with other teams. Each team holds a unique clue, and participants must approach different teams, communicate with them, and collect the clues. By connecting and analyzing all the clues, teams must identify the final solution.",
    rules: [
      "Multiple teams will participate in the game.",
      "Each team will be given a different clue.",
      "Teams must interact with other teams to obtain their clues.",
      "Participants must communicate and collect the required clues.",
      "The collected clues must be analyzed and connected.",
      "Teams must identify the final solution using the collected clues.",
      "The team that solves the challenge correctly first wins.",
      "Judges' decision is final."
    ]
  }

];


const funEvents = [

  {
    number: "01",
    icon: "search",
    category: "DETECTIVE • MYSTERY • DEDUCTION",
    title: "Sherlock Holmes",
    description:
      "A thrilling mystery-solving game where participants are presented with a mysterious theft case along with a set of carefully designed clues. Using their observation, logical thinking, and deduction skills, participants must analyze the clues, connect the evidence, and identify the thief responsible for the crime.",
    rules: [
      "Participants are given a detailed theft case.",
      "Multiple clues and pieces of evidence will be provided.",
      "Participants must carefully analyze and connect the clues.",
      "Using logic and deduction, participants must identify the thief.",
      "The case must be solved within the given time.",
      "The participant or team that solves the case correctly wins.",
      "Judges' decision is final."
    ]
  },

  {
    number: "02",
    icon: "music",
    category: "MUSIC • GUESSING • BUZZER",
    title: "Tune Detective",
    description:
      "A fun musical guessing game where Tamil song meanings are translated into English. Participants must read or listen to the English clues, identify the original Tamil song, and hit the buzzer as soon as they know the answer. Test your music knowledge, memory, and quick thinking to become the ultimate Tune Detective!",
    rules: [
      "The English translation of a Tamil song will be displayed or read aloud.",
      "Participants must identify the original Tamil song.",
      "No singing, online searching, or external help is allowed.",
      "Press the buzzer when you know the answer.",
      "The fastest correct answer earns the points.",
      "The participant or team with the highest score wins.",
      "Judges' decision is final."
    ]
  },

  {
    number: "03",
    icon: "globe",
    category: "AUCTION • STRATEGY • CRICKET",
    title: "IPL Auction",
    description:
      "An exciting mock IPL auction game where participants take on the role of franchise owners and build their own dream team. Players are introduced one by one, and teams must strategically bid for them while managing their limited budget.",
    rules: [
      "Each team will be given a fixed virtual budget.",
      "Players will be introduced for auction one by one.",
      "Teams compete by placing bids for the players they want.",
      "Teams must manage their budget and squad strategically.",
      "Teams must build their squad within the given budget.",
      "The team that builds the strongest squad within the budget wins.",
      "Judges' decision is final."
    ]
  },

  {
    number: "04",
    icon: "brain",
    category: "COMMUNICATION • MEMORY • CREATIVITY",
    title: "Hint Crackers",
    description:
      "A team communication challenge where a secret word is passed verbally through four members. The final member uses the word to create a short, meaningful story, testing communication, memory, teamwork, accuracy, and creativity.",
    rules: [
      "Each team must have exactly 4 members.",
      "The secret word is revealed only to Member 1.",
      "The word must be passed verbally in the assigned order.",
      "No writing, mobile phones, or electronic assistance is allowed during communication.",
      "Member 3 writes the final word on the board.",
      "Member 4 creates a story using the final word.",
      "The story must be meaningfully related to the word.",
      "The challenge must be completed within the given time.",
      "Judges' decision is final."
    ]
  }

];

export default function EventDetails() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openRegistration = () => window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
  return <div className="site-shell">
    <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><Link to="/" className="brand"><img src={LOGO} alt="Dhanalakshmi Srinivasan Engineering College logo" className="brand-logo" /><div className="brand-copy"><strong>Dhanalakshmi Srinivasan Engineering College (Autonomous)</strong><span>Department of Computer Science & Engineering and Information Technology</span></div></Link><div className="desktop-nav"><Link className="nav-link" to="/">Home</Link><a className="nav-link" href="#technical">Technical</a><a className="nav-link" href="#non-technical">Non-Technical</a><button className="btn btn-primary nav-cta" onClick={openRegistration}>Register Now <Icon name="arrowUpRight" size={16} /></button></div><button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={menuOpen}><Icon name={menuOpen ? "x" : "menu"} size={22} /></button></nav>{menuOpen && <div className="mobile-nav"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link><a href="#technical" onClick={() => setMenuOpen(false)}>Technical</a><a href="#non-technical" onClick={() => setMenuOpen(false)}>Non-Technical</a><button className="btn btn-primary" onClick={openRegistration}>Register Now <Icon name="arrowUpRight" size={16} /></button></div>}</header>
    <main className="events-page"><section className="events-hero"><div className="container"><span className="section-label">EVENT ARENA</span><h1>Explore our <span>symposium events.</span></h1><p>Choose your challenge, showcase your skills and experience the excitement of ZENTHRA '26.</p><div className="event-stats"><div><strong>04</strong><span>Technical Events</span></div><div><strong>04</strong><span>Non-Technical Events</span></div><div><strong>₹300</strong><span>Registration Fee</span></div></div></div></section>
      <section id="technical" className="event-section"><div className="container"><SectionHeader label="TECHNICAL EVENTS" title="Tech Arena" description="Challenge your technical knowledge, creativity and programming skills." /><EventGrid events={techEvents} /></div></section>
      <section id="non-technical" className="event-section alt"><div className="container"><SectionHeader label="NON-TECHNICAL EVENTS" title="Fun Arena" description="Think fast, work together and enjoy exciting challenges." /><EventGrid events={funEvents} /></div></section>
      <section className="container event-final-cta"><div><span className="section-label">ZENTHRA '26</span><h2>Found your event?</h2><p>Complete your registration using the official form.</p></div><button className="btn btn-primary btn-large" onClick={openRegistration}>Register Now <Icon name="arrowRight" size={18} /></button></section>
    </main>
    <footer className="site-footer"><div className="container footer-bottom single"><span>© 2026 ZENTHRA '26 • Department of Computer Science & Engineering and Information Technology</span><Link to="/">Back to Home <Icon name="arrowUpRight" size={14} /></Link></div></footer>
  </div>;
}

function SectionHeader({ label, title, description }) { return <div className="event-section-header"><div><span className="section-label">{label}</span><h2>{title}</h2></div><p>{description}</p></div>; }

function EventGrid({ events }) {
  const [openRules, setOpenRules] = useState(null);
  return <div className="event-grid">{events.map(event => { const open = openRules === event.title; return <article className="event-card" key={event.title}><div className="event-card-top"><div className="event-icon"><Icon name={event.icon} size={24} /></div><div><span className="event-number">EVENT {event.number}</span><span className="event-category">{event.category}</span></div><span className="event-bg-number">{event.number}</span></div><h3>{event.title}</h3><p>{event.description}</p><div className="event-divider" /><button className="rules-toggle" onClick={() => setOpenRules(open ? null : event.title)} aria-expanded={open}><span><Icon name="shield" size={17} /> Rules & Regulations</span><span className={open ? "rotated" : ""}><Icon name="chevronDown" size={18} /></span></button><div className={`rules-panel ${open ? "open" : ""}`}><div>{event.rules.map((rule, index) => <p key={index}><b>{String(index + 1).padStart(2, "0")}</b><span>{rule}</span></p>)}</div></div><div className="event-card-footer"><span>ZENTHRA '26</span><span className="footer-arrow"><Icon name="arrowUpRight" size={14} /></span></div></article>; })}</div>;
}
