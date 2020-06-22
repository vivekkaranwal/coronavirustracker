$(document).ready(()=>{
   var url ="https://api.covid19india.org/data.json";
   $.getJSON(url, function(data){

       var states = [];
       var confirmed = [];
       var Deaths =[];
       var recovered = [];
       var Active = [];
       $.each(data.statewise,function(id, obj){
           states.push(obj.state);
           confirmed.push(obj.confirmed);
           recovered.push(obj.recovered);
           Deaths.push(obj.deaths);
           Active.push(obj.active);
       })
      
        for(x = 0; x < 1000; x++) {
        newDiv = document.createElement('p');
        newDiv.textContent = confirmed[x];
        $("#confrimedcase").append(newDiv);
        }
        
        for(x = 0; x < 1000; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = Active[x];
            $("#activecase").append(newDiv);
            }
        for(x = 0; x < 1000; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = Deaths[x];
            $("#Deathcase").append(newDiv);
            } 
        for(x = 0; x < 1000; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = recovered[x];
            $("#recover").append(newDiv);
            } 
        for(x = 0; x < 1000; x++) {
            newDiv = document.createElement('p');
            newDiv.textContent = states[x].substr(0,15);
            $("#SateCase").append(newDiv);
            }     
   })
    
})