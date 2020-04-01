/**
 * @param {number} enginePower
 * @param {import('#/types/Wheel').Wheel} wheelInfo
 * @returns {import('#/types/Car').Car}
 */
function buildSmallHatchback (enginePower, wheelInfo) {
  return {
    body: 'hatchback',
    doors: 3,
    engine_power: enginePower,
    whells: wheelInfo
  }
}

function main () {
  const enginePower = Number(process.argv[2]);
  console.log(buildSmallHatchback(enginePower, {
    count: 4,
    radius: 'R13'
  }));
}

main();
