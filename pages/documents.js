import Link from 'next/link';

export default function Documents() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link href="/about" className="menu-btn">About Us</Link>
        <Link href="/committee" className="menu-btn">Committee</Link>
        <Link href="/documents" className="menu-btn">Documents</Link>
        <Link href="/contact" className="menu-btn">Contact</Link>
      </nav>

      <main className="main">
        <h1>📎 Strata Documents</h1>
        <ul>
          <li>
          <a href="/annual_notice.pdf" target="_blank" className="file-link">📄 Annual Notice (PDF)</a>
          </li>
        </ul>
      </main>
    </div>
  );
}