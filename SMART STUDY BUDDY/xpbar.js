// 🌟 GLOBAL XP + LEVEL + XP HISTORY SYSTEM

function addXP(amount, reason = "Activity") {
    let xp = parseInt(localStorage.getItem("xp") || "0");
    let level = parseInt(localStorage.getItem("level") || "1");

    xp += amount;
    const required = level * 100;

    // LEVEL UP
    if (xp >= required) {
        xp -= required;
        level++;
        alert(`🎉 LEVEL UP! You reached Level ${level}`);
    }

    // Save XP + Level
    localStorage.setItem("xp", xp.toString());
    localStorage.setItem("level", level.toString());

    // Save XP HISTORY
    addXPHistory(amount, reason);

    // Update floating XP HUD
    updateXPBar();
}

// XP History Logger
function addXPHistory(amount, reason) {
    let history = JSON.parse(localStorage.getItem("xpHistory") || "[]");

    history.unshift({
        amount: amount,
        reason: reason,
        time: new Date().toLocaleString()
    });

    // Keep last 50 history entries
    if (history.length > 50) history.pop();

    localStorage.setItem("xpHistory", JSON.stringify(history));
}

// -----------------------------
// XP HUD BAR (bottom-left)
// -----------------------------
function createXPBar() {
    if (document.getElementById("xpHUD")) return;

    const hud = document.createElement("div");
    hud.id = "xpHUD";
    hud.innerHTML = `
      <div id="xpLabel">🌟 Level <span id="hudLevel">1</span></div>
      <div id="xpTrack"><div id="xpFill"></div></div>
      <div id="xpPoints"><span id="hudXP">0</span> XP</div>
    `;
    document.body.appendChild(hud);

    const style = document.createElement("style");
    style.textContent = `
      #xpHUD {
        position: fixed;
        bottom: 15px;
        left: 15px;
        width: 230px;
        background: rgba(11, 36, 71, 0.9);
        color: white;
        border-radius: 12px;
        padding: 10px 12px;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      }
      #xpTrack {
        width: 100%;
        height: 8px;
        background: rgba(255,255,255,0.35);
        border-radius: 6px;
        margin-top: 3px;
      }
      #xpFill {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #4caf50, #8de083);
        border-radius: 6px;
        transition: width 0.4s ease;
      }
      #xpPoints {
        text-align: right;
        font-size: 12px;
        margin-top: 4px;
        color: #e0e0e0;
      }
    `;
    document.head.appendChild(style);

    updateXPBar();
}

// Update XP Bar HUD
function updateXPBar() {
    const xp = parseInt(localStorage.getItem("xp") || "0");
    const level = parseInt(localStorage.getItem("level") || "1");
    const next = level * 100;

    document.getElementById("hudXP").textContent = xp;
    document.getElementById("hudLevel").textContent = level;

    const pct = Math.min((xp / next) * 100, 100);
    document.getElementById("xpFill").style.width = `${pct}%`;
}

// AUTO INIT
document.addEventListener("DOMContentLoaded", () => {
    createXPBar();
    setInterval(updateXPBar, 1500);
});
