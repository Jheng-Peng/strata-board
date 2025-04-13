export default async function handler(req, res) {
    if (req.method === 'POST') {
      let body = '';
      for await (const chunk of req) {
        body += chunk;
      }
  
      res.status(200).json({
        message: "Received your data",
        data: body
      });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }