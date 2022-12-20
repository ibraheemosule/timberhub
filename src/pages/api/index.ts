import { NextApiRequest, NextApiResponse } from "next";
import { RowItemType } from "../../ts-types/dataTypes";
import { ProductModel } from "../../lib/model";
import { newProductObj } from "../../utils";
import dbConnect from "../../lib/connectToDB";

interface ExtendNextApiRequest extends NextApiRequest {
  body: RowItemType;
}

const handler = async (req: ExtendNextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const data = await ProductModel.find({}).exec();
        return res.status(200).json(data);
      } catch (e) {
        return res.status(500).json("Internal Server Error");
      }

    case "POST":
      try {
        const isBodyValid =
          JSON.stringify(Object.keys(newProductObj)) ===
          JSON.stringify(Object.keys(body));

        if (!isBodyValid) {
          return res.status(401).json("Invalid body syntax");
        }

        const data = await ProductModel.create(body);

        return res.status(200).json({ data });
      } catch (e) {
        return res.status(500).json("Internal Server Error");
      }

    case "PUT":
      try {
        const { id, ...rest } = body;
        const data = await ProductModel.findByIdAndUpdate({ _id: id }, rest, {
          new: true,
        });

        return res.status(200).json({ data });
      } catch (e) {
        return res.status(500).json("internal server error");
      }

    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      res.status(404).json(`No method path ${method} in the server`);
  }

  return res.status(500).json("internal server error");
};

export default handler;
