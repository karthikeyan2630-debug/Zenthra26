import { useState } from "react";
import { Link } from "react-router-dom";
import Timeline from "./Timeline";
import Icon from "./components/Icon";

const GOOGLE_FORM_LINK = "https://forms.gle/p9mTx7d22hEvAhSp8";
const LOGO = "/WhatsApp_Image_2025-09-12_at_18.22.28_4ebc8d65-removebg-preview.png";

const eventDetails = [
  { icon: "calendar", title: "Date", value: "14 October 2026" },
  { icon: "calendar", title: "Full Paper Submission Deadline", value: "10 October 2026" },
  { icon: "clock", title: "Time", value: "09:00 AM - 04:00 PM" },
  { icon: "mapPin", title: "Venue", value: "College Agricultural Auditorium" },
  { icon: "wallet", title: "Registration Fee", value: "₹ 300" },
  { icon: "check", title: "Spot Registration", value: "Available at Venue" },
];

const highlights = [
  { icon: "lightbulb", title: "Innovation", description: "Bring your ideas, creativity and technical skills to solve exciting challenges." },
  { icon: "trophy", title: "Prizes", description: "Compete with talented students and win exciting prizes and recognition." },
  { icon: "users", title: "Networking", description: "Meet students, developers and passionate innovators from different backgrounds." },
  { icon: "rocket", title: "Experience", description: "Learn, collaborate and gain practical experience through an engaging event." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openRegistration = () => window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src={LOGO} alt="Dhanalakshmi Srinivasan Engineering College logo" className="brand-logo" />
            <div className="brand-copy">
              <strong>Dhanalakshmi Srinivasan Engineering College (Autonomous)</strong>
              <span>Department of Information Technology</span>
            </div>
          </a>

          <div className="desktop-nav">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#details">Details</a>
            <Link className="nav-link" to="/event">Explore Events</Link>
            <button className="btn btn-primary nav-cta" onClick={openRegistration}>Register Now <Icon name="arrowUpRight" size={16} /></button>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "x" : "menu"} size={22} />
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#details" onClick={closeMenu}>Details</a>
            <Link to="/event" onClick={closeMenu}>Explore Events</Link>
            <button className="btn btn-primary" onClick={() => { closeMenu(); openRegistration(); }}>Register Now <Icon name="arrowUpRight" size={16} /></button>
          </div>
        )}
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-grid-lines" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-layout">
            <div className="hero-copy animate-in">
              <div className="eyebrow"><span className="status-dot" /> NATIONAL LEVEL SYMPOSIUM • 2026</div>
              <p className="hero-kicker">Department of Information Technology presents</p>
              <h1><span>ZENTHRA</span> <em>'26</em></h1>
              <p className="hero-tagline">Where technology, creativity and competition come together.</p>
              <p className="hero-description">ZENTHRA '26 is a vibrant technical symposium bringing together passionate students, innovative minds and technology enthusiasts for a day of challenges, ideas and collaboration.</p>
              <div className="hero-actions">
                <button className="btn btn-primary btn-large" onClick={openRegistration}>Register Now <Icon name="arrowRight" size={18} /></button>
                <Link className="btn btn-secondary btn-large" to="/event">Explore Events <Icon name="arrowUpRight" size={17} /></Link>
              </div>
              <div className="hero-points">
                <span><Icon name="check" size={16} /> Open for Students</span>
                <span><Icon name="check" size={16} /> Certificates</span>
                <span><Icon name="check" size={16} /> Exciting Prizes</span>
                <span><Icon name="check" size={16} /> Spot Registration Available</span>
              </div>
            </div>

            <div className="hero-panel animate-in delay-1">
              <div className="hero-panel-top">
                <div>
                  <span className="panel-label">FEATURED EVENT</span>
                  <h2>ZENTHRA <span>'26</span></h2>
                </div>
                <div className="date-badge"><small>OCT</small><strong>14</strong><span>2026</span></div>
              </div>
              <div className="info-stack">
                {eventDetails.map(item => (
                  <div className="info-row" key={item.title}>
                    <div className="icon-box"><Icon name={item.icon} size={19} /></div>
                    <div><span>{item.title}</span><strong>{item.value}</strong></div>
                  </div>
                ))}
              </div>
              <button className="panel-cta" onClick={openRegistration}>Secure Your Spot <Icon name="arrowRight" size={17} /></button>
            </div>
          </div>
          <div className="hero-bottom container"><span>14 OCTOBER 2026</span><i /><span>DHANALAKSHMI SRINIVASAN ENGINEERING COLLEGE (AUTONOMOUS)</span><i /><span>PERAMBALUR</span></div>
        </section>

        <section id="about" className="section section-about">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="section-label">ABOUT ZENTHRA '26</span><h2>Where technology<br /><span>meets innovation.</span></h2></div>
              <p>ZENTHRA '26 provides an exciting platform to showcase technical skills, present innovative ideas, participate in engaging events and connect with like-minded learners.</p>
            </div>
            <div className="highlight-grid">
              {highlights.map(item => (
                <article className="highlight-card" key={item.title}>
                  <div className="feature-icon"><Icon name={item.icon} size={21} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Timeline />

        <section id="details" className="section section-details">
          <div className="container">
            <div className="section-heading centered"><span className="section-label">EVENT INFORMATION</span><h2>Everything you need<br /><span>to know.</span></h2><p>Keep the essential event information close before you register.</p></div>
            <div className="details-grid">
              {eventDetails.map(item => (
                <div className="detail-card" key={item.title}><div className="detail-icon"><Icon name={item.icon} size={22} /></div><div><span>{item.title}</span><strong>{item.value}</strong></div></div>
              ))}
            </div>
            <div className="explore-strip">
              <div><span className="section-label">EVENT ARENA</span><h3>Choose your challenge.</h3><p>Explore the technical and non-technical events prepared for ZENTHRA '26.</p></div>
              <Link className="btn btn-secondary" to="/event">Explore Events <Icon name="arrowUpRight" size={17} /></Link>
            </div>
            <div className="registration-cta">
              <div className="cta-glow" /><div className="cta-content"><span className="section-label">DON'T MISS OUT</span><h2>Ready to be part of <span>ZENTHRA '26?</span></h2><p>Registration is quick and easy. Register online via the official form or directly at the venue — spot registration is available on event day.</p><button className="btn btn-primary btn-large" onClick={openRegistration}>Register Now <Icon name="arrowRight" size={18} /></button></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><div className="footer-brand"><span>Z</span><div><strong>ZENTHRA '26</strong><small>Department of Information Technology</small></div></div><p>Dhanalakshmi Srinivasan Engineering College (Autonomous)</p></div>
          <div className="footer-links"><strong>Quick Links</strong><a href="#about">About</a><a href="#details">Event Details</a><Link to="/event">Explore Events</Link></div>
          <div className="footer-links"><strong>Connect</strong><a href="https://maps.app.goo.gl/3AwxxnVfk67nsmg1A" target="_blank" rel="noreferrer"><Icon name="mapPin" size={15} /> Event Location <Icon name="external" size={13} /></a><button onClick={openRegistration}><Icon name="external" size={15} /> Registration</button></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 ZENTHRA '26. All rights reserved.</span><span>Designed for a national-level symposium experience.</span></div>
      </footer>
    </div>
  );
}
