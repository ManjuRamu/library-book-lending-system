import { BadRequest } from "../exceptions/apiError.js";

export function getLimitOffset(pageNo, pageLimit) {
  if (pageNo < 1) throw new BadRequest("pageNo must be greater than 1");
  if (pageLimit < 1) throw new BadRequest("pageLimit must be greater than 0");
  const start = (parseInt(pageNo) - 1) * parseInt(pageLimit);
  const end = start + parseInt(pageLimit);
  return { start, end };
}
