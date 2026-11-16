// Q5 Weather Activity Planner
const temperature=24,isRaining=false,windSpeed=12;
let advice;
if(isRaining) advice="Stay indoors with hot coffee.";
else if(temperature>35) advice="Go swimming.";
else if(temperature<15&&windSpeed>20) advice="Too cold and windy — stay home.";
else advice="Perfect day for a walk.";
const comfortableForWalk=!isRaining&&(temperature>=15||windSpeed<=20);
console.log(advice,{comfortableForWalk});