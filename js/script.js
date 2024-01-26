let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiseSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]

    voices.forEach((voice, i) => (voiseSelect.options[i] = new Option(voice.name, i)))
}

voiseSelect.addEventListener("change", () => 
{
        speech.voice = voices[voiseSelect.value]
})
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});