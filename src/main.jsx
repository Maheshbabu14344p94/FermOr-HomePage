import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const features = [
  { icon: '◎', title: 'See the whole picture', text: 'Bring spending, saving and goals into one calm view so the important numbers stop hiding in different places.' },
  { icon: '↗', title: 'Know what to do next', text: 'Turn financial signals into simple, timely actions — without turning your money into a spreadsheet.' },
  { icon: '✦', title: 'Build momentum', text: 'Make progress visible with goals that feel tangible, useful and connected to everyday decisions.' },
];

const steps = [
  ['01', 'Connect', 'Bring the pieces of your financial life together.'],
  ['02', 'Understand', 'Fermor turns noisy numbers into a clear story.'],
  ['03', 'Grow', 'Use that clarity to make better decisions with confidence.'],
];

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    play: <><path d="m9 6 10 6-10 6V6Z" fill="currentColor" stroke="none"/></>,
    close: <><path d="M6 6l12 12M18 6 6 18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.5 3.8 5.5 3.8 9s-1.2 6.5-3.8 9c-2.6-2.5-3.8-5.5-3.8-9S9.4 5.5 12 3Z"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function DashboardMockup() {
  const ref = useRef(null);
  const [transform, setTransform] = useState('rotateX(4deg) rotateY(-8deg) rotateZ(-2deg)');
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTransform(`rotateX(${4 - y * 7}deg) rotateY(${-8 + x * 10}deg) rotateZ(${-2 + x * 2}deg)`);
  };
  return (
    <div className="visual-stage" onMouseMove={onMove} onMouseLeave={() => setTransform('rotateX(4deg) rotateY(-8deg) rotateZ(-2deg)')}>
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="dashboard-shell" ref={ref} style={{ transform }}>
        <div className="dash-top">
          <div className="mini-brand"><span className="mark small">f</span><span>ferm<span>or</span></span></div>
          <div className="dash-top-right"><span className="pill-live"><i /> Live</span><span className="avatar">M</span></div>
        </div>
        <div className="dash-body">
          <aside className="dash-side">
            <span className="side-active">Overview</span><span>Transactions</span><span>Goals</span><span>Insights</span>
            <div className="side-bottom"><span>Settings</span><span>Help</span></div>
          </aside>
          <main className="dash-main">
            <div className="dash-heading"><div><small>GOOD MORNING, MAYA</small><h3>Your money, in focus.</h3></div><span className="date-chip">Oct 2026</span></div>
            <div className="balance-grid">
              <div className="balance-card"><span>Total balance</span><strong>€28,420<span>.64</span></strong><em>+8.4% this month</em><div className="spark"><i/><i/><i/><i/><i/><i/><i/></div></div>
              <div className="goal-card"><span>Home fund</span><strong>72%</strong><div className="progress"><i /></div><small>€18,000 of €25,000</small></div>
            </div>
            <div className="chart-card">
              <div className="chart-head"><div><span>Net worth</span><strong>€28.4k</strong></div><div className="chart-legend"><i/> Last 6 months</div></div>
              <svg className="line-chart" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#87f2c2" stopOpacity=".34"/><stop offset="1" stopColor="#87f2c2" stopOpacity="0"/></linearGradient></defs><path d="M0 128 C55 121 62 102 105 111 S164 88 204 96 S267 61 305 76 S360 54 395 61 S442 22 500 31 V150 H0Z" fill="url(#fill)"/><path d="M0 128 C55 121 62 102 105 111 S164 88 204 96 S267 61 305 76 S360 54 395 61 S442 22 500 31" fill="none" stroke="#69dca8" strokeWidth="3" strokeLinecap="round"/></svg>
              <div className="chart-axis"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div>
            </div>
            <div className="insight-row"><div><span className="insight-dot"/><div><small>Fermor insight</small><p>You are 14% ahead of your savings pace.</p></div></div><button>View insight <Icon name="arrow" size={14}/></button></div>
          </main>
        </div>
      </div>
      <div className="float-card spend-card"><div className="float-icon">↘</div><div><small>Spending this month</small><strong>€2,184</strong></div><span>−4.8%</span></div>
      <div className="float-card score-card"><div className="score-ring"><span>86</span></div><div><small>Financial clarity</small><strong>Looking good</strong></div></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [toast, setToast] = useState('');
  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY, visible: true });
    const leave = () => setCursor((c) => ({ ...c, visible: false }));
    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => { window.removeEventListener('mousemove', move); document.documentElement.removeEventListener('mouseleave', leave); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);
  const scrollTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setStatus('error'); return; }
    localStorage.setItem('fermor-waitlist-email', email);
    setStatus('success');
    setToast('You’re on the Fermor early-access list.');
    setTimeout(() => setToast(''), 3500);
  };

  return (
    <div className="app">
      <div className={`cursor-dot ${cursor.visible ? 'show' : ''}`} style={{ left: cursor.x, top: cursor.y }} />
      <div className={`cursor-ring ${cursor.visible ? 'show' : ''}`} style={{ left: cursor.x, top: cursor.y }} />
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Fermor home"><span className="mark">f</span><span>ferm<span>or</span></span></button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}><button onClick={() => scrollTo('why')}>Why Fermor</button><button onClick={() => scrollTo('how')}>How it works</button><button onClick={() => scrollTo('insights')}>Insights</button></div>
          <div className="nav-actions"><button className="nav-cta" onClick={() => setModalOpen(true)}>Get early access <Icon name="arrow" size={15}/></button></div>
          <button className="mobile-menu" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu"><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-dot"/> A clearer way to grow financially</div>
            <h1>Money,<br/><span>made legible.</span></h1>
            <p className="hero-lead">Fermor brings your financial life into focus — so you can understand where you are, know what matters, and make your next move with confidence.</p>
            <div className="hero-actions"><button className="primary-btn" onClick={() => setModalOpen(true)}>Get early access <Icon name="arrow" size={17}/></button><button className="play-btn" onClick={() => scrollTo('how')}><span className="play-circle"><Icon name="play" size={12}/></span> See how it works</button></div>
            <div className="hero-proof"><div className="avatars"><span>R</span><span>S</span><span>A</span><span>+</span></div><p><strong>Built for clarity.</strong><br/>Designed around real financial decisions.</p></div>
          </div>
          <div className="hero-visual reveal"><DashboardMockup /></div>
        </section>

        <section className="trust-band"><div className="container trust-inner"><span>LESS NOISE. MORE SIGNAL.</span><div className="trust-items"><span>Clarity first</span><span>Private by design</span><span>Actionable by default</span><span>Made for real life</span></div></div></section>

        <section className="section container" id="why">
          <div className="section-head reveal"><div><div className="eyebrow muted"><span>01</span> Why Fermor</div><h2>Your financial life deserves <em>a better interface.</em></h2></div><p>Money gets complicated when every answer lives somewhere different. Fermor is designed to make the important stuff feel obvious.</p></div>
          <div className="feature-grid">{features.map((f, i) => <article className="feature-card reveal" key={f.title} style={{ '--delay': `${i * 90}ms` }}><div className="feature-number">0{i + 1}</div><div className="feature-icon">{f.icon}</div><h3>{f.title}</h3><p>{f.text}</p><span className="card-arrow"><Icon name="arrow" size={16}/></span></article>)}</div>
        </section>

        <section className="dark-section" id="insights">
          <div className="container dark-inner"><div className="section-head dark-head reveal"><div><div className="eyebrow light"><span>02</span> Built for the next move</div><h2>Don't just <em>see</em> your money.<br/>Understand it.</h2></div><p>Fermor turns financial data into a living picture of your progress, priorities and opportunities.</p></div>
            <div className="insight-layout"><div className="statement-card reveal"><div className="statement-top"><span>THIS MONTH</span><span className="tiny-check"><Icon name="check" size={13}/> On track</span></div><div className="statement-number">€4,260</div><p>available after essentials</p><div className="mini-bars"><i style={{height:'42%'}}/><i style={{height:'58%'}}/><i style={{height:'51%'}}/><i style={{height:'72%'}}/><i style={{height:'66%'}}/><i style={{height:'86%'}}/><i style={{height:'78%'}}/></div><div className="statement-footer"><span>Sep</span><span>Oct</span></div></div>
              <div className="insight-copy reveal"><div className="quote-mark">“</div><blockquote>The best financial tool is the one that helps you <strong>feel in control</strong>, not the one that gives you more numbers.</blockquote><div className="insight-points"><div><span>01</span><p><strong>Signal over noise</strong><br/>Surface what actually needs your attention.</p></div><div><span>02</span><p><strong>Progress you can feel</strong><br/>See the small wins compound over time.</p></div></div></div>
            </div>
          </div>
        </section>

        <section className="section container" id="how">
          <div className="center-head reveal"><div className="eyebrow muted"><span>03</span> How it works</div><h2>Three steps to <em>more clarity.</em></h2><p>No jargon. No finance degree. Just a clearer relationship with your money.</p></div>
          <div className="steps">{steps.map(([num, title, text], i) => <div className="step reveal" key={num}><span className="step-num">{num}</span><div className="step-line"/><div className="step-orb">{i === 0 ? '↗' : i === 1 ? '◌' : '✦'}</div><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section className="cta-section container reveal"><div className="cta-card"><div className="cta-glow"/><div className="cta-copy"><div className="eyebrow light"><span>04</span> Start with clarity</div><h2>Your next smart move<br/><em>starts here.</em></h2><p>Fermor is being built for people who want their money to make more sense — and work harder for what matters.</p><button className="primary-btn light-btn" onClick={() => setModalOpen(true)}>Join early access <Icon name="arrow" size={17}/></button></div><div className="cta-orbit"><div className="orbit-ring ring-a"/><div className="orbit-ring ring-b"/><div className="orbit-core"><span>f</span></div></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-main"><div><button className="brand footer-brand" onClick={() => scrollTo('top')}><span className="mark">f</span><span>ferm<span>or</span></span></button><p>Understand. Act. Grow.<br/>Financial clarity for real life.</p></div><div className="footer-links"><div><span>Explore</span><button onClick={() => scrollTo('why')}>Why Fermor</button><button onClick={() => scrollTo('how')}>How it works</button><button onClick={() => scrollTo('insights')}>Insights</button></div><div><span>Company</span><button onClick={() => setToast('About Fermor is coming soon.')}>About</button><button onClick={() => setToast('Careers are coming soon.')}>Careers</button><button onClick={() => setToast('Contact details will be published soon.')}>Contact</button></div><div><span>Legal</span><button onClick={() => setToast('Privacy policy is coming soon.')}>Privacy</button><button onClick={() => setToast('Terms are coming soon.')}>Terms</button><button onClick={() => setToast('Security details are coming soon.')}>Security</button></div></div></div><div className="container footer-bottom"><span>© {year} Fermor. Understand. Act. Grow.</span><span className="made"><Icon name="globe" size={14}/> Built for everywhere</span></div></footer>

      {modalOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setModalOpen(false)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close"><Icon name="close" /></button>{status === 'success' ? <div className="success-state"><div className="success-icon"><Icon name="check" size={30}/></div><div className="eyebrow"><span>✓</span> You’re in</div><h2>Welcome to Fermor.</h2><p>We’ll keep your interest on file and share the next step when early access opens.</p><button className="primary-btn" onClick={() => setModalOpen(false)}>Done <Icon name="arrow" size={17}/></button></div> : <><div className="eyebrow"><span>EARLY ACCESS</span></div><h2 id="modal-title">Make money<br/><em>make sense.</em></h2><p>Leave your email and we’ll let you know when Fermor is ready for you.</p><form onSubmit={submit}><label htmlFor="email">Email address</label><input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }} placeholder="you@example.com" autoFocus aria-invalid={status === 'error'}/>{status === 'error' && <small className="form-error">Enter a valid email address.</small>}<button className="primary-btn full" type="submit">Join the list <Icon name="arrow" size={17}/></button></form><small className="privacy-note">No spam. Just Fermor updates when they matter.</small></>}</div></div>}
      {toast && <div className="toast"><span><Icon name="check" size={15}/></span>{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
