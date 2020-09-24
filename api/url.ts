import urlDb from '../_urlDb'

export = async (req, res) => {
    if ( await urlDb.has(req.query.id)) {
        res.send(JSON.stringify({ id: req.query.id, url: await urlDb.get(req.query.id)}))
    } else {
        res.status(422).send()
    }
}