import mongoose from'mongoose';

const backupSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    backupFileUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

  const Backup = mongoose.model('Backup', backupSchema);
  module.exports = Backup
  