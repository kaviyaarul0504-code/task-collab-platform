const express = require("express");
const router = express.Router();
const Board = require("../models/Board");

// CREATE BOARD
router.post("/", async (req, res) => {
  try {
    const board = new Board(req.body);
    await board.save();
    res.json(board);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL BOARDS
router.get("/", async (req, res) => {
  const boards = await Board.find();
  res.json(boards);
});

// DELETE BOARD
router.delete("/:id", async (req, res) => {
  await Board.findByIdAndDelete(req.params.id);
  res.json({ message: "Board deleted" });
});

module.exports = router;
