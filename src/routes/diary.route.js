import e from "express";
import {
  createDiary,
  deleteDiary,
  getDiaries,
  getDiary,
  updateDiary,
} from "../controllers/diary.controller.js";

export const router = e.Router();

router.get("/:id", getDiary);

router.get("/", getDiaries);

router.put("/:id", updateDiary);

router.post("/", createDiary);

router.delete("/:id", deleteDiary);
