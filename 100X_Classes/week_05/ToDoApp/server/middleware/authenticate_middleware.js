const { z } = require("zod");
const { User } = require("../db");

const userSchemaValidation = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8),
});

async function authenticateBody(req, res, next) {
  const { username, email, password } = req.body;

  try {
    let validateSchema = userSchemaValidation.safeParse({
      username,
      email,
      password,
    });
    if (validateSchema.success) {
      next();
    } else {
      res.status(400).json({
        message: "Input validation failed",
        severity: "warning",
        error: validateSchema,
      });
    }
  } catch (error) {
    console.log("validateSchema error: ", error);
  }
}

async function existingEmail(req, res, next) {
  const {  email } = req.body;

  try {
    const checkIfExists = await User.findOne({ email });
    if (checkIfExists) {
      res.status(400).json({
        message: " email is already in use , please try with some other email",
        severity: "warning",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("existingUserName_email error: ", error);
  }
}

module.exports = { authenticateBody, existingEmail };
