// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let location = 42;
  if (street > location) {
    let distance = street - location
  } else {
    let distance = location - street
  }
  return distance;
}
