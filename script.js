let time = 8 
let score = 0 
let isPlaying 

const currentWord = document.querySelector('#current-word') 
const wordInput = document.querySelector('#word-input') 
const message = document.querySelector('#message') 
const timeDisplay = document.querySelector('#time') 
const scoreDisplay = document.querySelector('#score') 
const seconds = document.querySelector('#seconds') 

const words = [
    'astronomically',
    'admissible',
    'bestialities',
    'bicarbonate',
    'calcimining',
    'cautionary',
    'deactivation',
    'development',
    'equilibrating',
    'establishment',
    'fraternization',
    'forcefulnesses',
    'glamorously',
    'gynecologists',
    'hallucinations',
    'hospitalities',
    'interventionist',
    'irregularities',
    'journalistic',
    'joyfulness',
    'lactobacilli',
    'lacerations',
    'matriculation',
    'melodramatic',
    'nonconventional',
    'nutritionists',
    'obliviousness',
    'organizations',
    'parsimonious',
    'predicament',
    'representation',
    'romanization',
    'schizophrenia',
    'systematization',
    'transmissible',
    'tropicalized',
    'unstandardized',
    'underpayment',
    'videoconference',
    'weaponizing',
    'willingness',
    'xenophobias',
    'xerographic',
    'yourselves',
    'youthfulness',
    'zombification',
    'zoogeography'
];

window.onload = function start(){
    showWord(words)

    wordInput.addEventListener('input', startMatch)

    setInterval(countdown,1000)
    setInterval(checkStatus, 50)
}

function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randIndex]
}

function startMatch(){
    if(matchWords()){
        isPlaying = true
        time = 9
        showWord(words)
        wordInput.value = ''
        score++
    }

    if(score === -1){
        scoreDisplay.innerHTML = 0
    }else{
        scoreDisplay.innerHTML = score
    }
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!'
        return true
    }else{
        message.innerHTML = '';
        return false
    }
}

function countdown(){
    if(time > 0 ){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!'
        score = -1
    }
}