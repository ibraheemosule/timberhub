import mongoose, { Model } from "mongoose";
import { RowItemType } from "../ts-types/dataTypes";

const productSchema = new mongoose.Schema(
  {
    created: {
      type: String,
      required: true,
    },
    usage: {
      type: String,
      enum: [
        "Fuscebl",
        "nditeuismodqu",
        "mnonorn",
        "rePdjkkdfk",
        "sellusconsequ",
        "tduivit",
      ],
      required: true,
    },
    species: {
      type: String,
      enum: ["etemporf", "cilisisAene", "nultricesm"],
      required: true,
    },
    drying_method: {
      type: String,
      enum: ["dictumstliqu", "msitfgghgj", "metdolorins", "pighdheni"],
      required: true,
    },
    grade: {
      type: String,
      enum: [
        "culissceler",
        "isquevelidduiM",
        "urisquispos",
        "uereligul",
        "inlcinim",
        "culissceleri",
        "squeveliddui",
        "urisquispo",
        "suereligul",
      ],
      required: true,
    },
    treatment: {
      type: mongoose.Schema.Types.Mixed,
      enum: [
        "tultricesexegest",
        "sDuisid",
        "ntenon",
        "rcutempusfeugi",
        "tSednonestsit",
        "metloremsod",
        null,
      ],
      required: true,
    },
    dimensions: {
      type: [
        {
          thickness: {
            type: Number,
            required: true,
            validate: [
              (v: number) => Number(v) >= 0.1,
              "Thickness value should be greater than one",
            ],
          },
          width: {
            type: Number,
            required: true,
            validate: [
              (v: number) => Number(v) >= 0.1,
              "Width value should be greater than one",
            ],
          },
          length: {
            type: Number,
            required: true,
            validate: [
              (v: number) => Number(v) >= 0.1,
              "Length value should be greater than one",
            ],
          },
        },
      ],
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("id").get(function () {
  console.log(this, "here", this._id);
  return this._id.toString();
});

type modelType = mongoose.Document & RowItemType;

export const ProductModel =
  (mongoose.models.product as Model<modelType>) ||
  mongoose.model<RowItemType, Model<modelType>>("product", productSchema);
