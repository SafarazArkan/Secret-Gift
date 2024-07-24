let currentMessageIndex = 0;

const messages = [
    "HAYIEEEEE CANTIKKKK??",
    "cieee adaa yang sudaaa 16 tahunn ajaaa ni yaaaa",
    "selamattt ulang tahunn yaaaa nonaa manisnyaaa akuuu, semogaaa apaaa yang kamuu harapkannn segeraa terkabulkann <33",
    "i've grateful to met you in my life babe, i wish we will always be together like this",
    "hari iniii sangatlah hari yang sangat spesial buat kamu, semoga hari ini bisa menjadii harii terbaiknyaa kamuu seduniaa yaaaa!!",
    "dan semoga small present darii akuu inii bisaaa bikin kamuu seneng yaaa cantikk :D",
    "selaluuu ingett jugaaa yaaaa sayangggg",
    "mauuu sesulitt apapunn keadaannn kamuuu nantiii, jangann lupaaa untuk libatinn akuuu yaaa dalamm setiap peristiwa yang ada di dalam hidup kamu okkeiii??",
    "kalnaaa kamuu sendiriii yang bilanggg kasiannn lumahnyaaa kaloo tidaaa ditempatinnn kannn",
    "akuuu sayanggg bangettt samaaa kamuuu melebihiii apapunnn ituuuu",
    "i love you so much semestanya aku, i love you more than everything."
];

function changeMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = messages[currentMessageIndex];
    
    // Update index for next message
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

function createFlower() {
    const container = document.querySelector('.container');
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${Math.random() * 2 + 3}s`;
    container.appendChild(flower);
    
    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlower, 1000);

// Set initial message
document.addEventListener("DOMContentLoaded", function() {
    changeMessage();
});
