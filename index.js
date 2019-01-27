// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let location = 42;
  let distance;
  if (street > location) {
    distance = street - location;
  } else {
    distance = location - street;
  }
  return distance;
}


function distanceFromHqInFeet(street) {
  let blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}
