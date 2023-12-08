import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Document =
  mongoose.models.Document || mongoose.model("Document", documentSchema);

export default Document;
