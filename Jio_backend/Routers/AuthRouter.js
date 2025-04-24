const express = require("express");

const { loginHandler, signupHandler, forgotPasswordHandler, resetPasswordHandler } = require("../controllers/AuthControllers");
const AuthRouter=express.Router();

AuthRouter.post("/login", loginHandler);
AuthRouter.post("/signup", signupHandler);
AuthRouter.patch("/forgetPassword", forgotPasswordHandler);
AuthRouter.patch("/resetPassword", resetPasswordHandler);

module.exports = AuthRouter;
