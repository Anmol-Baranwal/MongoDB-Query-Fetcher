import User from "@/models/userModel";

const AudiEmailNoDigit = async (req, res) => {
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
      .send("Error while fetching data in" + AudiEmailNoDigit.name);
  }
};

export default AudiEmailNoDigit;
