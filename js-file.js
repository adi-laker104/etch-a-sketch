//container element
const container = document.querySelector("#container");

//create a 16 x 16 grid of square dives within container
for (i =0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);   
    }
}