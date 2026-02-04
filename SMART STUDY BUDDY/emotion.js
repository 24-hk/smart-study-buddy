// Emotion-Based Study Companion
document.addEventListener("DOMContentLoaded", () => {
  // Create floating assistant container
  const moodBox = document.createElement("div");
  moodBox.innerHTML = `
    <div id="emotion-buddy">
      <div class="emoji-display">🤖</div>
      <p class="mood-text">How are you feeling today?</p>
      <div class="mood-options">
        <button data-mood="motivated">😊</button>
        <button data-mood="tired">😴</button>
        <button data-mood="stressed">😡</button>
        <button data-mood="neutral">😐</button>
      </div>
    </div>
  `;

  document.body.appendChild(moodBox);

  // Styling
  const style = document.createElement("style");
  style.textContent = `
    #emotion-buddy {
      position: fixed;
      bottom: 100px;
      right: 20px;
      background: white;
      color: #0b2447;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      border-radius: 15px;
      padding: 15px 20px;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      width: 220px;
      transition: 0.3s;
      z-index: 9999;
      animation: slideUp 0.8s ease;
    }
    #emotion-buddy:hover { transform: scale(1.05); }
    .emoji-display { font-size: 2rem; margin-bottom: 10px; }
    .mood-options { display: flex; justify-content: space-around; margin-top: 10px; }
    .mood-options button {
      border: none;
      background: none;
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.2s;
    }
    .mood-options button:hover { transform: scale(1.3); }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Handle mood selection
  const buttons = moodBox.querySelectorAll(".mood-options button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mood = btn.dataset.mood;
      localStorage.setItem("userMood", mood);
      showMotivation(mood);
    });
  });

  // Display message
  function showMotivation(mood) {
    const text = moodBox.querySelector(".mood-text");
    const emoji = moodBox.querySelector(".emoji-display");
    let message = "";

    switch (mood) {
      case "motivated":
        emoji.textContent = "💪";
        message = "You're on fire! Keep pushing forward!";
        break;
      case "tired":
        emoji.textContent = "😴";
        message = "Take it slow. One step at a time is progress too!";
        break;
      case "stressed":
        emoji.textContent = "😌";
        message = "Breathe in... You’re doing your best, and that’s enough.";
        break;
      case "neutral":
        emoji.textContent = "🙂";
        message = "Let’s make today productive — you got this!";
        break;
    }

    text.textContent = message;
  }

  // Load stored mood if any
  const savedMood = localStorage.getItem("userMood");
  if (savedMood) {
    showMotivation(savedMood);
  }
});
