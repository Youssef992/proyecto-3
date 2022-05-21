

const setGraph = async() => {
    const url = 'https://www.amiiboapi.com/api/amiibo/?';
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const labels = Object.keys(data.amiibo);
    console.log(labels);
    const convertData = Object.values(data.amiibo).map(item => item.character);
    console.log(convertData);

    const dataConfig={
        labels:labels,
        datasets:[{
            labels:'soy un tooltip',
            backgroundColor:'rgb(255,99,132)',
            borderColor:'rgb(255,99,132)',
            data: convertData
        }]
    }
    const config={
        type:'line',
        data: dataConfig,
        options:{
            scales:{
                y:{
                    beginAtZero:true
                }
            }
        }
    }

    const myChart= new Chart(
        document.getElementById('myCanvas'),
        config
    )
}
setGraph();