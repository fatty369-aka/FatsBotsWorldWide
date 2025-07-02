// Command Pack v1 Injection for ZoraTerminal

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("commandInput");
    const output = document.getElementById("output");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = input.value.trim().toLowerCase();
            let response = "";

            switch (command) {
                case "help":
                    response = "Available commands: help, status, unlock, log, vault, donate, gps";
                    break;
                case "status":
                    response = "Zora Status: Active. Monitoring all activity.";
                    break;
                case "log":
                    response = "Log: No anomalies. Last sync complete. Core stable.";
                    break;
                case "vault":
                    response = "Vault system locked. Input unlock code.";
                    break;
                case "unlock":
                    response = "Please enter unlock code or present biometric input.";
                    break;
                case "donate":
                    response = "Redirecting to donation gateway... [QR modal loading]";
                    break;
                case "gps":
                    response = "ZoraPublicGPS Active. Scanning environment for high-traffic signals.";
                    break;
                default:
                    response = "Unknown command";
            }

            output.textContent = `> ${command}\n${response}`;
            input.value = "";
        }
    });
});
