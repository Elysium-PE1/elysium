import mongoose, { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  numberofTables: {
    type: String,
    required: true,
  },
});

const Bookings = models.bookings || model("bookings", BookingSchema);
export default Bookings;
