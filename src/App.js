import React, { useState, useEffect, useRef } from "react";
import EmailForm from "./components/email";

const GH = "kolekarom";

const TICKER = ["React Developer","◆","Full Stack","◆","Open Source","◆","Problem Solver","◆","Vercel Deploy","◆","LeetCoder","◆","JavaScript","◆","Node.js","◆"];

const SKILLS = [
  { icon:"◈", cat:"Frontend",  tags:["React","Next.js","JavaScript","HTML5","CSS3","Tailwind"] },
  { icon:"◉", cat:"Backend",   tags:["Node.js","Express","Ruby","REST APIs"] },
  { icon:"◍", cat:"Database",  tags:["MongoDB","PostgreSQL","Firebase","MySQL"] },
  { icon:"◎", cat:"DevOps",    tags:["Git","GitHub","Vercel","Docker","Linux"] },
  { icon:"◆", cat:"Languages", tags:["JavaScript","Ruby","Python","C++"] },
  { icon:"◇", cat:"Tools",     tags:["VS Code","Postman","Figma","npm"] },
];

const EXP = [
  { role:"Full Stack Developer",    co:"Freelance / Personal Projects", period:"2022 — PRESENT", desc:"Building full-stack web applications using React, Node.js, and modern deployment tools. Delivered boutique e-commerce platforms, launcher tools, and CMS systems deployed on Vercel." },
  { role:"Open Source Contributor", co:"GitHub",                        period:"2021 — PRESENT", desc:"Actively contributing to and maintaining open-source repositories. Collaborated on Ruby, JavaScript, and CSS-based projects. Maintaining 17+ repositories across diverse tech stacks." },
  { role:"DSA & Competitive Prog.", co:"LeetCode",                      period:"2023 — PRESENT", desc:"Solved 150+ problems across Easy, Medium, and Hard levels. Consistently practicing data structures and algorithms to strengthen problem-solving fundamentals." },
];

const CONTACTS = [
  { ico:"⌥",  label:"GitHub",   val:"@kolekarom",          href:"https://github.com/kolekarom" },
  { ico:"in", label:"LinkedIn", val:"Om Kolekar",           href:"https://www.linkedin.com/in/kolekarom", small:true },
  { ico:"⊕",  label:"LeetCode", val:"@kolekarom",          href:"https://leetcode.com/u/kolekarom/" },
  { ico:"▲",  label:"Vercel",   val:"oms-projects",         href:"https://vercel.com/oms-projects-33c3352f" },
  { ico:"✉",  label:"Email",    val:"omkolekar72@gmail.com",  href:"mailto:omkolekar72@gmail.com" },
];

const ICONS = ["⬡","◈","⬟","◆","⬠","◉","⬢","◍","⬣"];
const LC = { JavaScript:"#f7df1e",TypeScript:"#3178c6",Python:"#3572A5",Ruby:"#701516",CSS:"#563d7c",HTML:"#e34c26","C++":"#f34b7d",Java:"#b07219",Go:"#00ADD8" };
const FALLBACK = [
  { id:1, name:"launcher",          description:"A JavaScript-powered launcher application",        language:"JavaScript", stargazers_count:0, forks_count:0, html_url:`https://github.com/${GH}/launcher` },
  { id:2, name:"Kishor-Boutique",   description:"Boutique e-commerce site with modern CSS design",  language:"CSS",        stargazers_count:0, forks_count:0, html_url:`https://github.com/${GH}/Kishor-Boutique` },
  { id:3, name:"Kishor-lnchrr-inc", description:"JavaScript project — Kishor Launcher Inc",         language:"JavaScript", stargazers_count:0, forks_count:0, html_url:`https://github.com/${GH}/Kishor-lnchrr-inc` },
  { id:4, name:"project_act",       description:"Sample project for learning Ruby on Rails",         language:"Ruby",       stargazers_count:0, forks_count:0, html_url:`https://github.com/${GH}/project_act` },
  { id:5, name:"author",            description:"Author topic — articles and writing platform",      language:"HTML",       stargazers_count:0, forks_count:0, html_url:`https://github.com/${GH}/author` },
  { id:6, name:"mailgun",           description:"Mailgun library integration for Ruby applications", language:"Ruby",       stargazers_count:0, forks_count:0, html_url:`https://github.com/${GH}/mailgun` },
];

