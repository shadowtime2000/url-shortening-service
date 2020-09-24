import endb from '../_endb'

module.exports = async (req, res) => {
    let code = Math.random().toString(36).slice(2)
    await endb.set(code, req.query.url)
    res.send(JSON.stringify({ id: code, url: req.query.url }))
}