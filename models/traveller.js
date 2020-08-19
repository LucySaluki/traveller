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

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
