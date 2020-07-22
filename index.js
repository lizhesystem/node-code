const name = 'lizhe';
const age = 20;

exports.name = name;
exports.age = age;

module.exports.name = name;

module.exports = name;
module.exports = age;

module.exports = {
  name
}
