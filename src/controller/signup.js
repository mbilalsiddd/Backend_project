import user from "../models/user";


app.post("/signup"  , async (req , res) => {
    // const {fullname , designation , email , password} = req.body;
    const fullname = "John Doe";
    const designation = "Developer";
    const email = "test@example.com";  // Change this if already used
    const password = "password123";

try {
    const existingUser = await user.findOne({email})
    if(existingUser){
        return res.status(400).json({message: "Email already Exist"})
    }

    const newUser = new user({fullname , designation , email , password});
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
} catch (error) {
    res.status(500).json({ error: "Failed to register user!" });
   }
});


export default signup

