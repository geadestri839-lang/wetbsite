// 🎵 Kontrol Musik
const playBtn = document.getElementById('play-btn');
const music = document.getElementById('bg-music');

playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = '⏸️ Pause Music';
  } else {
    music.pause();
    playBtn.textContent = '🎵 Play Music';
  }
});

// ✨ Efek fade-in pas scroll
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// 💖 Opening animation
const startBtn = document.getElementById('startBtn');
const opening = document.getElementById('opening');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {
  opening.classList.add('fade-out');
  setTimeout(() => {
    opening.style.display = 'none';
    mainContent.classList.remove('hidden');
    bgMusic.play();
    document.body.style.overflow = 'auto';
  }, 1000);
});

// 💌 Pesan Interaktif
const noteInput = document.getElementById("noteInput");
const sendNote = document.getElementById("sendNote");
const noteArea = document.getElementById("noteArea");

sendNote.addEventListener("click", () => {
  const text = noteInput.value.trim();

  if (text === "") {
    alert("Isi dulu pesannya yaa 💕");
    return;
  }

  // Buat elemen pesan baru
  const newNote = document.createElement("div");
  newNote.classList.add("note-message");
  newNote.textContent = text;

  // Animasi muncul pelan-pelan
  newNote.style.opacity = 0;
  noteArea.appendChild(newNote);

  setTimeout(() => {
    newNote.style.transition = "opacity 0.8s ease";
    newNote.style.opacity = 1;
  }, 100);

  // Kosongkan input setelah dikirim
  noteInput.value = "";
});