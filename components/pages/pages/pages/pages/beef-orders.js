import Layout from "../components/Layout";
import { useState } from "react";

export default function BeefOrders() {
  // Replace this later with your Formspree (or other) endpoint:
  const FORM_ACTION = "";

  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="hero" style={{paddingTop:28}}>
        <div className="kicker">Ranch-raised • Direct to your freezer</div>
        <h1 className="h1">Custom Beef Orders</h1>
        <p className="p">
          Our beef is raised right here on the ranch with careful attention to animal welfare, handling,
          and consistency. Request a whole, half, or quarter and we’ll contact you to confirm availability,
          pricing, and timing.
        </p>
      </section>

      <section className="grid grid2" style={{marginTop:14}}>
        <div className="card">
          <h3>How it works</h3>
          <ol style={{color:"var(--muted)", lineHeight:1.9, paddingLeft:18, margin:0}}>
            <li>Submit a beef order request</li>
            <li>We contact you to confirm availability and schedule</li>
            <li>Processed at a USDA-inspected facility</li>
            <li>You pick up directly from the processor</li>
          </ol>
          <p className="p" style={{marginTop:10}}>
            <strong>Note:</strong> Final take-home weight varies by animal and cut preferences.
          </p>
        </div>

        <div className="card">
          <h3>Beef options</h3>
          <div className="grid" style={{gap:10}}>
            <div className="badge">Whole Beef — best value if you have freezer space</div>
            <div className="badge">Half Beef — great for large families or split buyers</div>
            <div className="badge">Quarter Beef — a solid starter option</div>
          </div>
          <p className="p" style={{marginTop:10}}>
            Want help choosing a size? Contact us and we’ll walk you through freezer space and what to expect.
          </p>
        </div>
      </section>

      <section className="card" style={{marginTop:14}}>
        <h3>Beef Order Request</h3>

        {sent ? (
          <div className="badge avail" style={{marginTop:10}}>
            Request sent — we’ll be in touch soon.
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
          <div className="grid grid2">
            <div className="field">
              <label>Name</label>
              <input name="name" required />
            </div>
            <div className="field">
              <label>Phone</label>
              <input name="phone" required />
            </div>
          </div>

          <div className="grid grid2">
            <div className="field">
              <label>Email</label>
              <input name="email" type="email" required />
            </div>
            <div className="field">
              <label>Beef Option</label>
              <select name="option" required>
                <option value="">Select…</option>
                <option>Whole</option>
                <option>Half</option>
                <option>Quarter</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>Preferred pickup timeframe</label>
            <input name="timeframe" placeholder="Example: Spring, early summer, next available..." />
          </div>

          <div className="field">
            <label>Questions / cut preferences / notes</label>
            <textarea name="message" rows="5" placeholder="Tell us anything helpful (freezer size questions, preferences, etc.)" />
          </div>

          <button className="btn" type="submit">Submit Beef Order Request</button>

          <p className="p" style={{margin:0}}>
            Submitting this form does not finalize your order. We will contact you to confirm details.
          </p>
        </form>
      </section>
    </Layout>
  );
}
