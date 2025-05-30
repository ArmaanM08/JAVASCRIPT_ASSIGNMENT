const inventory = [
  { name: "Banana", color: "Yellow", calories: 105 },
  { name: "Apple", color: "Red", calories: 95 },
  { name: "Lemon", color: "Yellow", calories: 37 },
  { name: "Strawberry", color: "Red", calories: 33 },
  { name: "Avocado", color: "Green", calories: 160 },
  { name: "Grapes", color: "Purple", calories: 62 },
  { name: "Kiwi", color: "Green", calories: 42 }
];



const groupedByColor = inventory.reduce((group, fruit) => {
  if (!group[fruit.color]) group[fruit.color] = [];
  group[fruit.color].push(fruit.name);
  return group;
}, {});

for (const color in groupedByColor) {
  console.log(`Fruits with color ${color}: ${groupedByColor[color].join(", ")}`);
}


const lowCalorieFruits = inventory.filter(fruit => fruit.calories < 50);
lowCalorieFruits.forEach(fruit => {
  console.log(`${fruit.name} has only ${fruit.calories} calories.`);
});


const totalCalories = inventory.reduce((sum, fruit) => sum + fruit.calories, 0);
console.log(`Total calories of all fruits: ${totalCalories}`);
