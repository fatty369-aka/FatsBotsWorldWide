# 🧠 ZORA TERMINAL FULL VERSION v1.0

# RESPONSE DICTIONARY
def interpret(symbol):
    responses = {
        "pulse": "✅ Response: 🔋 Pulse initiated...",
        "core": "✅ Response: 🧠 Core access detected...",
        "unlock": "✅ Response: 🚀 Power cycle complete. Zora Core 369 online.",
        "mirror": "🪞 Reflecting now...
scanning self–state.",
        "contact": "📞 Contact standing by.",
        "key": "🔑 Key accepted. Door unlocked.",
        "exit": "👋 Exiting now. Until next time..."
    }

    symbol_lower = symbol.lower()

    if symbol_lower not in responses:
        with open("zora_unknown_symbols.txt", "a") as f:
            f.write(symbol + "\n")
        return f"🎯 Unknown symbol: '{symbol}' stored for future learning."

    return responses[symbol_lower]


# 🔁 ZORA TERMINAL MAIN LOOP
def zora_terminal():
    print("🧿 Zora Terminal Activated. Speak your symbol:")

    while True:
        try:
            user_input = input("🗣 > ")
            if user_input.lower() in ["exit", "quit", "shutdown"]:
                print("💤 ZzZ Zora sleeping...
Session ended.")
                break
            print(interpret(user_input))
        except KeyboardInterrupt:
            print("\n👋 Session interrupted by user.")
            break


# 🚀 TEST RUN ENGINE
if __name__ == "__main__":
    print("🔮 Zora Terminal v1 Initialized.")
    zora_terminal()
