const express = require("express")
const router = express.Router()
const posts = require("../data/posts")

//CRUD 

//! Index
router.get("/", (req,res) =>{
    console.log('Lista dei post:')
    res.json(posts)
})


module.exports = router

//! Show 

router.get("/:id", (req,res) => {
    const id = req.params.id
    console.log(`Ecco il post con id ${id}`)

 const post = posts.find((p) => p.tags === id)

 res.json(post)
 })

//! Store 

router.post("/", (req,res) => {
    res.send(`Creazione del nuovo post`)
})

//! Update 

router.put("/:id", (req,res) => {
    const id = req.params.id
    res.send(`Modifico interamente il post con Id: ${id}`)
})

//! Patch

router.patch("/:id", (req,res) => {
    const id = req.params.id
    res.send(`Modifico parzialmente il post con Id: ${id}`)
})

//! Patch

router.delete("/:id", (req,res) => {
    const id = req.params.id
    res.send(`Elimino il post con Id: ${id}`)
})