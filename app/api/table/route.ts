import clientPromise from "@/utils/newdb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { tables } = await req.json();
    const client = await clientPromise;
    const db = client.db("elysium");

    if (tables > 8) {
      return new Response("Oops, Seems like you entered more than 8 tables.");
    }

    const tablesLeft = 8 - tables;

    const table = await db.collection("tables").insertOne({
      tablesLeft: tablesLeft,
    });

    if (!table) {
      return new Response("There was some error!");
    }

    return new Response(JSON.stringify(table), { status: 201 });
  } catch (error) {
    console.log(error);

    return new Response("Failed enter the entries, try again later!", {
      status: 500,
    });
  }
}

export async function PUT(req: Request) {
  try {
    const { tablesFilled } = await req.json();
    const client = await clientPromise;
    const db = client.db("elysium");

    if (tablesFilled > 8) {
      return new Response("Oops, Seems like you entered more than 8 tables.");
    }

    const tablesLeft = 8 - tablesFilled;

    const table = await db
      .collection("tables")
      .updateOne(
        { _id: new ObjectId("653a67735d68d1265fa2f7f8") },
        { $set: { tablesLeft: tablesLeft } },
        { upsert: true }
      );

    return new Response(JSON.stringify(table));
  } catch (error) {
    console.log(error);

    return new Response("Failed to enter the entries, try again later!", {
      status: 500,
    });
  }
}

export async function GET(_req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("elysium");

    const tablesLeft = await db.collection("tables").findOne({});

    return new Response(JSON.stringify(tablesLeft));
  } catch (error) {
    console.log(error);
    return new Response("There was an error");
  }
}
