export default function ContactPage() {
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>Contact & Feedback</h1>
  
        <h2>🔍 View Notices (GET)</h2>
        <form method="GET" action="/api/notices">
          <label>View all notices:</label>
          <br />
          <button type="submit">Fetch Notices</button>
        </form>
  
        <hr />
  
        <h2>🛠️ Submit Repair Request (POST)</h2>
        <form method="POST" action="/api/echo">
          <label>Name:</label>
          <br />
          <input type="text" name="name" required />
          <br /><br />
          <label>Issue:</label>
          <br />
          <textarea name="issue" rows="4" cols="40" required />
          <br /><br />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    );
  }