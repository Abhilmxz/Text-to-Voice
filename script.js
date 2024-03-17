let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceselect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    voices.forEach((voices, i) => (voiceselect.options[i]) = new Option (voices.name, i));
};

voiceselect.addEventListener("change", () =>{
   speech.voice = voices[voiceselect.value]
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});