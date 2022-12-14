const express = require("express")
const router = express.Router()


router.use("/shoes", require("./shoes"))
router.use("/orders", require("./orders"))
router.use("/users", require("./users"))
router.use("/admin", require("./admin"))


router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
