export default function Committee() {
    const members = [
      { name: "Alice Wong", role: "Chairperson" },
      { name: "Ben Li", role: "Secretary" },
      { name: "Chloe Zhang", role: "Treasurer" }
    ];
  
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>👥 Committee Members</h1>
        <ul>
          {members.map((m, index) => (
            <li key={index}>{m.name} - {m.role}</li>
          ))}
        </ul>
      </div>
    );
  }