const countryStateCityInfo = {
    Australia: {
        "Western Australia": {
            Broome: ["6725","6318","6701"],
            Coolgardie: ["6429","6432"]
        },
        Tasmania: {
            Hobart : ["7000","7520"],
            Launceston : ["7430","7560"],
            Burnie : ["7660","7310"]
        }
    },
    Germany: {
        Bavaria: {
            Munich: ["80331","80333","80335"],
            Munich: ["90331","90433","90435"]
        },
        Hessen: {
            Frankfurt: ["60303","60309","60310"],
            Surat: ["51236","52169","53210"]
        }
    },
    Canada: {
        Alberta: {
            Calgary: ["8033","8333","8035"],
            Calgary: ["9040","9333","9035"]
        }
    }
}

window.onload = function(){
    let selectCountry = document.querySelector("#country");
    let selectState = document.querySelector("#state");
    let selectCity = document.querySelector("#city");
    let selectZip = document.querySelector("#zip");
    let selectsAll = document.querySelectorAll("select");

    selectState.disabled = true;
    selectCity.disabled = true;
    selectZip.disabled = true;

    selectsAll.forEach(select => {
        if(select.disabled === true){
            select.style.cursor = "auto";
        }
        else{
            select.style.cursor = "pointer";
        }
    })

    for(let country in countryStateCityInfo){
        selectCountry.options[selectCountry.options.length] = new Option(country, country);
    }

    // change Country
    selectCountry.onchange = (e)=>{
        selectState.disabled = false;
        selectCity.disabled = true;
        selectZip.disabled = true;

        selectsAll.forEach(select => {
            if(select.disabled === true){
                select.style.cursor = "auto";
            }
            else{
                select.style.cursor = "pointer";
            }
        })

        selectState.length = 1;
        selectCity.length = 1;
        selectZip.length = 1;

        for(let state in countryStateCityInfo[e.target.value]){
            selectState.options[selectState.options.length] = new Option(state, state)
        }

    }
    // change state

    selectState.onchange = (e)=>{
        selectCity.disabled = false;
        selectZip.disabled = true;

        selectsAll.forEach(select => {
            if(select.disabled === true){
                select.style.cursor = "auto";
            }
            else{
                select.style.cursor = "pointer";
            }
        })

        selectCity.length = 1;
        selectZip.length = 1;

        for(let city in countryStateCityInfo[selectCountry.value][e.target.value]){
            selectCity.options[selectCity.options.length] = new Option(city, city)
        }

    }

    // change city

    selectCity.onchange = (e)=>{
        selectZip.disabled = false;

        selectsAll.forEach(select => {
            if(select.disabled === true){
                select.style.cursor = "auto";
            }
            else{
                select.style.cursor = "pointer";
            }
        })

        selectZip.length = 1;

        let zips =  countryStateCityInfo[selectCountry.value][selectState.value][e.target.value]
        for (let i=0; i<zips.length; i++){
            selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
        }
    }

}
