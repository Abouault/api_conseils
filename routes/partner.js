const asyncHandler = require("express-async-handler");
const partnerRouter = require("express").Router();

const {
  handlePartnersGetAll,
  handlePartnerGetOne,
  handlePartnerPost,
  handlePartnerPutOne,
  handlePartnerDeleteOne,
} = require("../controllers/partner");

partnerRouter.get("/", asyncHandler(handlePartnersGetAll));
partnerRouter.get("/:id", asyncHandler(handlePartnerGetOne));
partnerRouter.post("/", asyncHandler(handlePartnerPost));
partnerRouter.put("/:id", asyncHandler(handlePartnerPutOne));
partnerRouter.delete("/:id", asyncHandler(handlePartnerDeleteOne));

module.exports = partnerRouter;
