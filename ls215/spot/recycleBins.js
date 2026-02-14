/*
function placeInBins(items) {
  const recycleBins = {
    paper: [], glass: [], organic: [], plastic: []
  }

  for (let key of Object.keys(recycleBins)) {
    for (let object of items) {
      if (key.includes(object['material'].toLowerCase()) || key.includes(object['secondMaterial'].toLowerCase())) {
        recycleBins[key].push(object.type);
      }
    }
  }

  return Object.values(recycleBins);
}
*/

// Task
// You will be given a list of objects. Each object has type, material, and 
// possibly secondMaterial. The existing materials are: paper, glass, organic, 
// and plastic.

// Your job is to sort these objects across the 4 recycling bins according to 
// their material (and secondMaterial if it's present), by listing the type's 
// of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in 
// both of the respective bins
// The order of the type's in each bin should be the same as the order of 
// their respective objects was in the input list

// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"] // paper bin
//   ["wine bottle", "beer bottle"], // glass
//   ["rotten apples", "out of date yogurt"], // organic
//   ["out of date yogurt"] //plastic
// ]


/*
input: array of objects
output: 2D array, each subarray represents "recycling bins"

Rules:
1. We need bins for each material as well as each material & secondMaterial pair
  - a bin can be empty

2. The bins should come in the same order as the materials listed in input array
3. The order of the type's in each bin should be the same as the order of their respective objects was in the input list
e.g.
if rotten apples, then outof date yogurt (@ organic bin)
=> [rotten apples, out of date yogurt]

3. If an object is made of two materials, its type should be listed in both of the respective bins

Questions:
Could we expect different data types for input other than an array -> NO
Will the input array be empty? -> NO
Will we always have valid object elements in the input array? -> YES

---- DATA STRUCTURE ----
for each OBJECT in the input ARRAY...
  add appropriate values to a result OBJECT containing the bins

---- ALGORITHM ----
High level:
start w/ an object named `recycleBins` where we have keys for...
  paper, glass & paper, organic, organic & plastic; each of their values are []

1. for each BIN of the `recycleBins` object
  - for each object in input array
  - if it's type is equal to the current bin, add it to that bin

2. with all bins filled, create a result array from each value of the key value pairs in the `recycleBins` object

3. return the result array

Low level:
- start w/ an object named `recycleBins` = {
  paper: [], glass: [], organic: [], plastic: []
}

- for each `key` in recycleBins object
  - for each object in the input array
    - if there is a secondMaterial
      - check if first OR secondMaterial is in the `key`
        - push it to `recycleBins[key].push()`
    - ELSE object.material is included in the key, push it to corresponding recycle bin array
      `recycleBins[key].push()`

- return Object.values(recycleBins)

e.g.
paper [wine bottle, amazon box, beer bottle]
- rotten apps NO
- yogurt NO`
- wine bottle yes -> 
- amazon box yes
- beer bottle yes
- rubber band NO

paperglass [wine bottle]
- rottn apps NO
- yogurt no
- wine bottle yes

rotten apples -> organic [rotten apples]
out of date yogurt -> organic [rot app, out of date yogurt]
*/

/*
function placeInBins(items) {
  const recycleBins = {
    paper: [], glass: [], organic: [], plastic: []
  }

  for (let key of Object.keys(recycleBins)) {
    for (let object of items) {
      if (object.hasOwnProperty('secondMaterial')) {
        if (key.includes(object.material.toLowerCase()) || key.includes(object.secondMaterial.toLowerCase())) {
          recycleBins[key].push(object.type)
        }
      } else {
        if (key.includes(object.material)) {
          recycleBins[key].push(object.type);
        }
      }
    }
  }

  return Object.values(recycleBins);
}
  */

function placeInBins(items) {
  const recycleBins = {
    paper: [], glass: [], organic: [], plastic: []
  }

  for (let key of Object.keys(recycleBins)) {
    for (let object of items) {
      console.log(object['secondMaterial'].toLowerCase())
      if (object['material'].toLowerCase() === key || object['secondMaterial'].toLowerCase() === key) {
        recycleBins[key].push(object.type);
      }
    }
  }

  return Object.values(recycleBins);
}


//The existing materials are: paper, glass, organic, 
// and plastic.


const input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "rubberband", "material": "plastic" },
  {"type": "plate", "material": "paper"}
]

function recycleBins(objects){
    let allBins = {
        paper: [],
        glass: [],
        organic: [],
        plastic:[]
    }

    for(let key in allBins){
        objects.forEach(object => {
            if((object['material'])  == key || (object['secondMaterial']) == key){
                allBins[key].push(object['type'])
            } 
        })
    }
    return Object.values(allBins)
}

console.log(recycleBins(input));

/*[
  [ 'wine bottle', 'amazon box', 'beer bottle', 'plate' ],
  [ 'wine bottle', 'beer bottle' ],
  [ 'rotten apples', 'out of date yogurt' ],
  [ 'out of date yogurt' ]
]*/

/*
object['secondMaterial'].toLowerCase()
object.secondMaterial.toLowerCase()

How does JS handle object key access differently if key doesn't exist using the different syntax, [] or .?

LSBOT says
When accessing a property that doesn't exist on an object, both dot notation and bracket notation behave identically: they both evaluate to undefined.
*/
