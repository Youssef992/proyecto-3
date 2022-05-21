const getAmiibo = async () => {
    const url = 'https://www.amiiboapi.com/api/amiibo/?';
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    var amiiboContainer = document.getElementById('container');
    amiiboContainer.innerHTML = "";
    var cadena="";
    var i = 0;
    data.amiibo.forEach((amiibo, index) => {
        if (i <= 50) {
            cadena += `
            <div class="col-3">
                <div class="card">
                    <img src="${amiibo.image}" alt="${amiibo.character}" class="card-img-top" id="amiibo-img">
                    <div class="card-body">
                        <h5 class="card-title">${amiibo.name}</h5>
                        <p class="card-text"><b>Game Series:</b> ${amiibo.gameSeries}</p>
                    </div>
                </div>
            </div>
            `
            i++;
        }
    });
    amiiboContainer.innerHTML = `<div class="row">`+cadena+`</div>`;
    //setGraph(data)
}

const buscaAmiibo= async()=>{
    var textoAmiibo=document.getElementById('inputSearch').value;
    const url = 'https://www.amiiboapi.com/api/amiibo/?character='+textoAmiibo;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    var amiiboContainer = document.getElementById('container');
    amiiboContainer.innerHTML = "";
    var cadena="";
    var i = 0;
    data.amiibo.forEach((amiibo, index) => {
        if (i <= 50) {
            cadena += `
            <div class="col-6">
                <div class="card">
                    <img src="${amiibo.image}" alt="${amiibo.character}" class="card-img-top" id="amiibo-img">
                    <div class="card-body">
                        <h5 class="card-title">${amiibo.character}</h5>
                        <p class="card-text"><b>Game Series:</b> ${amiibo.gameSeries}</p>
                    </div>
                </div>
            </div>
            `
            i++;
        }
    });
    amiiboContainer.innerHTML = `<div class="row">`+cadena+`</div>`;
    
}
getAmiibo();