const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) return res.json({ msg: "Empty Field Detected" });

    const tempUser = await userModel.findOne({ email });
    if (!tempUser) return res.json({ msg: "No User with such email detected" });

    const validPass = await bcrypt.compare(password, tempUser.password);
    if (!validPass) return res.json({ msg: "Wrong Password" });

    const token = generateToken(tempUser._id);

    console.log(tempUser);
    return res.json({
      msg: "Valid User",
      id: tempUser._id,
      fname: tempUser.fname,
      lname: tempUser.lname,
      password: tempUser.password,
      token: token,
    });
  } catch (e) {
    console.log("Error in login : " + e);
    res.json({ msg: "Error " + e });
  }
};

const handleRegister = async (req, res) => {
  const { firstname, lastname, email, password, address } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      address,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  handleLogin,
  handleRegister,
};
