import axios from "axios";

interface FormData {
    name: string,
    numberOfPeople: number,
    phone: string,
    email: string,
    date: string,
}

export const API = {
  postBooking: async (formData: FormData) => {
    return await axios
      .post("/api/bookings", {
        name: formData.name,
        numberOfPeople: formData.numberOfPeople,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
      })
      .catch((err: any) => console.log(err));
  },

  deleteBookings: async () => {
    return await axios
      .delete("/api/bookings")
      .catch((err: any) => console.log(err));
  },

  putTable: async ({ noOfTables }: { noOfTables: number }) => {
    try {
      const res = await axios.put("/api/table", {
        tablesFilled: noOfTables,
      });
      return res;
    } catch (err: any) {
      console.log(err);
    }
  },

  getTable: async () => {
    return await axios.get("/api/table").catch((err: any) => console.log(err));
  },
};
