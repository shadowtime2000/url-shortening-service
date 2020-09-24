import endb from '../_urlDb'

export = async (req, res) => {
    if ( await endb.has(req.query.id)) {
        res.send(JSON.stringify({ id: req.query.id, url: await endb.get(req.query.id)}))
    } else {
        res.status(422).send()
    }
}