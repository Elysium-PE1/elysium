import clientPromise from "@/utils/newdb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { name, numberOfPeople, phoneNumber, email, date } = await req.json();
    const client = await clientPromise;
    const db = client.db("elysium");

    const tables = Math.floor(numberOfPeople / 8) + 1;

    const tablesDB = await db.collection("tables").findOne({});

    const tablesLeft = tablesDB!.tablesLeft;

    if (tablesLeft < tables) {
      return new Response(
        "Sorry, we dont have enough tables to accomodate you at the moment!"
      );
    }

    const booking = await db.collection("bookings").insertOne({
      name: name,
      numberOfPeople: numberOfPeople,
      phone: phoneNumber,
      email: email,
      date: date,
      numberOfTables: tables,
    });

    if (!booking) {
      return new Response("There was some error!");
    }

    const tablesUpdate = await db
      .collection("tables")
      .updateOne(
        { _id: new ObjectId("653a67735d68d1265fa2f7f8") },
        { $set: { tablesLeft: tablesLeft - 2 } },
        { upsert: true }
      );

    if (!tablesUpdate) {
      return new Response("Nope!");
    }

    return new Response(JSON.stringify(booking), { status: 201 });
  } catch (error) {
    console.log(error);

    return new Response("Failed to do the bookings, try again later!", {
      status: 500,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("elysium");

    const data = await db.collection("bookings").deleteMany({});

    if (!data) {
      return new Response("Error occured");
    }

    const tableData = await db
      .collection("tables")
      .updateOne(
        { _id: new ObjectId("653a67735d68d1265fa2f7f8") },
        { $set: { tablesLeft: 8 } },
        { upsert: true }
      );

    if (!tableData) {
      return new Response("error occured");
    }

    return new Response(JSON.stringify(tableData));
  } catch (error) {
    console.log(error);
    return new Response("There was some error!", { status: 500 });
  }
}
