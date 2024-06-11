const audioFiles = ['audio/1.mp3', 'audio/2.mp3', 'audio/3.mp3', 'audio/4.mp3', 'audio/5.mp3', 'audio/6.mp3', 'audio/7.mp3', 'audio/8.mp3']; // Add more file names as needed

function play() {
    // Select a random audio file from the array
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedAudio = audioFiles[randomIndex];

    // Create a new Audio object with the selected file
    const audio = new Audio(selectedAudio);
    audio.loop = true; // Set the audio to loop
    audio.play().catch(error => {
        console.error("Audio playback failed:", error);
    });

    // Optional: Log the selected audio file to the console
    console.log("Playing:", selectedAudio);
}

// Assuming `enter` is a function defined in `index.js`
// If it's not already defined, you can define it here or in `index.js`
function enter() {
    const enterModal = document.getElementById('enterModal');
    enterModal.style.display = 'none';
}
