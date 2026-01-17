import Layout from "../components/Layout";
import { getAllHorses } from "../lib/content";
import { useMemo, useState } from "react";

export async function getStaticProps() {
  const horses = getAllHorses();
  return { props: { horses } };
}

export default function Horses({ horses }) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return (horses || []).filter((h) => {
      const matchesQ =
        !query ||
        (h.name || "").toLowerCase().includes(query) ||
        (h.body || "").toLowerCase().includes(query) ||
        (h.disciplines || []).join(" ").toLowerCase().includes(query);

      const matchesStatus = status === "All" || (h.status || "") === status;
      return matchesQ && matchesStatus;
    });
  }, [horses, q, status]);

  return (
    <Layout>
      <section className="hero" style={{paddingTop:28}}>
        <div className="kicker">Honest horses • Built by real work</div>
        <h1 className="h1">Horses for Sale</h1>
        <p className="p">
          Listings are updated as horses become available. If you’re looking for something specific,
          reach out — we may have horses in training or coming available soon.
        </p>

        <div className="grid grid2" style={{marginTop:14}}>
          <div className="card">
            <label>Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, discipline, description..."
            />
          </div>
          <div className="card">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>All</option>
              <option>Available</option>
              <option>Pending</option>
              <option>Sold</option>
            </select>
          </div>
        </div>
      </section>

      <section className="grid" style={{marginTop:12}}>
        {(filtered || []).length === 0 ? (
          <div className="card">
            <h3>No listings match your search.</h3>
            <p className="p">Try a different keyword or set Status to “All”.</p>
          </div>
        ) : (
          filtered.map((h) => (
            <div key={h.slug} className="card">
              <div style={{display:"flex", justifyContent:"space-between", gap:12, flexWrap:"wrap"}}>
                <div>
                  <h3 style={{margin:"0 0 6px"}}>{h.name}</h3>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                    <span className={`badge ${badgeClass(h.status)}`}>{h.status || "Available"}</span>
                    {h.sex && <span className="badge">{h.sex}</span>}
                    {h.age && <span className="badge">{h.age} yrs</span>}
                    {h.height && <span className="badge">{h.height} hh</span>}
                    {h.price ? <span className="badge avail">${Number(h.price).toLocaleString()}</span> : <span className="badge">Call for price</span>}
                  </div>
                </div>
                {h.featuredImage ? (
                  <div style={{minWidth:260, maxWidth:320}}>
                    <img
                      src={h.featuredImage}
                      alt={h.name}
                      style={{width:"100%", borderRadius:16, border:"1px solid var(--border)"}}
                    />
                  </div>
                ) : null}
              </div>

              {h.disciplines?.length ? (
                <div style={{marginTop:10, display:"flex", gap:8, flexWrap:"wrap"}}>
                  {h.disciplines.map((d, idx) => (
                    <span key={idx} className="badge">{d}</span>
                  ))}
                </div>
              ) : null}

              <p className="p" style={{marginTop:10, whiteSpace:"pre-wrap"}}>{h.body}</p>

              <div className="actions" style={{marginTop:10}}>
                <a className="btn" href="/contact">Request More Info</a>
              </div>
            </div>
          ))
        )}
      </section>
    </Layout>
  );
}

function badgeClass(status) {
  if (status === "Available") return "avail";
  if (status === "Pending") return "pending";
  if (status === "Sold") return "sold";
  return "";
}
