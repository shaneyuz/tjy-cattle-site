import Layout from "../components/Layout";
import { getAllGalleryItems } from "../lib/content";

export async function getStaticProps() {
  const items = getAllGalleryItems();
  return { props: { items } };
}

export default function RanchLife({ items }) {
  return (
    <Layout>
      <section className="hero" style={{paddingTop:28}}>
        <div className="kicker">Day-to-day • Real work</div>
        <h1 className="h1">Ranch Life</h1>
        <p className="p">
          Branding, calving, gathering, sorting, hay season — here’s a look at life at TJY Cattle.
        </p>
      </section>

      <section className="grid grid3" style={{marginTop:14}}>
        {(items || []).length === 0 ? (
          <div className="card">
            <h3>No photos yet.</h3>
            <p className="p">
              Add gallery items in <strong>/admin</strong> and they will appear here automatically.
            </p>
          </div>
        ) : (
          items.map((it) => (
            <div key={it.slug} className="card" style={{padding:12}}>
              {it.image ? (
                <img
                  src={it.image}
                  alt={it.title || "Ranch photo"}
                  style={{width:"100%", borderRadius:16, border:"1px solid var(--border)"}}
                />
              ) : null}
              <div style={{padding:10}}>
                <h3 style={{margin:"0 0 6px"}}>{it.title || "Ranch Life"}</h3>
                {it.caption ? <p className="p" style={{margin:0}}>{it.caption}</p> : null}
              </div>
            </div>
          ))
        )}
      </section>
    </Layout>
  );
}
