import endb from '../_urlDb'

export =  async (req, res) => {
    let code = Math.random().toString(36).slice(2)
    await endb.set(code, req.query.url)
    res.send(JSON.stringify({ id: code, url: req.query.url }))
}