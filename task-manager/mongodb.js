// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const  ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectID, ObjectId } = require("mongodb");
const connectionURL =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1";

const databaseName = "task-manager";

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("users")
      .updateMany({ name: "hasan" }, { $set: { name: "samer" } })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // update operators
    db.collection("users")
      .updateOne(
        {
          _id: new ObjectId("639de755c48d8eb8b620f29d"),
        },
        {
          $set: {
            name: "Mike",
          },
          $inc: {
            age: 1,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // db.collection("users")
    //   .find({ name: "samer" })
    //   .toArray((error, result) => {
    //     if (error) {
    //       console.log("unable to fetch data");
    //     }

    //     console.log(result);
    //   });

    // db.collection("users")
    //   .find({ name: "samer" })
    //   .count((error, count) => {
    //     if (error) {
    //       console.log("unable to fetch data");
    //     }

    //     console.log(count);
    //   });

    // db.collection("users").findOne(
    //   { _id: new ObjectId("639a685ebcf9c31b370eb1d0") },
    //   (error, result) => {
    //     if (error) {
    //       console.log("unable to fetch data");
    //     }

    //     console.log(result);
    //   }
    // );

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "samer",
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       console.log("unable to insert user");
    //     }

    //     console.log("result here ", result);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     { name: "samer", age: 27 },
    //     { name: "Fatooh", age: 30 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("Error Occured");
    //     }
    //     console.log("result is here", result);
    //   }
    // );

    // console.log("connected correctly");
  }
);

// var MongoClient = require("mongodb").MongoClient,
//   Server = require("mongodb").Server;

// var mongoClient = new MongoClient(
//   "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"
// );
// mongoClient.open(function (error, mongoClient) {
//   if (error) {
//     return console.log("unable to connect to database");
//   }

//   var db1 = mongoClient.db("task-manager");
//   console.log("connected correctly");

//   mongoClient.close();
// });
