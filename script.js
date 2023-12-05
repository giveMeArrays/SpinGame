const wheelPrize = document.querySelector(".wheelPrize")
const controlCon = document.querySelector(".controlsCon")
const prizeRange = []
let betAmountPicker = document.getElementById("betAmount")
let betAmount = betAmountPicker.value
let multiplier = 0
let currentDegreeSound = 0
const Tick = new Audio('Assests/Audio/Tick.wav')
for (let i = 1; i <= 20; i++) {
    prizeRange.push(18 * i)
}
console.log(prizeRange)
document.getElementById("spinButton").addEventListener("click", () => {
    betAmount = betAmountPicker.value
    controlCon.style.pointerEvents = "none"
    let currentDegree = prizeRange[Math.floor(Math.random() * prizeRange.length)]
    currentDegreeSound = currentDegree
    wheelPrize.style.transition = "none"
    wheelPrize.offsetWidth;
    wheelPrize.style.transform = `rotate(${currentDegree}deg)`
    wheelPrize.style.transition = "transform 3s";
    if(currentDegree == 36 || currentDegree == 180 || currentDegree == 324) multiplier = 1.25
    if(currentDegree == 72 || currentDegree == 144 || currentDegree == 216 || currentDegree == 288) multiplier = 1.5
    if(currentDegree == 252 || currentDegree == 108) multiplier = 1.75
    if(currentDegree == 360) multiplier = 2
    let interval = setInterval(() => {
        if (currentDegreeSound % 18 != 0 || currentDegreeSound < 0) {
            clearInterval(interval)
        }
        else {
            Tick.play()
            currentDegreeSound -= 18
        }
    }, 300)

    setTimeout(() => {
        console.log(currentDegree)
        if (multiplier != 0) alert(`winner; You win ${betAmount * multiplier}`)
        else alert("loser")
        wheelPrize.style.transition = "transform 2s ease-out"
        wheelPrize.style.transform = "rotate(0deg)"
        controlCon.style.pointerEvents = "all"
        clearInterval(interval)
        multiplier = 0
    }, 3000)
})

document.getElementById('betAmount').addEventListener('input', function () {
    const maxVal = parseInt(this.max)
    const minVal = parseInt(this.min)
    if (parseInt(this.value) > maxVal) {
        this.value = maxVal
    }
    else if (parseInt(this.value) < minVal) {
        this.value = minVal
    }
});




