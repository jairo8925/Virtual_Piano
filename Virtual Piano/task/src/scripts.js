document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") console.log("The 'A' key was pressed.");
    else if (event.code === "KeyS") console.log("The 'S' key was pressed.");
    else if (event.code === "KeyD") console.log("The 'D' key was pressed.");
    else if (event.code === "KeyF") console.log("The 'F' key was pressed.");
    else if (event.code === "KeyG") console.log("The 'G' key was pressed.");
    else if (event.code === "KeyH") console.log("The 'H' key was pressed.");
    else if (event.code === "KeyJ") console.log("The 'J' key was pressed.");
    else console.log("Warning. Some other key is pressed!")
});
