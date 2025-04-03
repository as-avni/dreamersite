import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log(req.body);  // Debugging
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}