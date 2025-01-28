import Joi from "joi";
export const barrowBook = Joi.object({
  body: Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required()
      .lowercase()
      .custom((value) => value.replace(/\s+/g, " "))
      .label("user name required and length between 3 to 30"),
    email: Joi.string()
      .required()
      .lowercase()
      .email()
      .label("user email required"),
    title: Joi.string().required().label("Book title required"),
  })
    .required()
    .prefs({ stripUnknown: true }),
}).unknown(true);

export const extendBorrowPeriod = Joi.object({
  body: Joi.object({
    title: Joi.string().required().label("Book title required"),
    email: Joi.string()
      .required()
      .lowercase()
      .email()
      .label("user email required"),
  })
    .required()
    .prefs({ stripUnknown: true }),
}).unknown(true);
export default { barrowBook, extendBorrowPeriod };
