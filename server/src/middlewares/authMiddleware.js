import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    // Check user role
    if (req.user.role !== "user") {
      return res
        .status(403)
        .send({ message: "Forbidden. Insufficient permissions." });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden. Insufficient permissions.' });
  }

  next();
};