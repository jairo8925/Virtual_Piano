document.addEventListener("keydown", function(event) {
    const pianoCodes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];
    if (pianoCodes.includes(event.code)) {
        new Audio(`sounds/${event.key.toUpperCase()}.mp3`).play();
    }
});

