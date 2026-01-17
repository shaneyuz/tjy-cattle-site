import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="nav">
        <div className="container navInner">
          <Link className="brand" href="/">
            TJY <span>Cattle</span>
          </Link>
          <div className="links">
            <Link className="link" href="/horses">Horses</Link>
            <Link className="link" href="/ranch-life">Ranch Life</Link>
            <Link className="link" href="/beef-orders">Beef Orders</Link>
            <Link className="link" href="/contact">Contact</Link>
            <a className="link" href="/admin" rel="noreferrer">Admin</a>
          </div>
        </div>
      </div>

      <main className="container">{children}</main>

      <footer className="footer">
        <div className="container">
          <div style={{display:"grid",gap:10}}>
            <div style={{fontWeight:800,letterSpacing:".06em",textTransform:"uppercase"}}>
              TJY Cattle
            </div>
            <div>Working Cattle Ranch • Ranch-Raised Beef • Proven Horses</div>
            <div style={{display:"grid",gap:6, maxWidth: 700}}>
              <div><strong>Shane</strong> — 307-231-1091 — Shane@tjycattle.com</div>
              <div><strong>Taylor</strong> — 307-371-8890 — Taylorj@tjycattle.com</div>
            </div>
            <div style={{fontSize:12}}>© {new Date().getFullYear()} TJYcattle.com</div>
          </div>
        </div>
      </footer>
    </>
  );
}
