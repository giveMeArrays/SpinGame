const wheelPrize = document.querySelector(".wheelPrize")
const controlCon = document.querySelector(".controlsCon")
const prizeRange = []
let betAmountPicker = document.getElementById("betAmount")
let betAmount = betAmountPicker.value
const Tick = new Audio('Assests/Audio/Tick.wav')
for (let i = 0; i <= 20; i++) {
    prizeRange.push(18 * i)
}

document.getElementById("spinButton").addEventListener("click", () => {
    betAmount = betAmountPicker.value
    console.log(betAmount)
    controlCon.style.pointerEvents = "none"
    let currentDegree = prizeRange[Math.floor(Math.random() * prizeRange.length)]
    if (currentDegree == 0) currentDegree = 360
    wheelPrize.style.transition = "none"
    wheelPrize.offsetWidth;
    wheelPrize.style.transform = `rotate(${currentDegree}deg)`
    wheelPrize.style.transition = "transform 3s";

    let interval = setInterval(() => {
        if (currentDegree % 18 != 0 || currentDegree < 0) {
            clearInterval(interval)
        }
        else {
            Tick.play()
            currentDegree -= 18
        }
    }, 300)

    setTimeout(() => {
        alert("winner")
        wheelPrize.style.transition = "transform 2s ease-out"
        wheelPrize.style.transform = "rotate(0deg)"
        controlCon.style.pointerEvents = "all"
        clearInterval(interval)
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




