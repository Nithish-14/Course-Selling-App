// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Admin } from "db";

import { dbConnect } from "@/lib/dbConnect";

import jwt from 'jsonwebtoken'

const SECRET = "SECRET"


type Data = {
  token?: string;
  message?: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const { email, password } = req.body;

    console.log("handler called", email, password);

    await dbConnect();

    const admin = await Admin.findOne({ email });

   
      if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } else {
        const obj = { username: email, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();

        const token = jwt.sign({ username: email, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
      }
  
}

