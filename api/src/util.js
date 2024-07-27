exports.respo = (res, statusCode, data) => {
  res.status(statusCode).json({
    data: data,
  });
};
