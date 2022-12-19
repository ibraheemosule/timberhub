//import data from "../../../data.json" assert { type: "json" };
import { NextApiRequest, NextApiResponse } from "next";
import { RowItemType } from "../../ts-types/dataTypes";
import { ProductModel } from "../../lib/model";
import { newProductObject } from "../../utils";

interface ExtendNextApiRequest extends NextApiRequest {
  body: RowItemType;
}

const handler = async (req: ExtendNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await ProductModel.find({}).lean().exec();
        console.log(data);
        return res.status(200).json([]);
      } catch (e) {
        return res.status(500).json("Internal Server Error");
      }

    case "POST":
      try {
        const { body } = req;

        const isBodyValid =
          JSON.stringify(Object.keys(newProductObject)) ===
          JSON.stringify(Object.keys(body));

        if (!isBodyValid) {
          return res.status(401).json("Invalid body syntax");
        }
        const data = await ProductModel.create(body);

        return res.status(200).json({ data });
      } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server Error");
      }
  }
  // if (req.method === "GET") {
  //   return res.status(200).json({
  //     data,
  //   });
  // }

  // if (req.method === "POST") {
  //   data.row.unshift(req.body as RowItemType);
  //   return res.status(201).json({ data });
  // }

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return res.status(500).json("internal server error");
};

export default handler;
