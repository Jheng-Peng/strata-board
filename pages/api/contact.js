export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = await new Promise(resolve => {
      let data = '';
      req.on('data', chunk => data += chunk);
      req.on('end', () => resolve(data));
    });

    console.log("Received contact form data:", body);

    res.writeHead(302, { Location: '/thank-you' });
    res.end();
  } else {
    res.status(405).end();
  }
}