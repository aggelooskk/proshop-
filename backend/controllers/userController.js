import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/UserModel.js";

// @desc auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc register user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutrUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc get user profile
// @route GET /api/users/
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc Get users
// @route GET /api/users
// @access Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutrUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
