"use client";
export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#fafafa", color: "#1a1a1a", fontFamily: "sans-serif" }}>

      {/* Ticker */}
      <div style={{ background: "#f0f0f7", borderBottom: "1px solid #e0ddf0", padding: "7px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap", width: "max-content", animation: "scroll 30s linear infinite" }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "inline-flex", gap: "2rem" }}>
              {[
                { name: "S&P 500", val: "5,892", chg: "+0.4%", up: true },
                { name: "FTSE 100", val: "8,441", chg: "-0.2%", up: false },
                { name: "EUR/USD", val: "1.0842", chg: "+0.3%", up: true },
                { name: "GBP/USD", val: "1.2731", chg: "-0.1%", up: false },
                { name: "Brent Crude", val: "$78.4", chg: "+1.2%", up: true },
                { name: "Gold", val: "$3,312", chg: "+0.6%", up: true },
                { name: "US 10Y", val: "4.38%", chg: "+0.06", up: true },
                { name: "VIX", val: "18.2", chg: "-0.8", up: false },
                { name: "DXY", val: "101.2", chg: "-0.8%", up: false },
              ].map((item) => (
                <span key={item.name} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{item.name}</span>
                  <span style={{ color: "#888" }}>{item.val}</span>
                  <span style={{ color: item.up ? "#2d7a4f" : "#a33030" }}>{item.chg}</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e8e4f0", padding: "0 2rem", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "22px", letterSpacing: "-0.5px", fontWeight: 500 }}>
          Fault<span style={{ color: "#6b4fa0" }}>Lines</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Geopolitics", "Macro", "Markets", "Policy", "Data"].map((item) => (
            <a key={item} style={{ fontSize: "11px", color: "#666", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }} onMouseEnter={e => (e.currentTarget.style.color = "#6b4fa0")} onMouseLeave={e => (e.currentTarget.style.color = "#666")}>
              {item}
            </a>
          ))}
        </div>
        <button style={{ background: "#2d7a4f", color: "#fff", border: "none", padding: "6px 16px", borderRadius: "3px", fontSize: "12px", fontWeight: 500, cursor: "pointer" }}>
          Subscribe
        </button>
      </nav>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #ede9f5", padding: "2.5rem 2rem 2rem", background: "#fff" }}>
        <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b4fa0", fontWeight: 600, marginBottom: "1rem" }}>
          Featured analysis
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "3rem", alignItems: "start" }}>
          <div>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 500, lineHeight: 1.15, color: "#1a1a1a", marginBottom: "1rem", letterSpacing: "-0.5px" }}>
              Riyadh is pricing yuan oil deals. Traders are{" "}
              <em style={{ fontStyle: "italic", color: "#2d7a4f" }}>reading it wrong.</em>
            </h1>
            <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Everyone&apos;s calling it dedollarisation. That framing has become lazy shorthand for something more calculated. Saudi Arabia still parks its reserves in Treasuries. What&apos;s changed is its willingness to let Washington wonder if that&apos;s permanent.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "#888", marginBottom: "1.25rem", flexWrap: "wrap" }}>
              <span style={{ background: "#ede9f5", color: "#5a3d8a", padding: "2px 9px", borderRadius: "99px", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>Geopolitics</span>
              <span style={{ background: "#f0edf8", color: "#6b4fa0", padding: "2px 9px", borderRadius: "99px", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>Markets</span>
              <span>June 12, 2026</span>
              <span>8 min read</span>
            </div>
            <a style={{ fontSize: "13px", color: "#2d7a4f", textDecoration: "none", borderBottom: "1px solid #2d7a4f", paddingBottom: "1px", cursor: "pointer", fontWeight: 500 }}>
              Read analysis →
            </a>
          </div>

          {/* Sparklines */}
          <div>
            <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", marginBottom: "0.75rem", fontWeight: 500 }}>Market pulse</div>
            {[
              { name: "US 10Y yield", val: "4.38%", chg: "+0.06", up: true },
              { name: "DXY (dollar index)", val: "101.2", chg: "-0.84", up: false },
              { name: "Gold ($/oz)", val: "$3,312", chg: "+$18", up: true },
            ].map((item) => (
              <div key={item.name} style={{ background: "#f7f5fc", border: "1px solid #e0ddf0", borderRadius: "6px", padding: "0.875rem 1rem", marginBottom: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500 }}>{item.name}</span>
                  <span>
                    <span style={{ fontSize: "13px", fontWeight: 500 }}>{item.val}</span>
                    <span style={{ fontSize: "11px", marginLeft: "4px", color: item.up ? "#2d7a4f" : "#a33030" }}>{item.chg}</span>
                  </span>
                </div>
                <div style={{ height: "40px", background: item.up ? "rgba(45,122,79,0.07)" : "rgba(163,48,48,0.07)", borderRadius: "3px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk dashboard */}
      <div style={{ background: "#f4f2fa", borderTop: "1px solid #e0ddf0", borderBottom: "1px solid #e0ddf0", padding: "1.5rem 2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
          <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", fontWeight: 500 }}>Geopolitical risk dashboard</span>
          <span style={{ fontSize: "11px", color: "#aaa", cursor: "pointer" }}>Full dashboard →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
          {[
            { label: "Global risk index", val: 74, sub: "Elevated · up from 68 last month", color: "#a33030" },
            { label: "US–China tension", val: 81, sub: "High · Taiwan Strait activity up", color: "#c0601a" },
            { label: "Middle East volatility", val: 62, sub: "Moderate · ceasefire holding", color: "#b09820" },
            { label: "EUR political risk", val: 38, sub: "Low · post-election stability", color: "#2d7a4f" },
          ].map((item) => (
            <div key={item.label} style={{ background: "#fff", border: "1px solid #e8e4f0", borderRadius: "6px", padding: "1rem" }}>
              <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.07em", color: "#888", marginBottom: "6px", fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontSize: "24px", fontWeight: 500, lineHeight: 1, marginBottom: "4px", color: item.color }}>
                {item.val}<span style={{ fontSize: "14px", color: "#ccc" }}>/100</span>
              </div>
              <div style={{ fontSize: "11px", color: "#888", marginBottom: "8px" }}>{item.sub}</div>
              <div style={{ height: "4px", borderRadius: "2px", background: "#e8e4f0" }}>
                <div style={{ height: "100%", borderRadius: "2px", background: item.color, width: `${item.val}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div style={{ padding: "2rem", background: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #ede9f5", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Latest analysis</span>
          <span style={{ fontSize: "11px", color: "#aaa", cursor: "pointer" }}>All articles →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2rem" }}>
          {[
            {
              tag: "Macro", tagBg: "#e3f2ea", tagColor: "#1e5c38",
              title: "Bailey has no good options and markets haven't priced that in yet",
              excerpt: "Services inflation is stuck. The housing market is softening fast. Cutting looks like panic; holding much longer starts breaking things. Sterling is too calm about all of this.",
              date: "June 10, 2026", read: "6 min read",
            },
            {
              tag: "Geopolitics", tagBg: "#ede9f5", tagColor: "#5a3d8a",
              title: "India is buying Russian oil and courting Washington at the same time. It's working.",
              excerpt: "Modi gets called opportunistic for this. The more useful question is why everyone else isn't doing it. Delhi has rare earth supply chains both sides need and it's quietly making them pay for access.",
              date: "June 8, 2026", read: "9 min read",
            },
            {
              tag: "Markets", tagBg: "#f0edf8", tagColor: "#6b4fa0",
              title: "The yield curve inverted again. The recession crowd is probably wrong again too.",
              excerpt: "Three years of inversion calls, three years of waiting. What's driving the curve this time looks more like a term premium repricing than anything recessionary. The distinction matters if you're positioned for a hard landing.",
              date: "June 5, 2026", read: "7 min read",
            },
          ].map((a) => (
            <div key={a.title} style={{ borderTop: "3px solid #ede9f5", paddingTop: "1rem", cursor: "pointer" }}>
              <span style={{ background: a.tagBg, color: a.tagColor, padding: "2px 9px", borderRadius: "99px", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                {a.tag}
              </span>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: 500, lineHeight: 1.3, color: "#1a1a1a", margin: "0.5rem 0" }}>
                {a.title}
              </h2>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.65, marginBottom: "0.75rem" }}>{a.excerpt}</p>
              <div style={{ fontSize: "11px", color: "#aaa" }}>{a.date} · {a.read}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div style={{ padding: "2.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #e8e4f0", gap: "2rem", background: "linear-gradient(135deg, #f4f2fa 0%, #edf5f0 100%)" }}>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 500, marginBottom: "0.5rem" }}>Sunday dispatch</div>
          <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.6, maxWidth: "380px" }}>
            One email a week. The political developments that actually moved markets, and the ones that should have but didn&apos;t. Written on Sundays, read with coffee.
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
          <input type="email" placeholder="your@email.com" style={{ padding: "8px 14px", border: "1px solid #d0cce8", borderRadius: "3px", fontSize: "13px", background: "#fff", color: "#1a1a1a", width: "210px" }} />
          <button style={{ background: "#6b4fa0", color: "#fff", border: "none", padding: "8px 18px", borderRadius: "3px", fontSize: "13px", fontWeight: 500, cursor: "pointer" }}>
            Subscribe
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </main>
  );
}