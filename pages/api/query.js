import User from "@/models/userModel";

const fetchData = async (url, results) => {
  const data = await fetchQuery(url, results);
  return data;
};

// Routes for fetching the required data
const fetchQuery = async (url, results) => {
  try {
    const res = await fetch(`api/query/${url}`);
    const data = await res.json();
    // res.status(200).json(results);
    return { data, results };
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching data in" + url);
  }
};

export const queries = {
  bmwMercedesIncome: async () => {
    let query = {
      $and: [
        { car: { $in: ["BMW", "Mercedes-Benz"] } },
        { income: { $lt: "5" } },
      ],
    };
    const results = await User.find(query);
    const url = "bmwMercedesIncome";

    return fetchData(url, results);
  },

  malePhonePrice: async () => {
    let query = {
      $and: [{ gender: "Male" }, { phone_price: { $gt: "10000" } }],
    };
    const results = await User.find(query);
    const url = "malePhonePrice";

    return fetchData(url, results);
  },

  lastNameCharacterLength: async () => {
    let query = {
      lname: { $regex: "^M" },
      quote: { $gt: 15 },
      email: { $regex: ".*M.*$" },
    };
    const results = await User.find(query);
    const url = "lastNameCharacterLength";

    return fetchData(url, results);
  },

  bmwMercedesAudiEmailNoDigit: async () => {
    let query = {
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: { $regex: "\\d" } },
    };
    const results = await User.find(query);
    const url = "bmwMercedesAudiEmailNoDigit";

    return fetchData(url, results);
  },

  top10Cities: async () => {
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
    const url = "top10Cities";

    return fetchData(url, results);
  },
};

export default fetchQuery;
