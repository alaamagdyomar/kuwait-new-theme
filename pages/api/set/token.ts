// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'production', });
  const token = req.body.token;
  if (token && token.length > 1) {
    cookies.set('token', req.body.token);
    res.status(200).json({ is_auth: true, token });
  } else {
    res.status(200).json({ is_auth: false });
  }

}
