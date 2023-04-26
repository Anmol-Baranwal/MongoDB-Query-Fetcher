import User from "@/models/userModel";

const top10Cities = async (req, res) => {
  try {
    const results = await User.aggregate([
      {
        $group: {
          _id: "$city",
          users_count: { $sum: 1 },
          avg_income: { $avg: "$income" },
        },
      },
      { $sort: { users_count: -1 } },
      { $limit: 10 },
    ]);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching data in" + top10Cities.name);
  }
};

export default top10Cities;
