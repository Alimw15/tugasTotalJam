let jam = [2,2,3,3,1,4,5]
let totalJam = 0
let totalMelebihiBatas = 0

for(let i=1; i<jam.length;i++){
    totalJam += jam[i]
    if(jam[i] <= 2){
        totalJam++;
    }else(
        totalMelebihiBatas++
    )
}

console.log(`total jam : `+ totalJam)
console.log(`total melebihi batas : `+ totalMelebihiBatas)
