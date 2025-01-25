import mongoose from'mongoose';

const themeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  author: { type: String },
  components: {
    header: { type: String },
    footer: { type: String },
    sections: [{ type: String }], // Array of section component references
  },
  styles: { type: Object }, // CSS or SCSS as JSON
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

const Theme = mongoose.model('Theme', themeSchema); 
module.exports = Theme

