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

/**
 * @type {import('#/types/Wheel').Wheel}
 */
const wheelInfo = {
  count: 4,
  radius: 'R13'
}

function main () {
  const enginePower = Number(process.argv[2]);
  console.log(buildSmallHatchback(enginePower, wheelInfo));
}

main();
