const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];


// return each robot object with the alliance key value
// if the name value matches a value in knownDecepticons the alliance value is 'decepticon'
// if the name value does not match a value in knownDecepticons the alliance value is 'autobot'

var sortedRobots = robots.map(function(robot) {
  if (knownDecepticons.includes(robot.name)) {
    return Object.assign({}, robot, {
      alliance: 'decepticon'
    });
  } else {
    return Object.assign({}, robot, {
      alliance: 'autobot'
    });
  }
  return sortedRobots
} );

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

// return each stripe ojbect with the stripe filled in with either 'black' or 'white'
// a stripe is black when the stripe's index is even
// a stripe is white if a stripe's index is odd
// do not modify the original array so use Object.assign()

let coloredZebraStripes = zebraStripes.map(function(stripe, index) {
  if (index % 2 === 0) {
    return Object.assign({}, stripe, {
      color: 'black'
    })
  } else {
    return Object.assign({}, stripe, {
      color: 'white'
    })
  }
  return coloredZebraStripes
})
