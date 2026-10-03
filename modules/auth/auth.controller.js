export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    
    
    return res.status(201).json({
      message: "db connected",
      data: { username, email }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;


    
    return res.status(200).json({
      message: "login completed",
      token: "fake-jwt-token"
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};