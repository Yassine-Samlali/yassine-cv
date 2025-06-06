document.addEventListener("DOMContentLoaded", function () {
  // Typed.js effect for the name
  const name = "YASSINE SAMLALI";
  const typeSpeed = 120;
  const backSpeed = 120;
  const startDelay = 500;
  const backDelay = name.length * typeSpeed + 500;

  new Typed("#typed-name", {
    strings: [name],
    typeSpeed: typeSpeed,
    backSpeed: backSpeed,
    showCursor: true,
    cursorChar: "|",
    loop: true,
    backDelay: backDelay,
    startDelay: startDelay,
    smartBackspace: false
  });

  // Matrix effect
  // Create a canvas and append it to the body as a background
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '-1'; // Push canvas behind all content
  canvas.style.pointerEvents = 'none';
  canvas.style.opacity = 0.5; // Increased opacity for more visibility
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const letters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const fontSize = 22; // Larger font for more visibility
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.10)"; // Lighter fade for trails
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = "#00ff41";
    ctx.shadowColor = "#00ff41";
    ctx.shadowBlur = 8; // Glow effect for more visibility
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    ctx.shadowBlur = 0; // Reset shadowBlur after drawing
  }

  setInterval(drawMatrix, 40); // Faster refresh for smoother effect

  // Responsive canvas
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
});