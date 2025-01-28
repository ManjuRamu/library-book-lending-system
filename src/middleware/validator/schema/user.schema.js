import Joi from "joi";
export const barrowBook = Joi.object({
  body: Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required()
      .lowercase()
      .label("user name required and length between 3 to 30"),
    email: Joi.string()
      .required()
      .lowercase()
      .email()
      .label("user email required"),
    title: Joi.string().required().lowercase().label("Book title required"),
  })
    .required()
    .prefs({ stripUnknown: true }),
}).prefs({ stripUnknown: true });

export default { barrowBook };
