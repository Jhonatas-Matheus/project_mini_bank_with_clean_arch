import Router from "express";
import { CreateAccountController } from "../controller/create.account.controller";
import { GetSpecificAccountController } from "../controller/get.specific.account.controller";
import { ListAllAccountsController } from "../controller/list.all.accounts.controller";

export const accountRouter = Router();

accountRouter.post("/", CreateAccountController.handle);
accountRouter.get("/", ListAllAccountsController.handle);
accountRouter.get("/:id", GetSpecificAccountController.handle);
