import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="kicker">Wyoming • Working Ranch • Real Stock</div>
        <h1 className="h1">TJY Cattle</h1>
        <p className="p">
          TJY Cattle is a working cattle ranch producing ranch-raised beef and dependable working cow
          horses. Our horses earn their keep gathering, sorting, doctoring, and putting in long days —
          the kind of real-world experience that creates honest, user-friendly ranch and rope horses.
        </p>
        <div className="actions">
          <Link className="btn" href="/horses">View Horses for Sale</Link>
          <Link className="btn secondary" href="/beef-orders">Order Ranch Beef</Link>
        </div>
      </section>

      <section className="grid grid3" style={{marginTop:18}}>
        <div className="card">
          <h3>Ranch-Raised Beef</h3>
          <div className="badge">Direct-to-consumer</div>
          <p className="p" style={{marginTop:10}}>
            Beef raised with care and consistency — simple, honest food you can feel good about feeding
            your family.
          </p>
          <Link className="btn" href="/beef-orders">Request an Order</Link>
        </div>

        <div className="card">
          <h3>Working Cow Horses</h3>
          <div className="badge">Ranch • Rope • Sorting</div>
          <p className="p" style={{marginTop:10}}>
            Ranch-broke horses shaped by day-to-day work: gathering cattle, sorting pairs, and handling
            rough country.
          </p>
          <Link className="btn" href="/horses">See Available Horses</Link>
        </div>

        <div className="card">
          <h3>Life on the Ranch</h3>
          <div className="badge">Photos & daily work</div>
          <p className="p" style={{marginTop:10}}>
            A look at what we do — branding, calving, gathering, hay season, and everything between.
          </p>
          <Link className="btn" href="/ranch-life">View Gallery</Link>
        </div>
      </section>

      <section className="grid grid2" style={{marginTop:14}}>
        <div className="card">
          <h3>What We Offer</h3>
          <ul style={{color:"var(--muted)",lineHeight:1.9, margin:0, paddingLeft:18}}>
            <li>Ranch-raised beef: whole, half, and quarter options</li>
            <li>Quality working cow horses</li>
            <li>Rope horses and ranch horses</li>
            <li>Cutting / sorting prospects</li>
            <li>Family-safe and ranch-broke horses when available</li>
          </ul>
        </div>

        <div className="card">
          <h3>Get in Touch</h3>
          <p className="p">
            Call or email anytime — we’re happy to answer questions about available horses, beef orders,
            or ranch operations.
          </p>
          <div style={{display:"grid",gap:8}}>
            <div className="badge avail">Shane — 307-231-1091 — Shane@tjycattle.com</div>
            <div className="badge avail">Taylor — 307-371-8890 — Taylorj@tjycattle.com</div>
          </div>
          <div className="actions" style={{marginTop:12}}>
            <Link className="btn" href="/contact">Contact Page</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
