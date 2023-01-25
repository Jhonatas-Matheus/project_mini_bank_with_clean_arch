import Router from "express";
import { CreateTransferController } from "../controller/create.transfer.controller";
import { ListAllTransfersOfSpecificAccountController } from "../controller/list.all.transfers.of.specific.account.controller";

export const tranferRouter = Router();

tranferRouter.post("/", CreateTransferController.handle);
tranferRouter.get("/:id", ListAllTransfersOfSpecificAccountController.handle);
