const add = (a, b) => {
  return Number(a) + Number(b);
};

const sub = (a, b) => {
  return Number(a) - Number(b);
};
const multi = (a, b) => {
  return Number(a) * Number(b);
};
const div = (a, b) => {
  return Number(a) / Number(b);
};

module.exports = { add, sub, multi, div };
