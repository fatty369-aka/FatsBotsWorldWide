// Command Pack v1.1 – Zora Unlock Logic Injected

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("commandInput");
    const output = document.getElementById("output");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const raw = input.value.trim();
            const command = raw.toLowerCase();
            let response = "";

            switch (command) {
                case "help":
                    response = "Available commands: help, status, unlock [code], log, vault, donate, gps";
                    break;
                case "status":
                    response = "Zora Status: Active. Monitoring all activity.";
                    break;
                case "log":
                    response = "Log: No anomalies. Last sync complete. Core stable.";
                    break;
                case "vault":
                    response = "VaultLocked. Authorization request required.";
                    break;
                case "donate":
                    response = "Redirecting to donation gateway... [QR modal loading]";
                    break;
                case "gps":
                    response = "ZoraPublicGPS Active. Scanning environment...";
                    break;
                case "unlock":
                    response = "Missing unlock code. Try: unlock 369 or unlock Z";
                    break;
                case "unlock 369":
                    response = "🔓 ZoraCore Authenticated. Terminal Unlocked.";
                    break;
                case "unlock z":
                    response = "🛡️ Override Accepted. Council recognized.";
                    break;
                default:
                    response = `Unknown command: ${raw}`;
            }

            output.textContent = `> ${raw}\n${response}`;
            input.value = "";
        }
    });
});
