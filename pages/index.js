import Link from 'next/link';


export default function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link href="/about" className="menu-btn">About Us</Link>
        <Link href="/committee" className="menu-btn">Committee</Link>
        <Link href="/documents" className="menu-btn">Documents</Link>
        <Link href="/contact" className="menu-btn">Contact</Link>
        <Link href="/residents" className="menu-btn">Residents</Link>
        <Link href="/maintenance" className="menu-btn">Report Issue</Link>
        <Link href="/maintenance-list" className="menu-btn">View Issues</Link>
      </nav>

      <main className="main">
        <h1>🏢 Welcome to Strata Board 🎉</h1>
        <p>This is the main portal for our apartment community.</p>
      </main>
    </div>
  );
}