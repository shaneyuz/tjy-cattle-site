import Layout from "../components/Layout";
import { useState } from "react";

export default function Contact() {
  // Replace this later with your Formspree (or other) endpoint:
  const FORM_ACTION = "";
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="hero" style={{paddingTop:28}}>
        <div className="kicker">Call • Email • Message</div>
        <h1 className="h1">Contact TJY Cattle</h1>
        <p className="p">
          Reach out with questions about horses for sale, beef orders, or anything ranch-related.
        </p>
      </section>

      <section className="grid grid2" style={{marginTop:14}}>
        <div className="card">
          <h3>Direct Contact</h3>
          <div style={{display:"grid",gap:10, marginTop:10}}>
            <div className="badge avail"><strong>Shane</strong> — 307-231-1091 — Shane@tjycattle.com</div>
            <div className="badge avail"><strong>Taylor</strong> — 307-371-8890 — Taylorj@tjycattle.com</div>
          </div>
          <p className="p" style={{marginTop:12}}>
            If we’re tied up working cattle, leave a message and we’ll get back to you as soon as we can.
          </p>
        </div>

        <div className="card">
          <h3>Send a Message</h3>

          {sent ? (
            <div className="badge avail" style={{marginTop:10}}>
              Message sent — we’ll get back to you soon.
            </div>
          ) : null}

          <form
            action={FORM_ACTION || undefined}
            method="POST"
            onSubmit={(e) => {
              if (!FORM_ACTION) {
                e.preventDefault();
                setSent(true);
              }
            }}
            className="grid"
            style={{gap:12, marginTop:12}}
          >
            <div className="field">
              <label>Name</label>
              <input name="name" required />
            </div>

            <div className="grid grid2">
              <div className="field">
                <label>Email</label>
                <input name="email" type="email" required />
              </div>
              <div className="field">
                <label>Phone</label>
                <input name="phone" />
              </div>
            </div>

            <div className="field">
              <label>Topic</label>
              <select name="topic" required>
                <option value="">Select…</option>
                <option>Horses for Sale</option>
                <option>Beef Orders</option>
                <option>General Question</option>
              </select>
            </div>

            <div className="field">
              <label>Questions / Message</label>
              <textarea name="message" rows="6" required />
            </div>

            <button className="btn" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
