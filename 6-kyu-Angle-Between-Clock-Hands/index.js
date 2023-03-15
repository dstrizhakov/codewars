// DESCRIPTION:
// Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle
// between the two hands of a 12-hour analog clock in radians.

// Notes:
// The minute hand always points to the exact minute (there is no seconds hand).
// The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because
// the hour hand is already half way between 6 and 7.
// Return the smaller of the angles ( <= π ).
// Return π if the hands are opposite.
// Examples
// at noon the angle is: 0
// at 3:00 the angle is: π/2 (90 degrees)
// at 6:00 the angle is: π (180 degrees)
// at 9:00 the angle is: π/2 (90 degrees)

function handAngle(date) {
  let h = date.getHours();
  let m = date.getMinutes();

  if (m !== 0) {
    h = h + m / 60;
  }

  let hAngle = (h / 12) * 2 * Math.PI;
  let mAngle = (m / 60) * 2 * Math.PI;

  angle = Math.abs(hAngle - mAngle);
  angle2 = Math.abs(2 * Math.PI - angle);

  return Math.min(angle, angle2);
}
