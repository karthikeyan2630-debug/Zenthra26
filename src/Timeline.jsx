import Icon from "./components/Icon";

const timeline = [
  { day: "01", time: "09:00 AM", title: "Registration & Check-in", description: "Participants arrive at the venue, complete online check-in or spot registration, and receive event kits.", icon: "calendar" },
  { day: "02", time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address, introduction to ZENTHRA '26 and an overview of the day's activities.", icon: "users" },
  { day: "03", time: "10:30 AM", title: "Events & Challenges Begin", description: "Participants start competing in technical and non-technical events across arenas.", icon: "zap" },
  { day: "04", time: "01:00 PM", title: "Lunch Break", description: "Take a break, recharge and connect with fellow participants.", icon: "clock" },
  { day: "05", time: "03:00 PM", title: "Final Evaluation", description: "Teams present their work while the judging panel evaluates creativity, innovation and implementation.", icon: "trophy" },
  { day: "06", time: "04:00 PM", title: "Results, Awards & Closing Ceremony", description: "Celebrate the winners, award distributions, certificate presentation and closing remarks.", icon: "rocket" },
];

export default function Timeline() {
  return <section id="timeline" className="section schedule-section"><div className="container">
    <div className="section-heading centered"><span className="section-label">EVENT SCHEDULE</span><h2>ZENTHRA <span>'26</span></h2><p>Follow the complete journey of ZENTHRA '26 from check-in to closing ceremony.</p></div>
    <div className="timeline-list">
      {timeline.map((item, index) => <article className={`timeline-item ${index % 2 ? "right" : "left"}`} key={item.day}>
        <div className="timeline-node"><span>{item.day}</span></div>
        <div className="timeline-card"><div className="timeline-meta"><span>{item.time}</span><small>STEP {item.day}</small></div><div className="timeline-content"><div><h3>{item.title}</h3><p>{item.description}</p></div><div className="timeline-icon"><Icon name={item.icon} size={20}/></div></div></div>
      </article>)}
    </div>
  </div></section>;
}
