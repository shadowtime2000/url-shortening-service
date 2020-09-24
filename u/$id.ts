import { Expression } from "typescript"

export = async (req, res) => {
    fetch(`/api/url?id=${req.params.id}`)
        .then(resp => resp.json())
        .then(async resp => {
            const time1 = new Date().getMilliseconds()
            await res.redirect(resp.url)
            const time2 = new Date().getMilliseconds()
            console.log(`Time taken: ${time2 - time1}`)
        })
}