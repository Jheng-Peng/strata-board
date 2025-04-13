import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🏢 Welcome to Strata Board🎉</h1>
      <p>This is the main portal for our apartment community.</p>
      <ul>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/committee">Committee Members</Link></li>
        <li><Link href="/documents">Documents</Link></li>
        <li><Link href="/contact">Contact & Forms</Link></li>
      </ul>
    </div>
  );
}