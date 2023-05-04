## Examples with Explanation

:information_source: You can test the queries online using tools such as [MongoDB Playground](https://mongoplayground.net/) or offline tool [MongoDB Compass](https://www.mongodb.com/products/compass). To get a sample JSON data, please visit [this link](https://github.com/Anmol-Baranwal/Internship-FullStack-Project/blob/main/data/stats.json).

<hr>

## Query1

Description: <br>

Users which have income lower than $5 USD and have a car of brand `BMW` or `Mercedes-Benz`.

Code:

> Check [here](https://github.com/Anmol-Baranwal/Internship-FullStack-Project/blob/main/pages/api/query/bmwMercedesIncome.js)

```php
db.collection.find({
  $and: [
    { car: { $in: ["BMW", "Mercedes-Benz"] } }, // Query for users who have cars of brand BMW or Mercedes-Benz
    { income: { $lt: "5" } }, // Query for users with income less than $5 USD
  ],
});
```

Explanation: <br>

The query uses the `$and` operator to combine two conditions. The first condition searches for documents that have a `car` field that matches either "BMW" or "Mercedes-Benz" using the `$in` operator. The second condition searches for documents that have an `income` field that is less than "5" using the `$lt` operator.

When the two conditions are combined using `$and`, the resulting query returns all documents that satisfy both conditions. In this case, the query will return documents that represent users who have an income lower than $5 USD and have a car of brand BMW or Mercedes-Benz.

<br><br>


## Query2

Description: <br>

`Male` Users which have phone price greater than `10,000`.

Code:

> Check [here](https://github.com/Anmol-Baranwal/Internship-FullStack-Project/blob/main/pages/api/query/malePhonePrice.js)

```php
db.collection.find({
  $and: [
    { gender: "Male" }, // Query for users with gender equal to "Male"
    { phone_price: { $gt: "10000" } }, // Query for users with phone_price greater than "10000"
  ],
});
```

Explanation: <br>

The query uses the `$and` operator to combine two conditions. The first condition searches for documents that have a `gender` field that matches "Male". The second condition searches for documents that have a `phone_price` field that is greater than "10000" using the `$gt` operator.

When the two conditions are combined using `$and`, the resulting query returns all documents that satisfy both conditions. In this case, the query will return documents that represent Male users with phone price greater than 10,000.

<br><br>


## Query3

Description: <br>

Users which have a car of brand `BMW`, `Mercedes-Benz` or `Audi` and whose email does not include any digit.


Code:

> Check [here](https://github.com/Anmol-Baranwal/Internship-FullStack-Project/blob/main/pages/api/query/AudiEmailNoDigit.js)

```php
db.collection.find({
  car: { $in: ["BMW", "Mercedes-Benz", "Audi"] }, // Query for users who have cars of brand BMW, Mercedes-Benz or Audi
  email: { $not: { $regex: "\\d" } }, // Query for users whose email does not contain digits
});
```

Explanation: <br>

The query has two conditions separated by a comma. The first condition searches for documents that have a `car` field that matches any of the car brands "BMW", "Mercedes-Benz", or "Audi" using the `$in` operator.

The second condition searches for documents that have an `email` field that does not contain any digits using the `$not` and `$regex` operators. The `$not` operator negates the effect of the expression that follows it, so `$not: { $regex: "\\d" }` matches documents whose `email` field does not contain any digits. The `$regex` operator matches documents where the value of the `email` field matches the specified regular expression, which in this case is `\d`. The backslashes in the regular expression are used to escape the special character `\d`, which is a shorthand for matching digits.


<br><br>


## Query4

Description: <br>

Users whose last name starts with `M` and has a quote character length greater than `15` and email includes his/her `last_name`

Code:

> Check [here](https://github.com/Anmol-Baranwal/Internship-FullStack-Project/blob/main/pages/api/query/lastNameCharacterLength.js)

```php
db.collection.aggregate([
  {
    $addFields: {
      last_name_regex: {
        $regexMatch: {
          input: "$email",
          regex: {
            $concat: [
              ".*",
              {
                $toLower: "$last_name"
              },
              ".*@.*"
            ]
          },
          options: "i"
        }
      }
    }
  },
  {
    $match: {
      last_name: {
        $regex: "^M"
      },
      $expr: {
        $gt: [
          {
            $strLenCP: "$quote"
          },
          15
        ]
      },
      last_name_regex: true
    }
  },
  {
    $project: {
      last_name_regex: 0
    }
  }
])
```

Explanation: <br>

This query is used to find users whose last name starts with `M`, whose quote character length is greater than `15`, and whose email includes their last name.

The query uses the aggregation pipeline, which allows for more complex querying using a series of operations or stages.

The first stage is `$addFields`, which adds a new field to the documents in the pipeline. In this case, it adds a field called `last_name_regex`, which uses the $regexMatch operator to match the email field with a regular expression that includes the user's last name. The `regex` expression is constructed using the `$concat` operator, which concatenates the following elements: `.*` (any characters zero or more times), the user's last name in lowercase, `.*`, and `@.*` (any characters followed by an `@` symbol and any characters zero or more times). The `options` parameter is set to `i` to make the match case-insensitive.

The second stage is `$match`, which filters the documents in the pipeline based on certain criteria. The first condition in this stage is that the `last_name` field starts with the letter `M`, which is specified using the `$regex` operator with the regular expression `^M`. The second condition is that the length of the `quote` field is greater than 15, which is specified using the `$gt` operator with the `$strLenCP` operator to get the length of the `quote` field in code points. The third condition is that the `last_name_regex` field is `true`, which means that the regular expression in the previous stage matched the email field.

The third stage is `$project`, which removes the `last_name_regex` field from the documents in the pipeline. This is done to clean up the output and remove unnecessary fields.


<br><br>


## Query5

Description: <br>

Show the data of `top 10` cities which have the highest number of users and their `average income`.


Code:

> Check [here](https://github.com/Anmol-Baranwal/Internship-FullStack-Project/blob/main/pages/api/query/top10Cities.js)

```php
db.collection.aggregate([
  {
    $group: {
      _id: "$city",
      count: { $sum: 1 },
      avg_income: { $avg: "$income" },
    },
  },
  {
    $sort: {
      count: -1,
      avg_income: -1,
    },
  },
  {
    $limit: 10,
  },
]);
```

Explanation: <br>

This MongoDB query is used to show the data of the top 10 cities which have the highest number of users and their average income. The aggregation pipeline has three stages:

1. `$group` stage: This stage groups the data by the `city` field and calculates the count of users and average income in each city. The `$sum` and `$avg` aggregation operators are used to calculate these values respectively. The results of this stage are stored in the `count` and `avg_income` fields.

2. `$sort` stage: This stage sorts the grouped data in descending order based on the `count` and `avg_income` fields. The `-1` value is used to sort the fields in descending order.

3. `$limit` stage: This stage limits the output to the top 10 cities with the highest count of users and average income.
