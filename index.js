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

function distanceTravelledInFeet(block1, block2) {
  let blocks;
  if (block1 > block2) {
    blocks = block1 - block2;
  } else {
    blocks = block2 - block1;
  }
  return blocks * 264;
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
}
