import connectMongo from "@/util/connectMongo";
import User from "@/models/userModel";
import data from "@/data/stats.json";

export default async function addUser(req, res) {
  try {
    await connectMongo(); // connecting mongo

    const existingUsers = await User.find({});

    if (existingUsers.length === 0) {
      // await User.create(data);
      await User.deleteMany({});
      await User.insertMany(data);
      // we can also use create, but this will reduce the total round of trips, and is much efficient
      console.log("Data loaded successfully"); // use this to see whether the data loaded successfully
    }

    const users = await User.find({});

    // console.log(users);   // list of users

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
