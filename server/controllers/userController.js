import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Desc: Authenticate user
// Route: POST /api/users/login
// Access: PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const convertEmail = await email.toLowerCase(email);
  // Check for user by email
  const user = await User.findOne({ email: convertEmail });
  // Use await here to wait for the bcrypt.compare promise to resolve
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    // res.json({
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    //   role: user.role,
    // });
    res.json(user);
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// Desc: Register new user
// Route: POST /api/users
// Access: PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    phone,
    email,
    address,
    country,
    state,
    lga,
    ward,
    partyGroup,
    dob,
    nin,
    role,
    password,
    password2,
  } = req.body;
  const avatar = req.file ? req.file.filename : "";

  // Check for required fields and password match
  if (
    !name ||
    !phone ||
    !email ||
    !address ||
    !country ||
    !state ||
    !lga ||
    !ward ||
    !partyGroup ||
    !dob ||
    !nin ||
    !role ||
    !password ||
    !password2 ||
    password !== password2
  ) {
    res.status(400);
    throw new Error("Please enter all fields and ensure passwords match");
  }

  // Check if user with the same email already exists
  const convertEmail = await email.toLowerCase(email);

  const userExists = await User.findOne({ convertEmail });

  if (userExists) {
    res.status(400);
    throw new Error("User exists, please use another email");
  }

  // Create User
  const user = await User.create({
    name,
    phone,
    email: convertEmail,
    address,
    country,
    state,
    lga,
    ward,
    partyGroup,
    dob,
    nin,
    password,
    role,
    avatar,
  });

  if (user) {
    generateToken(res, user._id);

    const savedUser = await user.save();
    res.status(200).json(savedUser);

    console.log(savedUser);

    // res.status(200).json({
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    //   role: user.role,
    // });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// Desc: Get user profile
// Route: GET /api/users/me
// Access: PRIVATE
const logoutUser = (req, res) => {
  res.cookie("jwtAuth", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// Desc: Edit user profile
// Route: PUT /api/users/:id
// Access: PRIVATE
const editUser = asyncHandler(async (req, res) => {
  const form = req.body;
  try {
    // Find user by Id
    const user = await User.findByIdAndUpdate(req.user._id);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    // Update user details
    user.name = form.name || user.name;
    user.phone = form.phone || user.phone;
    user.email = form.email || user.email;
    user.address = form.address || user.address;
    user.country = form.country || user.country;
    user.state = form.state || user.state;
    user.lga = form.lga || user.lga;
    user.ward = form.ward || user.ward;
    user.partyGroup = form.partyGroup || user.partyGroup;
    user.dob = form.dob || user.dob;
    user.nin = form.nin || user.nin;

    if (form.password) {
      user.password = form.password;
    }
    // Save changes
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);

    // res.status(200).json({
    //   _id: updatedUser._id,
    //   name: updatedUser.name,
    //   email: updatedUser.email,
    //   role: updatedUser.role,
    // });
  } catch (error) {
    console.error("Error editing user profile", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Desc: Get all users
// Route: POST /api/users/all
// Access: PRIVATE

const getUsers = asyncHandler(async (req, res) => {
  try {
    const { search } = req.query;
    const matchStage = {};
    if (search) {
      const searchRegex = new RegExp(search, "i");
      matchStage.$or = [
        { ward: searchRegex },
        { lga: searchRegex },
        { state: searchRegex },
      ];
    }

    const users = await User.aggregate([
      { $match: matchStage },
      {
        $project: {
          name: 1,
          ward: 1,
          lga: 1,
          country: 1,
          state: 1,
          address: 1,
          partyGroup: 1,
          phone: 1,
          email: 1,
          dob: 1,
          nin: 1,
          password: 1,
          avatar: {
            $concat: ["http://localhost:1000/assets/", "$avatar"],
          },
          Paymentstatus: 1,
        },
      },
    ]);
    if (users.length) {
      res.status(200).json(users);
    } else {
      return res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Desc: Get user profile
// Route: GET /api/users/me
// Access: PRIVATE

const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });

    if (user) {
      res.status(200).json(user);
      // res.status(200).json({
      //   _id: user._id,
      //   name: user.name,
      //   email: user.email,
      //   role: user.role,
      // });
    } else {
      // Send a 404 response if user is not found
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Handle any errors that occur during the database operation
    console.error(error);
    // res.status(500).json({ message: error.message }) &&
    res.status(404).json(`User with ID : ${req.params.id} not found`);
  }
});

// Desc: Delete user
// Route: DELETE /api/user/:id
// Access: PRIVATE
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user.id);

    if (!user) {
      res.status(401);
      throw new Error("User not authorized");
    }
    // const response = res
    //   .status(200)
    //   .json({ message: `User with ID ${req.params.id} has been removed` });

    res.cookie("jwtAuth", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({
      message: `User with ID ${req.user._id} has been removed and Logged out successfully`,
    });
  } catch (error) {
    res.status(error.message);
  }
});

export {
  registerUser,
  editUser,
  getUsers,
  loginUser,
  logoutUser,
  deleteUser,
  getUserProfile,
};
