
const facts = [
  "About 75% of all waste is recyclable, but only about 30% is actually recycled.",
  "Glass can be recycled endlessly without loss in quality or purity.",
  "Aluminum cans can be recycled and back on the shelf in as little as 60 days.",
  "Recycling one ton of paper saves 17 trees and 7,000 gallons of water.",
  "Plastic bottles can take up to 450 years to decompose in landfills.",
  "Composting food scraps can reduce household waste by up to 30%.",
  "Recycling a single glass bottle saves enough energy to power a 100-watt bulb for four hours.",
  "Reusing and recycling helps conserve natural resources and reduces pollution.",
  "E-waste contains valuable metals like gold, silver, and copper—recycle electronics properly!",
  "1 ton of recycled steel saves 2,500 pounds of iron ore.",
];

export function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}
