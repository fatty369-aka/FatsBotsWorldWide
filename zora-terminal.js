document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("commandInput");
    const output = document.getElementById("output");

    const commands = {
        help: "Available commands: help, status, unlock, log, vault",
        status: "Zora Status: Active. Monitoring all activity.",
        unlock: "Enter 3-6-9 passphrase to continue...",
        log: "Logging session to encrypted vault...",
        vault: "Vault locked. Authorization required."
    };

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const cmd = input.value.trim();
            output.textContent += "\n> " + cmd + "\n";
            output.textContent += (commands[cmd] || "Unknown command") + "\n";
            input.value = "";
            output.scrollTop = output.scrollHeight;
        }
    });
});