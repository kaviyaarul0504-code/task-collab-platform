const express = require("express");
const router = express.Router();
const List = require("../models/List");

// CREATE LIST
router.post("/", async (req, res) => {
  try {
    const list = new List(req.body);
    await list.save();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET LISTS BY BOARD
router.get("/:boardId", async (req, res) => {
  const lists = await List.find({ boardId: req.params.boardId });
  res.json(lists);
});

// DELETE LIST
router.delete("/:id", async (req, res) => {
  await List.findByIdAndDelete(req.params.id);
  res.json({ message: "List deleted" });
});

module.exports = router;
