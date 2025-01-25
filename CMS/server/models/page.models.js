import mongoose from'mongoose';

const pageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    layout: { type: Object }, // JSON structure representing the page layout
    content: { type: Object }, // Page content data
    theme: { type: mongoose.Schema.Types.ObjectId, ref: 'Theme' }, // Reference to the theme used
    metadata: {
      seoTitle: { type: String },
      seoDescription: { type: String },
      keywords: [{ type: String }],
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Page = mongoose.model('Page', pageSchema);
  module.exports = Page;
  