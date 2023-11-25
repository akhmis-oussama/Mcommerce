const express = require('express')
const { logout, getMyPosts, getMySavedPosts, updateProfile, followUser, unfollowUser, getUserDetails, suggestionUser, searchUser, addStory, getStory } = require('../../controllers/userController')
const userRouter = express.Router()
const requireLogin = require('../../middleware/requireLogin')

userRouter.get('/logout',requireLogin,logout)


userRouter.get('/user/:id',requireLogin,getUserDetails)


module.exports = userRouter