document.addEventListener("keydown", function(event) {
    const pianoCodes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
    if (pianoCodes.includes(event.code)) {
        new Audio(`white_keys/${event.key.toUpperCase()}.mp3`).play();
    }
});

