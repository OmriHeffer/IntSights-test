const mongoose = require('mongoose');

const WebDataSchema = new mongoose.Schema({
  Types: {
    AttackIndication: Number,
    DataLeakage: Number,
    Phishing: Number,
    BrandSecurity: Number,
    ExploitableData: Number,
    vip: Number
  },
  Severities: {
    High: Number,
    Medium: Number,
    Low: Number
  },
  Sources: Object
});

mongoose.model('WebData', WebDataSchema, 'WebData');
