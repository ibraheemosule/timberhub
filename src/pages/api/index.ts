import { NextApiRequest, NextApiResponse } from "next";
import { ProductType } from "../../ts-types/dataTypes";
import { ProductModel } from "../../lib/model";
import { newProductObj } from "../../utils";
import dbConnect from "../../lib/connectToDB";

interface ExtendNextApiRequest extends NextApiRequest {
  body: ProductType;
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
        return res.status(400).json(e);
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
        return res.status(400).json(e);
      }

    case "PUT":
      try {
        const { id, ...rest } = body;
        const data = await ProductModel.findByIdAndUpdate({ _id: id }, rest, {
          new: true,
        });

        return res.status(200).json({ data });
      } catch (e) {
        return res.status(400).json(e);
      }

    case "DELETE":
      try {
        const { id } = body;
        const data = await ProductModel.findByIdAndRemove({ _id: id });

        return res.status(200).json({ data });
      } catch (e) {
        return res.status(400).json(e);
      }

    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return res.status(404).send(`No method path ${method} in the server`);
  }
};

export default handler;
