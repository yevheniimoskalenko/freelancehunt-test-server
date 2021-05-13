const parser = require("rss-url-parser");

module.exports.rss = async (req, res) => {
  const data = await parser("https://freelancehunt.com/projects.rss");
  const result = Object.keys(data).map((key) => {
    return {
      id: key,
      title: data[key].title,
      categories: data[key].categories,
      description: data[key].description,
      price: data[key].title.match(/\d+[(₴|₽)]/g) || 0,
      link: data[key].link,
      date: data[key].date,
    };
  });
  return res.json(result);
};

module.exports.fetchId = async (req, res) => {
  const { id } = req.params;
  const data = await parser("https://freelancehunt.com/projects.rss");
  const result = await Object.keys(data).map((key) => {
    return {
      id: +key,
      title: data[key].title,
      categories: data[key].categories,
      description: data[key].description,
      link: data[key].link,
      date: data[key].date,
    };
  });
  // возможно это тупо(
  if (result[id] === undefined) {
    return res.status(404).json({ message: "not found" });
  }
  return res.json(result[id]);
};
