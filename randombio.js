const bios = [
    "STREAM MAYHEM BY LADY GAGA\nMARCH 7TH, 2025",
    "dimmable light",
    "знайшла себе в списку депортації з україни",
    "BOMB FLOPBERRY UNCREATIVE",
    "hi",
    "stan lady gaga",
    "life is short, so spend most of it arguing with random people on the internet"
];

const randomBio = bios[Math.floor(Math.random() * bios.length)];

const paragraphForBio = document.getElementById("bio");

paragraphForBio.innerText = "STREAM MAYHEM BY LADY GAGA\nMARCH 7TH, 2025";
