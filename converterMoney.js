const baseUrl ='http://data.fixer.io/api/';
const res = document.getElementById('res')
fetch(`${baseUrl}/latest?access_key=b2363d8b2a90c7933e433c401cb7609f`, {
}).then(response => response.json())
     .then(json=>json.rates)
    .then(rates=> {
        let allCodes=Object.keys(rates);
        for (let i=0; i<allCodes.length;i++) {
            const option = document.createElement('option')
            option.text = allCodes[i];
            option.value = allCodes[i];
            from.append(option);
            to.add(new Option(allCodes[i], allCodes[i]));
        }
    })

calc.onclick = function () {
        fromCODE = from.value,
        toCODE =  to.value,
        sumVal =sum.value.trim(),
    fetch(`${baseUrl}/latest?access_key=b2363d8b2a90c7933e433c401cb7609f&symbols=${fromCODE},${toCODE}`, {
    })
        .then(response=> {
            if(response.ok){
                return response.json();
            } else {
                throw new Error(''+response.status);
            }
        })
        .then(json=>json.rates)
        .then(rats=>{
            let codes = Object.keys(rats)
            let values = Object.values(rats)
            let fromVal;
            let toVal
            for (let i=0; i<codes.length;i++){
                if(codes[i]===fromCODE){
                    fromVal = values[i];
                    console.log(fromVal)
                }
                if(codes[i]===toCODE){
                    toVal = values[i];
                    console.log(toVal)
                }
            }
            let result = (toVal/fromVal)*sumVal
            res.textContent =result;

        })
        .catch(e=>console.log(e.message));
}