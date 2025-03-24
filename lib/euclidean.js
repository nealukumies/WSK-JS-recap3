/**
 *
 * @param {number[]} start geoJSON point coordinates
 * @param {number[]} end geoJSON point coordinates
 * @returns distance between points
 */
export function distance(start, end) {
  return Math.sqrt(
    Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2)
  );
}
