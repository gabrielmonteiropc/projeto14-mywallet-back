import { db } from "../database/database.connection.js"

export async function validateAuth(req, res, next) {

    const { authorization } = req.headers

    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.status(404).send("Envie um novo token")

    try {

        const session = await db.collection("sessions").findOne({ token })

        if (!session) return res.status(404).send("token inválido")

        res.locals.token = token

        next()

    } catch (err) {
        res.status(500).send(err.message)
    }
}