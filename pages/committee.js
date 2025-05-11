import Link from 'next/link';

export default function Committee() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link href="/about" className="menu-btn">About Us</Link>
        <Link href="/committee" className="menu-btn">Committee</Link>
        <Link href="/documents" className="menu-btn">Documents</Link>
        <Link href="/contact" className="menu-btn">Contact</Link>
      </nav>

      <main className="main">
        <h1>👥 Committee Members</h1>
        <ul>
          <li>Jane Smith – Chair</li>
          <li>John Lee – Treasurer</li>
          <li>Amy Zhao – Secretary</li>
          <li>Michael Chen – Member</li>
        </ul>
      </main>
    </div>
  );
}