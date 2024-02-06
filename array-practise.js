const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
// MAP
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

function getName(characters) {
  return characters.map((a) => a.name);
}
const names = getName(characters);
console.log(names);

function getHeight(characters) {
  return characters.map((a) => a.height);
}
const h = getHeight(characters);
console.log(h);

console.log(
  characters.map((characters) => {
    return { name: characters.name, height: characters.height };
  })
);

// console.log(
//     characters.map((characters)=>{
//         retrun
//     })
// )

// console.log(
//     characetrs.map()
// )

const totalMass = (characters) => {
  return characters.reduce(
    (prevVal, currentVal) => prevVal + Number(currentVal.mass),
    0
  );
};
const mass = totalMass(characters);
console.log({ mass });

//Get the total height of all characters
const totalHeight =(characters)=>{
    return characters.reduce(
        (iHeight,fHeight)=> iHeight+Number(fHeight.height),0
    )
}
const theight= totalHeight(characters)
console.log({height})