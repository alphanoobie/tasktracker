import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  dateCreated: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ["low", "moderate", "high"],
  },
});

const Task = models.Task || model("Task", TaskSchema);

export default Task;
