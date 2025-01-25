import mongoose from'mongoose';

const apiIntegrationSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    credentials: { type: Object, required: true }, // Store API keys/tokens securely
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
  });
  
  const APIIntegration = mongoose.model('APIIntegration', apiIntegrationSchema);
  module.exports = APIIntegration;
  