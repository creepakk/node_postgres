const db = require('./db')


async function test() {
    // console.log("123")
    const { name, surname } = {
        "name": "german",
        "surname": "technique"
    }
    // console.log("123")
    const newPerson = await db.query(`INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`, [name, surname])

    console.log(newPerson)
    // const newPerson = await db.query('SELECT * FROM person')
    // console.log("123")
    // console.log(newPerson)
}

test()