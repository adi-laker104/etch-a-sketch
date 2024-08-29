//container element
const container = document.querySelector("#container");

//create a 16 x 16 grid of square dives within container
function createGrid(numberOfSquares) {
    for (i = 0; i < numberOfSquares; i++) {
        xDiv = document.createElement("div");
        container.appendChild(xDiv); 
        for (j = 0; j < numberOfSquares; j++) {
            yDiv = document.createElement("div"); 
            yDiv.classList.add("grid");
            xDiv.appendChild(yDiv); 
        }
    }
}

     const btn = document.querySelector("button");
     btn.addEventListener("click", () => {
        const container = document.querySelector("#container"); 

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        let numberOfSquares = prompt("Enter number of squares between 1 and 100");
            while (numberOfSquares > 100 || numberOfSquares < 1 ) {
         numberOfSquares = prompt("Enter number of squares between 1 and 100");
     }
        createGrid(numberOfSquares);
        let newGridElements = document.querySelectorAll(".grid");
        newGridElements.forEach((box) =>  {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";    
            });
    });
});
