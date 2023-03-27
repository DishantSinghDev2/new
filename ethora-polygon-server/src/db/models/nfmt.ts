import { Schema, model, Document } from "mongoose";

export interface INfmt {
  contractAddress: string;
  urls: string[];
  costs: string[];
  splitPercents: string[],
  maxSupplies: string[]
}

export interface INfmtDocument extends INfmt, Document {
}

const nfmtSchema = new Schema<INfmtDocument>(
  {
    contractAddress: {
      type: String,
      required: true,
      unique: true
    },
    urls: [String],
    costs: [String],
    splitPercents: [String],
    maxSupplies: [String]
  },
  {
    timestamps: true,
  }
)

export default model<INfmtDocument>("Nfmt", nfmtSchema);
