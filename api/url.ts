import urlDb from "../_urlDb";
import clicksDb from "../_clicksDb";

export = async (req, res) => {
  if (await urlDb.has(req.query.id)) {
    res.send(
      JSON.stringify({
        id: req.query.id,
        url: await urlDb.get(req.query.id),
        clicks: await clicksDb.get(req.query.id),
      })
    );
  } else {
    res.status(422).send();
  }
};
