


const mainCanvas = document.querySelector(".mainCanvas");
const input = document.querySelector("input");
const pixelButton = document.querySelector(".pixelButton");

const monoChrome = document.querySelector("#monoChrome");
const rColored = document.querySelector("#rColored");



pixelButton.addEventListener('click', generateCanvas);   //Main function encompasses generate canvas + enable monochrome or colored drawing 

function generateCanvas(){

    rColored.disabled = false;                  //re-enable Rainbow and MonoChrome buttons
    monoChrome.disabled = false;

    while(mainCanvas.firstChild) {                        //Delete all current/residual pixel rows from mainCanvas div
        mainCanvas.removeChild(mainCanvas.firstChild); 
    } 

    let canvasSize = input.value;                //mainCanvas will be the size of X input (X pixels in X rows)  
    console.log(canvasSize);

    if (canvasSize >= 4 && canvasSize <= 100) {           //We don't want any other input than these numbers : 4 <= X <= 100 . 
    generateRow(canvasSize);                              //first generate X rows

        function generateRow(canvasSize){
            for (let i = 0 ; i < canvasSize ; i++){
                let row = document.createElement("div");      
                row.classList.add("canvasRow");              //Need to add a class list to the created div(s)
                mainCanvas.appendChild(row);
                for (let i = 0 ; i < canvasSize ; i++){          //Then, generate X pixels per row
                    let pixel = document.createElement("div");
                    pixel.classList.add("canvasPixel");
                    row.appendChild(pixel);
                    }
                }
            }


    drawColor();               //Enables drawing after color selection

        function drawColor (){
            const pixels = document.querySelectorAll(".canvasPixel");


       monoChrome.addEventListener('click', () => {         //Activate monochrome drawing on click
        rColored.disabled = true;                           //Disable rainbow button
        pixels.forEach(pixel => {
            pixel.addEventListener('mouseover', function (e) {
            e.target.style.background = "black";
        }); 
        });
    });  //Event listener monoChrome

        rColored.addEventListener('click', () => {      
            monoChrome.disabled = true;                  //Disable monochrome button
            const array = ["red", "green", "blue", "yellow", "orange", "purple", "indigo", "pink"]; //Background colors 

            pixels.forEach(pixel => {
                pixel.addEventListener('mouseover', function (e) {
                e.target.style.background = array[Math.floor(Math.random()*array.length)];
        }); 
        });
    }); //Event listener rainbow
    }  // For drawColor()

        

    } //For main if code
}  //For generateCanvas()