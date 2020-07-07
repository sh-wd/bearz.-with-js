alert("welcome to the match test calculator.\n\nhere we will calculate the percentage strength of your match.");

var bear_1 = prompt("\nplease enter your name");
var bear_2 = prompt("\nplease enter the name of your match");

alert("\nthank you.\n\nwe will now calculate your match score.");

var random_num = (Math.random() *100) + 1;
var rounded_num = Math.round(random_num);

switch(true) {
    case (rounded_num < 50):
    alert("\nthe match score of " + bear_1 + " and " + bear_2 + " is only " + rounded_num + "%\n\nit's not a strong match.\n\ngo find another hot bear instead ;)");
    break; 
    
    case (rounded_num >= 50 && rounded_num < 75):
    alert("\nthe match score of " + bear_1 + " and " + bear_2 + " is " + rounded_num + "%\n\nit's a decent match.\n\nwe're not sure you'll be together for a long time, but definitely a good time ;)");
    break; 
    
    case (rounded_num >= 75):
    alert("\nthe match score of " + bear_1 + " and " + bear_2 + " is " + rounded_num + "%\n\nit's a strong match.\n\nyou might not be able to make cubs, but you can sure try for a long time to come ;)");
    break;
    
    default:
    alert("\noops.\n\nsomething went wrong.\n\ntry again.");
}
