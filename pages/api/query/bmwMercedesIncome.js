import User from "@/models/userModel";

const bmwMercedesIncome = async (req, res) => {
  try {
    let query = {
      $and: [
        { car: { $in: ["BMW", "Mercedes-Benz"] } },
        { income: { $lt: "5" } },
      ],
    };
    // we can also use: { $or: [ { car: "BMW", income: {$lt: "$5.00"} }, { car: "Mercedes-Benz", income: {$lt: "$5.00"} } ] }
    const results = await User.find(query);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Error while fetching data in" + bmwMercedesIncome.name);
  }
};

export default bmwMercedesIncome;
