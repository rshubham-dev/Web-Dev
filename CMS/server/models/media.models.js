import mongoose from'mongoose';

const mediaSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    fileType: { type: String },
    fileSize: { type: Number },
    url: { type: String, required: true }, // File storage URL
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    uploadedAt: { type: Date, default: Date.now },
  });
  
  const Media = mongoose.model('Media', mediaSchema);
  module.exports = Media
  