"use strict";
function make_great(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "Great " + magicians[i];
  }
}
const magicians2 = ["usman", "haseeb", "wajahat"];
make_great(magicians2);
// Now, let's display the modified magicians array
for (let i = 0; i < magicians2.length; i++) {
  console.log(magicians2[i]);
}
