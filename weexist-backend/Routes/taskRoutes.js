import express from 'express';
import Task from '../models/taskModel.js'; // adjust if your path is different


const router = express.Router();

// 🔹 STEP 1: Get all open (unassigned) tasks
router.get('/open', async (req, res) => {
  try {
    const openTasks = await Task.find({ status: 'open' });
    res.json(openTasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching open tasks' });
  }
});

// 🔹 STEP 2: Assign a task to a volunteer
router.patch('/assign/:id', async (req, res) => {
  const { volunteerName } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        volunteerName,
        status: 'assigned'
      },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while assigning task' });
  }
});

// Get tasks assigned to a volunteer
router.get('/assigned/:volunteerName', async (req, res) => {
  try {
    const tasks = await Task.find({
      volunteerName: req.params.volunteerName,
      status: 'assigned'
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching assigned tasks' });
  }
});

// Mark a task as completed
router.patch('/mark-complete/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: 'completed' },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error marking task complete' });
  }
});

// Get completed tasks of a volunteer
router.get('/completed/:volunteerName', async (req, res) => {
  try {
    const completedTasks = await Task.find({
      volunteerName: req.params.volunteerName,
      status: 'completed'
    });
    res.json(completedTasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching completed tasks' });
  }
});


export default router;
