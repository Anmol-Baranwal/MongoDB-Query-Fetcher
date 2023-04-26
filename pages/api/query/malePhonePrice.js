import User from "@/models/userModel";

const malePhonePrice = async (req, res) => {
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
};

export default malePhonePrice;
