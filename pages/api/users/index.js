export default async function handler(req, res) {
  if (req.method == "GET") {
    res.json({ message: "Hello users" });
  }
}
