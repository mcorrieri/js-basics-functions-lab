function distanceFromHqInBlocks(pickup) {
  let distance = pickup - 42;
  return Math.abs(distance);
}

function distanceFromHqInFeet(pickup) {
  let blocks = distanceFromHqInBlocks(pickup);
  let feetDist = blocks * 264;
  return feetDist;
}
function distanceTravelledInFeet(pickup, dropoff) {
  let distance = (pickup - dropoff) * 264;
  return Math.abs(distance);
}
function calculatesFarePrice(pickup, dropoff) {
  let distance = distanceTravelledInFeet(pickup, dropoff);
  if (distance <= 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
