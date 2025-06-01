import { useEffect, useState } from "react";

export default function MaintenanceList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("https://strata-backend-php.onrender.com/maintenance_list.php")
      .then((res) => res.json())
      .then((data) => setIssues(data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Maintenance Requests</h1>
      {issues.length === 0 ? (
        <p>No issues submitted yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit</th>
              <th>Message</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, i) => (
              <tr key={i}>
                <td>{issue.name}</td>
                <td>{issue.unit_number}</td>
                <td>{issue.message}</td>
                <td>{new Date(issue.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}