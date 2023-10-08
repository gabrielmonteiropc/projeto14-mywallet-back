import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"

export async function signUp(req, res) {

    const { name, email, password } = req.body

    try {

        const user = await db.collection("users").findOne({ email })
        if (user) return res.status(409).send({ message: "Email já cadastrado" })

        const hash = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({ name, email, password })

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signOut(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}