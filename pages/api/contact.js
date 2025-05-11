export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body || {};

    console.log("Received contact form data:", { name, email, message });

    res.writeHead(302, { Location: '/thank-you' });
    res.end();
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}