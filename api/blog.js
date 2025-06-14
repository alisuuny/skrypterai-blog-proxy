export default async function handler(req, res) {
  const path = req.url.replace("/api/blog", "") || "/";
  const targetURL = `https://skrypterblog.seoversehq.com${path}`;

  try {
    const response = await fetch(targetURL);
    const text = await response.text();

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}
