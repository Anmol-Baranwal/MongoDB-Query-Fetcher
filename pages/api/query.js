import User from "@/models/userModel";

const fetchData = async (url, results) => {
  const data = await fetchQuery(url, results);
  return data;
};

// Routes for fetching the required data
export async function fetchQuery(req, res, results, url) {
  try {
    const data = fetchData(url);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching data in" + url);
  }
}

export const bmwMercedesIncome = async () => {
  // we can also use: { $or: [ { car: "BMW", income: {$lt: "$5.00"} }, { car: "Mercedes-Benz", income: {$lt: "$5.00"} } ] }
  let query = {
    $and: [
      { car: { $in: ["BMW", "Mercedes-Benz"] } },
      { income: { $lt: "5" } },
    ],
  };
  const results = await User.find(query);
  const url = "bmwMercedesIncome";

  return fetchQuery(results, url);
};

export const malePhonePrice = async () => {
  let query = {
    $and: [{ gender: "Male" }, { phone_price: { $gt: "10000" } }],
  };
  const results = await User.find(query);
  const url = "malePhonePrice";

  return fetchQuery(results, url);
};

export const lastNameCharacterLength = async () => {
  let query = {
    lname: { $regex: "^M" },
    quote: { $gt: 15 },
    email: { $regex: ".*M.*$" },
  };
  const results = await User.find(query);
  const url = "malePhonePrice";

  return fetchQuery(results, url);
};

export const bmwMercedesAudiEmailNoDigit = async () => {
  let query = {
    car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
    email: { $not: { $regex: "\\d" } },
  };
  const results = await User.find(query);
  const url = "malePhonePrice";

  return fetchQuery(results, url);
};

export const top10Cities = async () => {
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
  const url = "malePhonePrice";

  return fetchQuery(results, url);
};
