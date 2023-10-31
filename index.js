let nome = 'dimiti'
let xpDoHeroi = 4500

if (xpDoHeroi < 1000) {
    console.log(`O Herói de nome ${nome}, está no nível Ferro`)
} else if (xpDoHeroi > 1001 && xpDoHeroi < 2000) {
    console.log(`O Herói de nome ${nome}, está no nível Bronze`)
} else if (xpDoHeroi > 2001 && xpDoHeroi < 5000) {
    console.log(`O Herói de nome ${nome}, está no nível Pranta`)
} else if (xpDoHeroi > 6001 && xpDoHeroi < 7000) {
    console.log(`O Herói de nome ${nome}, está no nível Ouro`)
} else if (xpDoHeroi > 7001 && xpDoHeroi < 8000) {
    console.log(`O Herói de nome ${nome}, está no nível Platina`)
} else if (xpDoHeroi > 8001 && xpDoHeroi < 9000) {
    console.log(`O Herói de nome ${nome}, está no nível Ascendente`)
} else if (xpDoHeroi > 9001 && xpDoHeroi < 10000) {
    console.log(`O Herói de nome ${nome}, está no nível Imortal`)
} else if (xpDoHeroi >= 10001) {
    console.log(`O Herói de nome ${nome}, está no nível Radiante`)
}
