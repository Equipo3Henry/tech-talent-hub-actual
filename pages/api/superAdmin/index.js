export default withSession(async (req, res) => {
  const currentUser = req.session.get("user");

  if (currentUser && currentUser.isSuperAdmin) {
    return res.status(200).json({ message: "Acceso permitido" });
  }

  return res.status(403).json({ message: "Acceso denegado" });
});
