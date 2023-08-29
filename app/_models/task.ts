import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
  {
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
    priority: {
      type: String,
      enum: ["low", "moderate", "high"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = models.Task || model("Task", TaskSchema);

export default Task;
