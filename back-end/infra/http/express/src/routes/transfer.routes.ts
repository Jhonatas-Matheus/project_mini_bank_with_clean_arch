import Router from "express";
import { CreateTransferController } from "../controller/create.transfer.controller";

export const tranferRouter = Router();

tranferRouter.post("/", CreateTransferController.handle);
