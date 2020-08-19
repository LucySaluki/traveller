const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeysStart = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return journeysStart;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeysEnd = this.journeys.map(journey => journey.endLocation);
  return journeysEnd;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys.filter((journey) => {
      return journey.transport ===transport;
  });
  return journeys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return journeys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDist = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  },0);
  return totalDist;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
