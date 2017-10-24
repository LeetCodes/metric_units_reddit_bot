const shared = require('../shared');

function forceMap(imperialInputs, metricTransform) {
  const newtons = imperialInputs.map(metricTransform);

  return shared.createMap(newtons, newtons => newtons, " N");
}

const metricForceUnits = [/newtons?/, /dynes?/];

module.exports = {
  "toMap" : forceMap,
  "metricUnits" : metricForceUnits
}
