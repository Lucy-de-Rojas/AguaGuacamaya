// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { outcomeInterface } from '@/models/add-to-stock'




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<outcomeInterface>
) {

  let dataFromFront:outcomeInterface = req.body;




  console.log('🟥 data from front', dataFromFront)



}
