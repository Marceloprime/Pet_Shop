const get = (req,res,next) => { res.status(200).send({ title:"Pet Shop API", version: "0.0.1" }) }

module.exports = {
    get
}