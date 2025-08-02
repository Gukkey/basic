import Diary from "../models/diary.model.js";

export const getDiary = async (req, res) => {
  try {
    const { id } = req.params;
    const diary = await Diary.findById(id);
    if (!!diary) {
      res.status(200).json({
        message: "Diary has been fetched successfully",
        status: 200,
        Diary: diary,
      });
    } else {
      res.status(404).json({
        message: "There is no diary associated with this id",
        status: 404,
      });
    }
  } catch (err) {
    res.send(500).send({
      message: "Error fetching the diary",
      status: 500,
      stack_trace: err.message,
    });
  }
};

export const getDiaries = async (req, res) => {
  try {
    const diaries = await Diary.find({});
    res.status(200).json(diaries);
  } catch (err) {
    res.send(500).send({
      message: "Could not fetch diaries",
      status: 500,
      stack_trace: err.message,
    });
  }
};

export const updateDiary = async (req, res) => {
  try {
    const { id } = req.params;

    const diary = await Diary.findByIdAndUpdate(id, req.body);

    if (!diary) {
      return res.status(404).json({
        message: "There is no diary associated with this id",
        status: 404,
      });
    }

    const updatedDiary = await Diary.findById(id);

    res.status(200).json({
      message: "Diary has been updated successfully",
      status: 200,
      Diary: updatedDiary,
    });
  } catch (err) {
    res.send(500).send({
      message: "Error updating the diary",
      status: 500,
      stack_trace: err.message,
    });
  }
};

export const createDiary = async (req, res) => {
  try {
    const diary = await Diary.create(req.body);
    res.status(201).json({
      message: "Diary has been created",
      status: 201,
      Diary: diary,
    });
  } catch (err) {
    res.status(500).json({
      message: "Diary could not be created",
      status: 500,
      stack_trace: err.message,
    });
  }
};

export const deleteDiary = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("id", id);

    const diary = await Diary.findByIdAndDelete(id);

    if (!diary) {
      return res.status(404).json({
        message: "There is no diary associated with this id",
        status: 404,
      });
    } else {
      return res.status(204).json({
        message: "Diary has been deleted successfully",
        status: 204,
      });
    }
  } catch (err) {
    return res.send(500).json({
      message: "Error deleting the diary",
      status: 500,
      stack_trace: err.message,
    });
  }
};
