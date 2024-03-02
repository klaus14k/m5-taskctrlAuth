"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const ensure_middleware_1 = require("../middlewares/ensure.middleware");
const user_schema_1 = require("../schemas/user.schema");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.userRouter = (0, express_1.Router)();
const controller = new userController_1.UserController();
exports.userRouter.post("", ensure_middleware_1.ensure.validBody(user_schema_1.createUserSchema), ensure_middleware_1.ensure.isEmailUnique, controller.create);
exports.userRouter.post("/login", controller.login);
exports.userRouter.get("/profile", auth_middleware_1.auth.isAuthenticated, controller.autologin);
