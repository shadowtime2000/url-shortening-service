import urlDb from "../_urlDb";
import clicksDb from '../_clicksDb'

export = async (req, res) => {
  let code = Math.random().toString(36).slice(2);
  await urlDb.set(code, req.query.url);
  await clicksDb.set(code, "0")
  res.send(JSON.stringify({ id: code, url: req.query.url }));
};
