import User from "@/models/userModel";

const lastNameCharacterLength = async (req, res) => {
  try {
    const results = await User.aggregate([
      {
        $addFields: {
          last_name_regex: {
            $regexMatch: {
              input: "$email",
              regex: {
                $concat: [
                  ".*",
                  {
                    $toLower: "$last_name",
                  },
                  ".*@.*",
                ],
              },
              options: "i",
            },
          },
        },
      },
      {
        $match: {
          last_name: {
            $regex: "^M",
          },
          $expr: {
            $lt: [
              {
                $strLenCP: "$quote",
              },
              40,
            ],
          },
          last_name_regex: true,
        },
      },
      {
        $project: {
          last_name_regex: 0,
        },
      },
    ]);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Error while fetching data in" + lastNameCharacterLength.name);
  }
};

export default lastNameCharacterLength;
