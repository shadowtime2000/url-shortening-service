import clicksDb from "../_clicksDb";

export = async (req, res) => {
  await clicksDb.set(
    req.params.id,
    (await clicksDb.get(req.params.id)) + 1 || 1
  );
  console.log(`${req.params.id} clicked`);
  fetch(`/api/url?id=${req.params.id}`)
    .then((resp) => resp.json())
    .then(async (resp) => {
      const time1 = new Date().getMilliseconds();
      await res.redirect(resp.url);
      const time2 = new Date().getMilliseconds();
      console.log(`Time taken: ${time2 - time1}`);
    });
};
