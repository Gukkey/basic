import mongoose from "mongoose";

const DiarySchema = mongoose.Schema(
  {
    entry: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Diary = mongoose.model("diary", DiarySchema);

export default Diary;
