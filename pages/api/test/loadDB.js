import connectMongo from "@/util/connectMongo";
import User from "@/models/userModel";
import data from "@/data/stats.json";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addUser(req, res) {
  try {
    await connectMongo(); // connecting mongo

    // we can also use create, but this will reduce the total round of trips, and is much efficient
    await User.deleteMany({});
    await User.insertMany(data);

    // await User.create(data);

    // console.log("Data loaded successfully");  // use this to see whether the data loaded successfully
    const users = await User.find({});
    console.log(users);

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
