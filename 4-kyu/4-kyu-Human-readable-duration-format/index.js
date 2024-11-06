/*
DESCRIPTION:
Your task in order to complete this Kata is to write a function which 
formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just 
returns "now". Otherwise, the duration is expressed as a combination 
of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year,
etc. In general, a positive integer and one of the valid units of time,
separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the 
last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one.
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not 
repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. 
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the 
function should not return 61 seconds, but 1 minute and 1 second instead. 
Formally, the duration specified by of a component must not be greater 
than any valid more significant unit of time
*/

// мое решение:
function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  let duration = "";
  let time = seconds + 0.1;
  let minutes = Math.floor(time / 60);
  let hours = Math.floor(time / 60 / 60);
  let days = Math.floor(time / 60 / 60 / 24);
  let years = Math.floor(time / 60 / 60 / 24 / 365);

  if (years > 0) {
    if (years === 1) {
      duration += `${years} year`;
    } else {
      duration += `${years} years`;
    }
    time = time - years * 365 * 24 * 60 * 60;
    seconds = time;
    minutes = Math.floor(time / 60);
    hours = Math.floor(time / 60 / 60);
    days = Math.floor(time / 60 / 60 / 24);
  }
  if (days > 0) {
    if (years !== 0 && seconds !== 0) {
      duration += ", ";
    } else if (years !== 0 && seconds === 0) {
      duration += " and ";
    }
    if (days === 1) {
      duration += `${days} day`;
    } else {
      duration += `${days} days`;
    }
    time = time - days * 24 * 60 * 60;
    seconds = time;
    minutes = Math.floor(time / 60);
    hours = Math.floor(time / 60 / 60);
  }
  if (hours > 0) {
    time = Math.floor(time - hours * 60 * 60);
    minutes = Math.floor(time / 60);
    seconds = time;

    if ((days !== 0 || years !== 0) && seconds !== 0) {
      duration += ", ";
    } else if ((days !== 0 || years !== 0) && seconds === 0) {
      duration += " and ";
    }
    if (hours === 1) {
      duration += `${hours} hour`;
    } else {
      duration += `${hours} hours`;
    }
  }
  if (minutes > 0) {
    time = Math.floor(time - minutes * 60);
    seconds = time;

    if ((hours !== 0 || days !== 0 || years !== 0) && seconds !== 0) {
      duration += ", ";
    } else if ((hours !== 0 || days !== 0 || years !== 0) && seconds === 0) {
      duration += " and ";
    }
    if (minutes === 1) {
      duration += `${minutes} minute`;
    } else {
      duration += `${minutes} minutes`;
    }
  }
  if (seconds > 0) {
    if (minutes !== 0 || years !== 0 || days !== 0 || hours !== 0) {
      duration += " and ";
    }
    if (seconds === 1) {
      duration += `${seconds} second`;
    } else {
      duration += `${seconds} seconds`;
    }

    time = time - seconds;
  }

  return duration;
}

console.log(formatDuration(360000));

// самое умное решение:
/*
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
*/
