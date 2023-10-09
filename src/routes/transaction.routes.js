import { Router } from "express"
import { createTransaction, readTransactions } from "../controllers/transaction.controllers.js"
import { validateAuth } from "../middlewares/validateAuth.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { transactionScheme } from "../schemas/transaction.schemas.js"

const transactionRouter = Router()

transactionRouter.get("/transaction", validateAuth, readTransactions)
transactionRouter.post("/transaction", validateAuth, validateSchema(transactionScheme), createTransaction)

export default transactionRouter