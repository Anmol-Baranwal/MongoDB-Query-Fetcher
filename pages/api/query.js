import User from "@/models/userModel";

const fetchData1 = async () => {
  const BASE_URL = "api/query/";
  const response = await fetch(`https://${BASE_URL}/${url}`);

  return await response.json();
};

// Routes for fetching the required data
export default async function bmwMercedesIncome(req, res) {
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
}

export async function malePhonePrice(req, res) {
  try {
    let query = {
      $and: [{ gender: "Male" }, { phone_price: { $gt: "10000" } }],
    };

    const results = await User.find(query);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching data in" + malePhonePrice.name);
  }
}

export async function lastNameCharacterLength(req, res) {
  try {
    let query = {
      lname: { $regex: "^M" },
      quote: { $gt: 15 },
      email: { $regex: ".*M.*$" },
    };

    const results = await User.find(query);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Error while fetching data in" + lastNameCharacterLength.name);
  }
}

export async function bmwMercedesAudiEmailNoDigit(req, res) {
  try {
    let query = {
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: { $regex: "\\d" } },
    };

    const results = await User.find(query);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Error while fetching data in" + bmwMercedesAudiEmailNoDigit.name);
  }
}

export async function top10Cities(req, res) {
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
}
