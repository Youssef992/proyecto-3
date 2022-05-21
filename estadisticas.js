var ctx= document.getElementById("myChart").getContext("2d");
var myChart= new Chart(ctx,{
    type:"pie",
    data:{
        labels:["Super Mario","Yoshi's Woolly World","Donkey Kong","The Legend of Zelda","Breath of the Wild","Animal Crossing","Star Fox","Metroid","F-Zero","Pikmin","Punch Out","Wii Fit","Kid Icarus","Classic Nintendo","Mii","Splatoon","Mario Sports Superstars","ARMS","Pokemon","Kirby","BoxBoy!","Fire Emblem","Xenoblade","Earthbound","Chibi Robo","Sonic","Bayonetta","Pac-man","Dark Souls","Megaman","Street fighter","Monster Hunter","Shovel Knight","Final Fantasy","Dragon Quest","Kellogs","Metal Gear Solid","Castlevania","Power Pros","Yu-Gi-Oh!","Diablo","Persona","Banjo Kazooie","Fatal Fury"],
        datasets:[{
            label:'Num datos',
            data:[10,9,15],
            backgroundColor:[
                'rgb(66,134,244)',
                'rgb(74,135,72)',
                'rgb(229,89,50)',
            ]
        }]
    }
})
// const setGraph = async() => {
//     const url = 'https://www.amiiboapi.com/api/amiibo/?';
//     const response = await fetch(url);
//     //console.log(response);
//     const data = await response.json();
//     //console.log(data);
//     const labels = Object.keys(data.amiibo);
//     console.log(labels);
//     const convertData = Object.values(data.amiibo).map(item => item.character);
//     console.log(convertData);

//     const dataConfig={
//         labels:labels,
//         datasets:[{
//             label:[{lab}],
//             backgroundColor:'rgb(255,99,132)',
//             borderColor:'rgb(255,99,132)',
//             data: [convertData]
//         }]
//     }
//     console.log(dataConfig);
//     const config={
//         type:'line',
//         data: dataConfig,
//         options:{
//             scales:{
//                 y:{
//                     beginAtZero:true
//                 }
//             }
//         }
//     }

//     const myChart= new Chart(
//         document.getElementById('myCanvas'),
//         config
//     )
// }
// setGraph();