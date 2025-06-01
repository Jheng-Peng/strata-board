import { useEffect, useState } from "react";

export default function ResidentsPage() {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetch("https://strata-backend-php.onrender.com/residents.php")
      .then((res) => res.json())
      .then((data) => setResidents(data))
      .catch((err) => console.error("Error fetching residents:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Strata Residents</h1>
      {residents.length === 0 ? (
        <p>Loading or no data available.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Number</th>
              <th>Share</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((r, index) => (
              <tr key={index}>
                <td>{r.name.trim()}</td>
                <td>{r.unit_number.trim()}</td>
                <td>{r.share}</td>
                <td>{r.email.trim()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}