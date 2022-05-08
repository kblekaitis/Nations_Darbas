"use strict"

var metrai = 1000000
var nations = [{}, {}, {}, {}, {}]
var nations = [
    {name:"Portugalija", area:92212, pop:10344802},
    {name: "Lietuva", area:65300, pop: 2795680},
    {name: "Šiaurės Makedonija", area:25713, pop: 1836713},
    {name: "Italija", area:301230, pop: 60317116},
    {name: "Serbija", area:88361, pop: 7186862}
]

for(var i = 0; i < nations.length; i++){
    console.log("Šalis: " + nations[i].name + ", joje gyvena " + (nations[i].pop/1000000).toFixed(2) + " mln. gyventojų. Valstybės plotas: " + nations[i].area + " km², plotas tenkantis vienam gyventojui: " + ((nations[i].area*metrai)/nations[i].pop).toFixed(2) + " m².")
}


