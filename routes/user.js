const userRouter = require("express").Router();
const asyncHandler = require("express-async-handler");
const handleImageUpload = require("../middlewares/handleImageUpload");

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
userRouter.post("/", handleImageUpload, asyncHandler(handleUserPost));
userRouter.put("/:id", asyncHandler(handleUserPutOne));
userRouter.delete("/:id", asyncHandler(handleUserDeleteOne));

module.exports = userRouter;
