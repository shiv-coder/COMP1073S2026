async function startProgram(){

    // STEP 2: Call a method to control the main LED lights
    setMainLed(getRandomColor());

    // STEP 3: Invoke another method to write to the screen
    await scrollMatrixText("Hello World",getRandomColor(),24,true);

    // STEP 3: Call another method to move the robot
    await roll(0,100,5)

    // STEP 4: Exit the program
    exitProgram();

}