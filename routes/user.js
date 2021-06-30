const asyncHandler = require("express-async-handler");
const userRouter = require("express").Router();

const {
  handleUsersGetAll,
  handleUserGetOne,
  handleUserPost,
  handleUserPutOne,
  handleUserDeleteOne,
  handleAllAnimators,
} = require("../controllers/user");

userRouter.get("/", asyncHandler(handleUsersGetAll));
userRouter.get("/animators", asyncHandler(handleAllAnimators));
userRouter.get("/:id", asyncHandler(handleUserGetOne));
userRouter.post("/", asyncHandler(handleUserPost));
userRouter.put("/:id", asyncHandler(handleUserPutOne));
userRouter.delete("/:id", asyncHandler(handleUserDeleteOne));

module.exports = userRouter;
