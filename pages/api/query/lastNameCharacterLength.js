import User from "@/models/userModel";

const lastNameCharacterLength = async (req, res) => {
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
};

export default lastNameCharacterLength;
