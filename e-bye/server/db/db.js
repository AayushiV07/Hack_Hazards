// const mongoose = require("mongoose");
import mongoose from "mongoose"
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedDevices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }]
  });
  
const orgSchema = new mongoose.Schema({
    username: String,
    password: String,
    soldDevices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }]
  });
  
const deviceSchema = new mongoose.Schema({
    title: String,
    type: String,
    model: String,
    age: Number,
    imageLink: String,
    ownerId: String,
  });
  const soldDeviceSchema = new mongoose.Schema({
    title: String,
    type: String,
    imageLink: String,
    ownerId: String,
  });
  //TODO: ADD DEVICES TO BE SOLD, WILL HAVE COST TOO
export const User = mongoose.model('User', userSchema);
export const Admin = mongoose.model('Admin', orgSchema);
export const Device = mongoose.model('Device', deviceSchema);
export const SoldDevice = mongoose.model('soldDevice', soldDeviceSchema);
