import mongoose from'mongoose';

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }], // Reference to all pages in the project
    theme: { type: mongoose.Schema.Types.ObjectId, ref: 'Theme' }, // Applied theme
    domain: { type: String }, // Custom domain
    database: { type: Object }, // User-provided database credentials
    createdAt: { type: Date, default: Date.now },
  });
  
  const Project = mongoose.model('Project', projectSchema);
  module.exports = Project;
  