/* ── Global Styles ─────────────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:#060608; --bg1:#0d0d12; --bg2:#13131a; --bg3:#1a1a24;
      --b:rgba(255,255,255,.07); --b2:rgba(255,255,255,.12);
      --a:#e8ff47; --a2:#ff6b35; --a3:#00d4ff;
      --t:#f0eeff; --m:#7a788f; --m2:#4a4860; --g:#00ff88; --r:6px;
      --D:'Bebas Neue',sans-serif; --B:'Outfit',sans-serif; --M:'JetBrains Mono',monospace;
    }
    html { scroll-behavior: smooth; }
    body { background:var(--bg); color:var(--t); font-family:var(--B); overflow-x:hidden; }
    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:var(--bg); }
    ::-webkit-scrollbar-thumb { background:var(--a2); border-radius:2px; }

    .cur { position:fixed; width:10px; height:10px; border-radius:50%; background:var(--a); pointer-events:none; z-index:9999; transform:translate(-50%,-50%); mix-blend-mode:difference; transition:width .15s,height .15s; left:-99px; top:-99px; }
    .cur.big { width:40px; height:40px; }

    .noise { position:fixed; inset:0; z-index:0; pointer-events:none; opacity:.025; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
    .bgrid { position:fixed; inset:0; z-index:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px); background-size:70px 70px; }
    .g1 { position:fixed; top:-30vh; right:-20vw; width:55vw; height:55vw; border-radius:50%; background:radial-gradient(circle,rgba(232,255,71,.09) 0%,transparent 70%); pointer-events:none; z-index:0; }
    .g2 { position:fixed; bottom:-30vh; left:-15vw; width:50vw; height:50vw; border-radius:50%; background:radial-gradient(circle,rgba(255,107,53,.07) 0%,transparent 70%); pointer-events:none; z-index:0; }

    nav { position:fixed; top:0; left:0; right:0; z-index:500; display:flex; justify-content:space-between; align-items:center; padding:1.1rem 3rem; background:rgba(6,6,8,.88); backdrop-filter:blur(20px); border-bottom:1px solid var(--b); }
    .logo { font-family:var(--D); font-size:1.9rem; letter-spacing:3px; color:var(--a); text-decoration:none; }
    .nlinks { display:flex; gap:1.75rem; list-style:none; }
    .nlinks a { color:var(--m); text-decoration:none; font-size:.72rem; font-family:var(--M); letter-spacing:1.5px; text-transform:uppercase; transition:color .2s; }
    .nlinks a:hover { color:var(--a); }
    .ndot { display:inline-block; width:5px; height:5px; border-radius:50%; background:var(--a); margin-right:5px; vertical-align:middle; }
    .nhire { background:var(--a)!important; color:#000!important; padding:.4rem 1rem!important; border-radius:var(--r); font-weight:700!important; }

    .sec { max-width:1200px; margin:0 auto; padding:6rem 3rem; position:relative; z-index:1; }
    .slbl { font-family:var(--M); font-size:.65rem; color:var(--a2); letter-spacing:3px; text-transform:uppercase; margin-bottom:.6rem; display:flex; align-items:center; gap:.75rem; }
    .slbl::before { content:''; width:24px; height:1px; background:var(--a2); display:block; }
    .stitle { font-family:var(--D); font-size:clamp(2.5rem,5vw,4.5rem); letter-spacing:1px; line-height:1; margin-bottom:.6rem; }
    .sdesc { color:var(--m); max-width:500px; margin-bottom:3rem; font-size:.93rem; line-height:1.7; }

    .hero { min-height:100vh; display:flex; flex-direction:column; justify-content:center; padding:8rem 3rem 3rem; max-width:1200px; margin:0 auto; position:relative; z-index:1; }
    .htag { display:inline-flex; align-items:center; gap:.5rem; font-family:var(--M); font-size:.68rem; color:var(--a3); letter-spacing:2px; text-transform:uppercase; margin-bottom:2rem; padding:.35rem .9rem; border:1px solid rgba(0,212,255,.25); border-radius:100px; width:fit-content; animation:fu .6s both .1s; }
    .blink { width:7px; height:7px; border-radius:50%; background:var(--g); animation:bl 1.4s infinite; flex-shrink:0; display:inline-block; }
    @keyframes bl { 0%,100%{opacity:1} 50%{opacity:.2} }
    .htitle { font-family:var(--D); font-size:clamp(5rem,13vw,11rem); letter-spacing:-2px; line-height:.87; margin-bottom:.5rem; animation:fu .6s both .25s; }
    .l2 { color:transparent; -webkit-text-stroke:1.5px rgba(240,238,255,.22); display:block; }
    .aw { color:var(--a); }
    .hsub { font-size:1.05rem; color:var(--m); max-width:480px; margin:1.5rem 0 2.5rem; line-height:1.8; animation:fu .6s both .4s; }
    .hact { display:flex; gap:1rem; flex-wrap:wrap; animation:fu .6s both .55s; }
    .btn { display:inline-flex; align-items:center; gap:.6rem; padding:.82rem 1.75rem; border-radius:var(--r); font-family:var(--M); font-size:.74rem; letter-spacing:1px; cursor:pointer; text-decoration:none; transition:all .22s; border:none; }
    .bp { background:var(--a); color:#000; font-weight:700; }
    .bp:hover { transform:translateY(-2px); box-shadow:0 12px 30px rgba(232,255,71,.25); }
    .bo { background:transparent; color:var(--t); border:1px solid var(--b2); }
    .bo:hover { border-color:var(--a); color:var(--a); background:rgba(232,255,71,.05); }

    .ticker-w { overflow:hidden; border-top:1px solid var(--b); border-bottom:1px solid var(--b); padding:.55rem 0; margin-top:3rem; animation:fu .6s both .8s; }
    .ticker-t { display:flex; gap:3rem; animation:tick 24s linear infinite; white-space:nowrap; width:max-content; }
    .ti { font-family:var(--M); font-size:.66rem; color:var(--m2); letter-spacing:2px; text-transform:uppercase; }
    .ts { color:var(--a); }
    @keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    @keyframes fu { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

    .rv { opacity:0; transform:translateY(28px); transition:opacity .65s,transform .65s; }
    .rv.vis { opacity:1; transform:none; }

    .agrid { display:grid; grid-template-columns:1fr 1.35fr; gap:5rem; align-items:center; }
    .avwrap { position:relative; width:fit-content; }
    .avbox { width:275px; height:275px; border-radius:12px; background:var(--bg2); border:1px solid var(--b2); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem; position:relative; overflow:hidden; }
    .avbox::before { content:''; position:absolute; inset:-1px; background:linear-gradient(135deg,var(--a),var(--a2),transparent 60%); border-radius:12px; z-index:-1; }
    .avinit { font-family:var(--D); font-size:5.5rem; color:var(--a); letter-spacing:4px; line-height:1; }
    .avrole { font-family:var(--M); font-size:.6rem; color:var(--m); letter-spacing:2px; text-transform:uppercase; }
    .avbdg { position:absolute; bottom:-12px; right:-12px; background:var(--g); color:#000; font-family:var(--M); font-size:.6rem; padding:.32rem .78rem; border-radius:4px; letter-spacing:1px; font-weight:700; display:flex; align-items:center; gap:.35rem; }
    .abt p { color:var(--m); margin-bottom:1rem; line-height:1.8; font-size:.93rem; }
    .chips { display:flex; flex-wrap:wrap; gap:.45rem; margin-top:1.5rem; }
    .chip { font-family:var(--M); font-size:.63rem; padding:.25rem .7rem; border-radius:100px; border:1px solid var(--b2); color:var(--m); }
    .slinks { display:flex; gap:.7rem; margin-top:1.75rem; flex-wrap:wrap; }
    .sln { display:flex; align-items:center; gap:.45rem; color:var(--m); text-decoration:none; font-family:var(--M); font-size:.68rem; padding:.48rem .95rem; border:1px solid var(--b); border-radius:var(--r); transition:all .2s; }
    .sln:hover { color:var(--a); border-color:var(--a); background:rgba(232,255,71,.05); }

    .sgrid { display:grid; grid-template-columns:repeat(auto-fill,minmax(185px,1fr)); gap:1.2rem; }
    .skc { background:var(--bg1); border:1px solid var(--b); border-radius:10px; padding:1.35rem; transition:all .22s; position:relative; overflow:hidden; }
    .skc::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--a),var(--a2)); transform:scaleX(0); transition:transform .28s; transform-origin:left; display:block; }
    .skc:hover { border-color:rgba(232,255,71,.3); transform:translateY(-3px); background:var(--bg2); }
    .skc:hover::after { transform:scaleX(1); }
    .skico { font-size:1.35rem; color:var(--a); margin-bottom:.7rem; }
    .skcat { font-family:var(--M); font-size:.58rem; color:var(--a2); letter-spacing:2px; text-transform:uppercase; margin-bottom:.35rem; }
    .skname { font-weight:600; margin-bottom:.85rem; font-size:.92rem; }
    .sktags { display:flex; flex-wrap:wrap; gap:.3rem; }
    .skt { font-family:var(--M); font-size:.58rem; padding:.17rem .5rem; border-radius:3px; background:rgba(255,255,255,.04); color:var(--m); border:1px solid var(--b); }

    .phdr { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:2.5rem; flex-wrap:wrap; gap:1rem; }
    .pall { font-family:var(--M); font-size:.68rem; color:var(--a); text-decoration:none; letter-spacing:1px; display:flex; align-items:center; gap:.4rem; opacity:.8; transition:opacity .2s; }
    .pall:hover { opacity:1; }
    .pgrid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:1.4rem; }
    .pc { background:var(--bg1); border:1px solid var(--b); border-radius:10px; padding:1.7rem; display:flex; flex-direction:column; gap:.95rem; cursor:pointer; text-decoration:none; color:var(--t); transition:all .28s; }
    .pc:hover { border-color:rgba(232,255,71,.35); transform:translateY(-5px); box-shadow:0 18px 48px rgba(0,0,0,.5); }
    .pc:hover .pa { transform:translate(3px,-3px); color:var(--a); }
    .phrow { display:flex; justify-content:space-between; align-items:flex-start; }
    .pico { width:42px; height:42px; border-radius:8px; background:linear-gradient(135deg,var(--a),var(--a2)); display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0; }
    .pa { transition:transform .18s,color .18s; color:var(--m); font-size:1rem; }
    .pname { font-family:var(--D); font-size:1.38rem; letter-spacing:.5px; text-transform:capitalize; }
    .pdesc { color:var(--m); font-size:.86rem; line-height:1.65; flex:1; }
    .pfoot { display:flex; justify-content:space-between; align-items:center; padding-top:.95rem; border-top:1px solid var(--b); }
    .plng { font-family:var(--M); font-size:.63rem; color:var(--a3); display:flex; align-items:center; gap:.35rem; }
    .ld { width:8px; height:8px; border-radius:50%; display:inline-block; }
    .psts { display:flex; gap:.85rem; }
    .pst { font-family:var(--M); font-size:.61rem; color:var(--m); }
    .sk { background:linear-gradient(90deg,var(--bg2) 25%,var(--bg3) 50%,var(--bg2) 75%); background-size:200% 100%; animation:shim 1.4s infinite; border-radius:var(--r); }
    @keyframes shim { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

    .lgrid { display:grid; grid-template-columns:1fr 1fr; gap:2.5rem; align-items:center; }
    .lcard { background:var(--bg1); border:1px solid var(--b); border-radius:12px; padding:2rem; }
    .lbig { font-family:var(--D); font-size:5rem; color:var(--a); line-height:1; }
    .llbl { font-family:var(--M); font-size:.65rem; color:var(--m); letter-spacing:1.5px; text-transform:uppercase; margin-bottom:1.5rem; }
    .lcts { display:flex; gap:2.5rem; }
    .lnum { font-family:var(--M); font-size:1.55rem; font-weight:700; line-height:1; }
    .lsub { font-family:var(--M); font-size:.6rem; color:var(--m); letter-spacing:1px; text-transform:uppercase; margin-top:.2rem; }
    .lbars { display:flex; flex-direction:column; gap:1.2rem; }
    .lbar { display:flex; flex-direction:column; gap:.38rem; }
    .lbrow { display:flex; justify-content:space-between; font-family:var(--M); font-size:.68rem; }
    .lbtrk { height:6px; background:var(--bg3); border-radius:3px; overflow:hidden; }
    .lbfil { height:100%; border-radius:3px; }

    .tline { display:flex; flex-direction:column; gap:2rem; position:relative; padding-left:2px; }
    .tline::before { content:''; position:absolute; left:7px; top:8px; bottom:8px; width:1px; background:var(--b2); display:block; }
    .ti2 { display:flex; gap:2rem; position:relative; }
    .tdot { width:15px; height:15px; border-radius:50%; background:var(--a); flex-shrink:0; margin-top:4px; border:2px solid var(--bg); box-shadow:0 0 0 3px rgba(232,255,71,.18); }
    .tbox { background:var(--bg1); border:1px solid var(--b); border-radius:10px; padding:1.45rem; flex:1; transition:border-color .2s; }
    .tbox:hover { border-color:var(--b2); }
    .trole { font-family:var(--D); font-size:1.3rem; letter-spacing:.5px; margin-bottom:.22rem; }
    .tco { color:var(--a); font-size:.88rem; font-weight:500; margin-bottom:.18rem; }
    .tper { font-family:var(--M); font-size:.63rem; color:var(--m); letter-spacing:1px; }
    .tdesc { color:var(--m); font-size:.86rem; margin-top:.7rem; line-height:1.7; }

    .cgrid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:start; }
    .cbig { font-family:var(--D); font-size:clamp(3rem,7vw,5.5rem); letter-spacing:1px; line-height:.92; margin-bottom:1.5rem; }
    .cbig span { color:var(--a); }
    .ccard { background:var(--bg1); border:1px solid var(--b); border-radius:12px; padding:1.7rem; display:flex; flex-direction:column; gap:1.05rem; }
    .crow { display:flex; align-items:center; gap:1rem; text-decoration:none; color:var(--t); transition:color .18s; padding:.2rem 0; }
    .crow:hover { color:var(--a); }
    .cico { width:38px; height:38px; border-radius:var(--r); background:var(--bg2); border:1px solid var(--b); display:flex; align-items:center; justify-content:center; font-size:.9rem; flex-shrink:0; }
    .cinf small { display:block; font-family:var(--M); font-size:.58rem; color:var(--m); letter-spacing:1px; text-transform:uppercase; }
    .cinf span { font-size:.86rem; }
    .carr { margin-left:auto; color:var(--m); font-size:.82rem; }

    footer { border-top:1px solid var(--b); padding:2rem 3rem; text-align:center; font-family:var(--M); font-size:.63rem; color:var(--m2); letter-spacing:1px; position:relative; z-index:1; }
    footer span { color:var(--a); }

    @media(max-width:900px) {
      nav { padding:1rem 1.5rem; }
      .nlinks { display:none; }
      .hero, .sec { padding-left:1.5rem; padding-right:1.5rem; }
      .hero { padding-top:7rem; padding-bottom:2rem; }
      .sec { padding-top:4rem; padding-bottom:4rem; }
      .agrid, .lgrid, .cgrid { grid-template-columns:1fr; gap:2.5rem; }
      .pgrid { grid-template-columns:1fr; }
      .sgrid { grid-template-columns:repeat(2,1fr); }
      .htitle { font-size:clamp(4rem,16vw,7rem); }
    }
  `}</style>
);

/* ── Cursor ──────────────────────────────────────────────────────────────────── */
function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) { ref.current.style.left = e.clientX + "px"; ref.current.style.top = e.clientY + "px"; }
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);
  useEffect(() => {
    const on = () => ref.current?.classList.add("big");
    const off = () => ref.current?.classList.remove("big");
    const attach = () => document.querySelectorAll("a,.pc,.skc,.tbox,.btn").forEach(el => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
  return <div className="cur" ref={ref} />;
}

/* ── Reveal Hook ─────────────────────────────────────────────────────────────── */
function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add("vis"), i * 55); });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [dep]);
}

