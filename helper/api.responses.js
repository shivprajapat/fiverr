const status = {
  OK: 200,
  Create: 201,
  Deleted: 202,
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
  Forbidden: 403,
  InternalServerError: 500,
  UnprocessableEntity: 422,
};
const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;

  return err;
};
module.exports = {
  status,
  createError,
};
