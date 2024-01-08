const { z } = require("zod");
const { User } = require("../db");

const signUpSchemaValidation = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8),
});

const logInSchemaValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// make common function so that we can pass schema as per our choice
const validateSchema = (schema, req, res, next) => {
  try {
    const validation = schema.safeParse(req.body);
    if (validation.success) {
      next();
    } else {
      res.status(400).json({
        message: "Input validation failed",
        severity: "warning",
        error: validation,
      });
    }
  } catch (error) {
    console.log("validateSchema error: ", error);
  }
};

async function authenticateSignUpBody(req, res, next) {
  validateSchema(signUpSchemaValidation, req, res, next);
}

async function authenticateLoginBody(req, res, next) {
  validateSchema(logInSchemaValidation, req, res, next);
}

async function existingEmail(req, res, next) {
  const { email } = req.body;

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

module.exports = {
  existingEmail,
  authenticateSignUpBody,
  authenticateLoginBody,
};
