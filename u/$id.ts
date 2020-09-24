
export = async (req, res) => {
    fetch(`/api/url?id=${req.params.id}`)
        .then(resp => resp.json())
        .then(resp => res.redirect(resp.url))
}