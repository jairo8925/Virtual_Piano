document.addEventListener("keydown", function(event) {
    const pianoCodes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
    if (pianoCodes.includes(event.code)) {
        console.log(`The '${event.key}' key is pressed.`);
    } else {
        console.log(`Warning. The key '${event.key}' is pressed.`);
    }
});
