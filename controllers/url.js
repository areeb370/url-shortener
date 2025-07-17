const { nanoid } = require("nanoid");
const Url = require("../models/url");

async function HandleNewUrl(req, res) {
  shortId = nanoid(7);
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  const shortUrl = await Url.create({
    originalUrl: originalUrl,
    shortUrl: shortId,
    vistHistory: [],
    createdBy: req.user._id,
  });

  if (!shortUrl) {
    return res.status(500).json({ error: "Failed to create short URL" });
  }
  return res.render("home", { id: shortUrl.shortUrl });
}

async function HandleGetUrl(req, res) {
  const shortId = req.params.shortId;
  let result = await Url.findOneAndUpdate(
    { shortUrl: shortId },
    {
      $push: {
        vistHistory: Date.now(),
      },
    },
    {
      new: true,
    }
  );
  if (!result) {
    return res.status(404).send("Short URL not found");
  }
  res.redirect("https://" + result.originalUrl);
}

module.exports = {
  HandleNewUrl,
  HandleGetUrl,
};
