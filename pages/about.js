import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link href="/about" className="menu-btn">About Us</Link>
        <Link href="/committee" className="menu-btn">Committee</Link>
        <Link href="/documents" className="menu-btn">Documents</Link>
        <Link href="/contact" className="menu-btn">Contact</Link>
      </nav>

      <main className="main">
        <h1>📖 About Our Strata</h1>
        <p>
          Our strata board is committed to building a well-managed, safe and welcoming apartment environment. 
          We work collaboratively with residents and owners to maintain the building and community standards.
        </p>
      </main>
    </div>
  );
}