/* ── Navbar ──────────────────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav>
      <a href="#hero" className="logo">OK.</a>
      <ul className="nlinks">
        {["about","skills","projects","leetcode","experience","contact"].map(l => (
          <li key={l}><a href={`#${l}`}><span className="ndot" />{`_${l}`}</a></li>
        ))}
        <li><a href="mailto:omkolekar72@gmail.com" className="nhire">Hire Me</a></li>
      </ul>
    </nav>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────────── */
function Hero() {
  const doubled = [...TICKER, ...TICKER];
  return (
    <div id="hero" className="hero">
      <div className="htag"><span className="blink" />Available for opportunities</div>
      <h1 className="htitle">
        <span style={{ display: "block" }}>OM</span>
        <span className="l2">KOLE<span className="aw">KAR</span></span>
      </h1>
      <p className="hsub">Full-Stack Developer crafting performant web experiences with React, Node.js & modern tooling. Based in India — building for the world.</p>
      <div className="hact">
        <a href="#projects" className="btn bp">View Projects →</a>
        <a href={`https://github.com/${GH}`} target="_blank" rel="noreferrer" className="btn bo">⌥ GitHub</a>
        <a href="#contact" className="btn bo">Get in Touch</a>
      </div>
      <div className="ticker-w">
        <div className="ticker-t">
          {doubled.map((item, i) => <span key={i} className={item === "◆" ? "ts" : "ti"}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ── About ───────────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="sec">
      <div className="slbl rv">01 // Who I Am</div>
      <div className="agrid">
        <div className="avwrap rv">
          <div className="avbox">
            <div className="avinit">OK</div>
            <div className="avrole">Full Stack Dev</div>
          </div>
          <div className="avbdg"><span className="blink" />Open to Work</div>
        </div>
        <div className="abt rv">
          <div className="stitle" style={{ marginBottom: "1rem" }}>About Me</div>
          <p>Hey, I'm <strong>Om Kolekar</strong> — a passionate Full-Stack Developer from India. I love building elegant, fast, and functional web apps that solve real problems.</p>
          <p>I work across the entire stack — from pixel-perfect UIs in React to robust backends and clean deployments on Vercel. Also an avid problem solver on LeetCode, sharpening DSA daily.</p>
          <p>When not coding, I explore new tech, contribute to open-source, and build things that matter.</p>
          <div className="chips">
            {["React.js","Node.js","JavaScript","Full-Stack","DSA","Open Source"].map(c => <span className="chip" key={c}>{c}</span>)}
          </div>
          <div className="slinks">
            <a href={`https://github.com/${GH}`} target="_blank" rel="noreferrer" className="sln">⌥ GitHub</a>
            <a href="https://www.linkedin.com/in/kolekarom" target="_blank" rel="noreferrer" className="sln">in LinkedIn</a>
            <a href="https://leetcode.com/u/kolekarom/" target="_blank" rel="noreferrer" className="sln">⊕ LeetCode</a>
            <a href="https://vercel.com/oms-projects-33c3352f" target="_blank" rel="noreferrer" className="sln">▲ Vercel</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Skills ──────────────────────────────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="sec">
      <div className="slbl rv">02 // Expertise</div>
      <div className="stitle rv">Tech Stack</div>
      <p className="sdesc rv">Technologies I use to bring ideas to life — from pixel to production.</p>
      <div className="sgrid">
        {SKILLS.map((s, i) => (
          <div className="skc rv" key={s.cat} style={{ transitionDelay: `${i * 0.07}s` }}>
            <div className="skico">{s.icon}</div>
            <div className="skcat">{s.cat}</div>
            <div className="skname">{s.cat}</div>
            <div className="sktags">{s.tags.map(t => <span className="skt" key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Projects ────────────────────────────────────────────────────────────────── */
function Skeleton({ h = 14, w = "100%", mb = 0 }) {
  return <div className="sk" style={{ height: h, width: w, marginBottom: mb, borderRadius: 6 }} />;
}

function Projects({ onLoad }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GH}/repos?per_page=12&sort=updated`)
      .then(r => r.json())
      .then(d => {
        const list = Array.isArray(d) ? d.filter(r => !r.fork).slice(0, 9) : FALLBACK;
        setRepos(list.length ? list : FALLBACK);
      })
      .catch(() => setRepos(FALLBACK))
      .finally(() => { setLoading(false); onLoad && onLoad(); });
  }, []);

  return (
    <section id="projects" className="sec">
      <div className="phdr">
        <div>
          <div className="slbl rv">03 // Work</div>
          <div className="stitle rv">Projects</div>
        </div>
        <a href={`https://github.com/${GH}?tab=repositories`} target="_blank" rel="noreferrer" className="pall rv">All Repos →</a>
      </div>
      <div className="pgrid">
        {loading
          ? Array(6).fill(0).map((_, i) => (
              <div className="pc" key={i} style={{ pointerEvents: "none" }}>
                <Skeleton h={42} w={42} mb={12} />
                <Skeleton h={20} w="70%" mb={10} />
                <Skeleton h={12} w="100%" mb={6} />
                <Skeleton h={12} w="80%" mb={18} />
                <Skeleton h={1} w="100%" mb={10} />
                <Skeleton h={10} w="40%" />
              </div>
            ))
          : repos.map((repo, i) => {
              const color = LC[repo.language] || "#7a788f";
              return (
                <a className="pc rv" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id || i} style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="phrow">
                    <div className="pico">{ICONS[i % ICONS.length]}</div>
                    <span className="pa">↗</span>
                  </div>
                  <div className="pname">{(repo.name || "").replace(/[-_]/g, " ")}</div>
                  <p className="pdesc">{repo.description || "A project built with passion and clean code."}</p>
                  <div className="pfoot">
                    <div className="plng"><span className="ld" style={{ background: color }} />{repo.language || "Code"}</div>
                    <div className="psts">
                      <span className="pst">★ {repo.stargazers_count}</span>
                      <span className="pst">⑂ {repo.forks_count}</span>
                    </div>
                  </div>
                </a>
              );
            })}
      </div>
    </section>
  );
}

/* ── LeetCode ────────────────────────────────────────────────────────────────── */
function LeetCode() {
  const bars = [
    { label: "Easy",   count: 80, pct: "53%", color: "var(--g)" },
    { label: "Medium", count: 55, pct: "37%", color: "var(--a)" },
    { label: "Hard",   count: 15, pct: "10%", color: "var(--a2)" },
  ];
  return (
    <section id="leetcode" className="sec">
      <div className="slbl rv">04 // Problem Solving</div>
      <div className="stitle rv">LeetCode Stats</div>
      <p className="sdesc rv">Sharpening algorithmic thinking — one problem at a time.</p>
      <div className="lgrid">
        <div className="lcard rv">
          <div className="lbig">150+</div>
          <div className="llbl">Problems Solved</div>
          <div className="lcts">
            {bars.map(b => (
              <div key={b.label}>
                <div className="lnum" style={{ color: b.color }}>{b.count}</div>
                <div className="lsub">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lcard rv">
          <div className="lbars">
            {bars.map(b => (
              <div className="lbar" key={b.label}>
                <div className="lbrow">
                  <span style={{ color: b.color, fontFamily: "var(--M)", fontSize: ".7rem" }}>{b.label}</span>
                  <span style={{ fontFamily: "var(--M)", fontSize: ".7rem", color: "var(--m)" }}>{b.count}</span>
                </div>
                <div className="lbtrk"><div className="lbfil" style={{ width: b.pct, background: b.color }} /></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", paddingTop: "1.2rem", borderTop: "1px solid var(--b)" }}>
            <a href="https://leetcode.com/u/kolekarom/" target="_blank" rel="noreferrer" className="btn bo" style={{ fontSize: ".7rem" }}>View Profile →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Experience ──────────────────────────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="slbl rv">05 // Journey</div>
      <div className="stitle rv">Experience</div>
      <p className="sdesc rv">My path as a developer — projects shipped, skills earned.</p>
      <div className="tline">
        {EXP.map((e, i) => (
          <div className="ti2 rv" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
            <div className="tdot" />
            <div className="tbox">
              <div className="trole">{e.role}</div>
              <div className="tco">{e.co}</div>
              <div className="tper">{e.period}</div>
              <div className="tdesc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Contact ─────────────────────────────────────────────────────────────────── */
function Contact() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section id="contact" className="sec">
      <div className="slbl rv">06 // Connect</div>
      <div className="cgrid">
        <div className="rv">
          <div className="cbig">LET'S<br /><span>BUILD</span><br />TOGETHER</div>
          <p style={{ color: "var(--m)", lineHeight: 1.75, fontSize: ".93rem", maxWidth: "360px" }}>
            Open to full-time roles, freelance projects, and exciting collaborations.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <button 
              onClick={() => setShowEmailForm(true)}
              className="btn bp"
              style={{ 
                background: "var(--a)", 
                color: "#000", 
                border: "none", 
                cursor: "pointer",
                fontFamily: "var(--M)",
                fontSize: ".74rem",
                letterSpacing: "1px",
                fontWeight: "700",
                padding: ".82rem 1.75rem",
                borderRadius: "var(--r)",
                transition: "all .22s"
              }}
            >
              Send Message →
            </button>
          </div>
        </div>
        <div className="ccard rv">
          {CONTACTS.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="crow">
              <div className="cico" style={c.small ? { fontSize: ".78rem", fontWeight: 700 } : {}}>{c.ico}</div>
              <div className="cinf"><small>{c.label}</small><span>{c.val}</span></div>
              <span className="carr">↗</span>
            </a>
          ))}
        </div>
      </div>
      {showEmailForm && <EmailForm onClose={() => setShowEmailForm(false)} />}
    </section>
  );
}

/* ── App ─────────────────────────────────────────────────────────────────────── */
export default function App() {
  const [reposLoaded, setReposLoaded] = useState(false);
  useReveal(reposLoaded);

  return (
    <>
      <GlobalStyles />
      <div className="noise" />
      <div className="bgrid" />
      <div className="g1" />
      <div className="g2" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onLoad={() => setReposLoaded(true)} />
        <LeetCode />
        <Experience />
        <Contact />
      </main>
      <footer>
        <span>© 2025 Om Kolekar</span> &nbsp;—&nbsp; Built with React + ❤ &nbsp;◆&nbsp; Deployed on Vercel
      </footer>
    </>
  );
}
