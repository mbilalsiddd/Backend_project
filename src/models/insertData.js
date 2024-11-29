import mongoose from "mongoose";

// Schema Define Karo
const testSchema = new mongoose.Schema({
    name: String,
    age: String,
    gmail: String,
    password: String,
});

// Model Banaye
const TestModel = mongoose.model("Test", testSchema);

// Data Insert Function
const insertData = async () => {
    try {
        const newData = [
        {
            name: "Muhammad Bilal siddiqui",
            age: "22",
            gmail: "mbilal@gmail.com",
            password: "bilal123456"

        },
    ];

      
        const savedData = await TestModel.insertMany(newData);
        console.log("Data Inserted Successfully:", savedData);
    }   catch (err) {
        console.error("Error inserting data:", err);
    }
};

export default insertData;


// import mongoose from "mongoose";

// // Schema Define Karo
// const testSchema = new mongoose.Schema({
//     name: String,
//     age: String,
//     gmail: String,
//     password: String,
// });

// // Model Banaye
// const TestModel = mongoose.model("Test", testSchema);

// // Data Insert Function
// const insertData = async () => {
//     try {
//         // Multiple documents ko insertMany ke andar directly array pass karein
//         const newData = [
//             {
//                 name: "Muhammad Bilal Siddiqui",
//                 age: "22",
//                 gmail: "mbilalsidd@gmail.com",
//                 password: "bilal123456",
//             },
//             {
//                 name: "Sarfaraz",
//                 age: "30",
//                 gmail: "sarafraz@gmail.com",
//                 password: "sarafaraz123456",
//             },
//         ];

//         const savedData = await TestModel.insertMany(newData);
//         console.log("Data Inserted Successfully:", savedData);
//     } catch (err) {
//         console.error("Error inserting data:", err);
//     }
// };

// export default insertData;


