import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link href="/about" className="menu-btn">About Us</Link>
        <Link href="/committee" className="menu-btn">Committee</Link>
        <Link href="/documents" className="menu-btn">Documents</Link>
        <Link href="/contact" className="menu-btn">Contact</Link>
      </nav>

      <main className="main">
        <h1>📬 Contact Us</h1>
        <form method="post" action="/api/contact">
          <input type="text" name="name" placeholder="Your Name" required /><br />
          <input type="email" name="email" placeholder="Your Email" required /><br />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea><br />
          <button type="submit" className="menu-btn">Submit</button>
        </form>
      </main>
    </div>
  );
}