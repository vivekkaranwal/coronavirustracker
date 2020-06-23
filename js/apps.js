$(document).ready(()=>{
    let url = "https://api.covid19api.com/summary";
    $.getJSON(url, function(data){
        let countri = [];
        let newConfirmed = [];
        let tatolConfirmed = [];
        let newRecovered = [];
        let totalRecovered = [];
        let newDeaths = [];
        let totalDeaths = [];
        $("#countery").append("Global")
        $('#NewConfirmeds').append(data.Global.NewConfirmed);
        $('#TotalConfirmeds').append(data.Global.TotalConfirmed);
        $('#NewRecovereds').append(data.Global.NewRecovered);
        $('#TotalRecovereds').append(data.Global.TotalRecovered);
        $('#NewDeathss').append(data.Global.NewDeaths);
        $('#TotalDeathss').append(data.Global.TotalDeaths);

        
        $.each(data.Countries,function(id, obj){
           
             countri.push(obj.Country);
             newConfirmed.push(obj.NewConfirmed);
             tatolConfirmed.push(obj.TotalConfirmed)
             newRecovered.push(obj.NewRecovered);
             totalRecovered.push(obj.TotalRecovered);
             newDeaths.push(obj.NewDeaths);
             totalDeaths.push(obj.TotalDeaths)
            
             
        })
        for(x = 0; x < countri.length; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = countri[x];
            $("#SateCase").append(newDiv);
            }
        for(x = 0; x < newConfirmed.length; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = newConfirmed[x];
            $("#NewConfirmed").append(newDiv);
        }
        for(x = 0; x < tatolConfirmed.length; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = tatolConfirmed[x];
            $("#TotalConfirmed").append(newDiv);
        }
        for(x = 0; x < newRecovered.length; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = newRecovered[x];
            $("#NewRecovered").append(newDiv);
        }
        for(x = 0; x < totalRecovered.length; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = totalRecovered[x];
            $("#TotalRecovered").append(newDiv);
        }
        for(x = 0; x < newDeaths.length; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = newDeaths[x];
            $("#NewDeaths").append(newDiv);
        }
        for(x = 0; x < totalDeaths.length; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = totalDeaths[x];
            $("#TotalDeaths").append(newDiv);
        }
    })

})