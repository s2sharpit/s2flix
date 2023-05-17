"use server";

import Contact from "@/models/contact";
import dbConnect from "@/utils/dbConnect";

interface data {
    username: string;
    email: string;
    phone: number;
    message: string;
}

const submitContact = async (data: data) => {
  try {
    await dbConnect();
    await Contact.create(data);
    return { status: 200, message: "Message sent successfully!" };
  } catch (error) {
    return { status: 500, message: "Server error, please try again!" };
  }
};

export default submitContact;
