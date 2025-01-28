import { BadRequest } from "../../error/apiError.js";

export function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req);
    if (error)
      throw new BadRequest(
        error.details[0]?.message?.replaceAll('"', "") ?? "Validation error",
      );
    req.body = value.body;
    req.query = value.query ?? {};
    next();
  };
}
