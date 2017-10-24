const shared = require('../shared');

function energyMap(imperialInputs, metricTransform) {
  const joules = imperialInputs.map(metricTransform);

  return shared.createMap(joules, joules => joules, " Joules");
}

const metricEnergyUnits = [/newton[ -]?met(?:er|re)s?/, /Nm/, /joule/];

module.exports = {
  "toMap" : energyMap,
  "metricUnits" : metricEnergyUnits
}
