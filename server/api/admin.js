const router = require('express').Router()
const { shoe } = require('../db')

// POST for /api/admin
router.post('/', async (req, res, next) => {
    try {
        res.send(await shoe.create(req.body))
    } catch (err) {
        next(err)
    }
})

// PUT for /api/admin/:id
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const updateShoe = await shoe.findByPk(id)
        res.send(await updateShoe.update(req.body))
    } catch (err) {
        next(err)
    }
})

// DELETE for /api/admin/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        console.log(id, "$$$$$$$")
        const deleteShoe = await shoe.findByPk(id)
        await deleteShoe.destroy({where: {shoeId : id}})
    } catch (err) {
        next(err)
    }
})

module.exports = router