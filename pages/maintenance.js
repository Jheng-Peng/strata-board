import { useState } from "react";

export default function MaintenanceForm() {
  const [formData, setFormData] = useState({ name: "", unit: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://strata-backend-php.onrender.com/report_issue.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) setSubmitted(true);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Report Maintenance Issue</h1>
      {submitted ? (
        <p>Thank you! Your issue has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required onChange={handleChange} /><br /><br />
          <input name="unit" placeholder="Unit Number" required onChange={handleChange} /><br /><br />
          <textarea name="message" placeholder="Describe the issue" required onChange={handleChange} /><br /><br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}