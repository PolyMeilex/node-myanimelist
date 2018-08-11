module.exports = (login: string, password: string) => {
  const getStartData = require("./getStartData");
  const loginWithData = require("./loginWithData");

  return new Promise((res, rej) => {
    getStartData()
      .then(startData => loginWithData(login, password, startData))
      .then(logData => res(logData))
      .catch(err => rej(err));
  });
};
