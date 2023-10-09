import { Router } from "express"
import { signIn, signOut, signUp } from "../controllers/auth.controllers"
import { validateSchema } from "../middlewares/validateSchema"
import { loginSchema, userSchema } from "../schemas/auth.schemas.js"
import { validateAuth } from "../middlewares/validateAuth"

const authRouter = Router()

authRouter.post("/sign-up", validateSchema(userSchema), signUp)
authRouter.post("/sign-in", validateSchema(loginSchema), signIn)
authRouter.post("/sign-out", validateAuth, signOut)

export default authRouter