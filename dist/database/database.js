import mongoose from "mongoose";
export const connectDb = (url) => {
    mongoose
        .connect(url, { dbName: "6packprogrammer" })
        .then((c) => {
        console.log(`Connected with ${c.connection.name}`);
    })
        .catch((e) => console.log(e));
};
