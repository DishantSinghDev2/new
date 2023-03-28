import { Schema, model, Document } from "mongoose";

export interface INfmt {
  name: string;
  symbol: string;
  contractAddress: string;
  urls: string[];
  costs: string[];
  images: string[];
  splitPercents: string[],
  maxSupplies: string[]
}

export interface INfmtDocument extends INfmt, Document {
}

const nfmtSchema = new Schema<INfmtDocument>(
  {
    name: String,
    symbol: String,
    contractAddress: {
      type: String,
      required: true,
      unique: true
    },
    urls: [String],
    costs: [String],
    splitPercents: [String],
    maxSupplies: [String],
    images: [String]
  },
  {
    timestamps: true,
  }
)

export default model<INfmtDocument>("Nfmt", nfmtSchema);
