import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isPublic: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Story', StorySchema);
