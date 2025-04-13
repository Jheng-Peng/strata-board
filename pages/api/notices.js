export default function handler(req, res) {
    const notices = [
      { id: 1, title: "Annual Meeting", date: "2025-05-01" },
      { id: 2, title: "Lift Maintenance", date: "2025-05-10" },
      { id: 3, title: "Fire Drill", date: "2025-06-05" }
    ];
    res.status(200).json({ notices });
  }