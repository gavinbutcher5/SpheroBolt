//Programmer: Gavin Butcher
//Date:2.6.2023
//Project: Sphero Bolt


//Hello World Practice Program
async function helloWorld() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}

/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function ninetyDegree() {
	await roll((getHeading() + 0), 60, 4); // Heading 0 degrees at 60 speed for 4 seconds
	await delay(1);
	await roll((getHeading() + 90), 60, 4); // heading 90 degrees at 60 speed for 4 seconds
}

/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
	await helloWorld() //<--calling the Helloi WOrld Function
	await ninetyDegree()  //<--calling the ninetyDegree function to run it
}


