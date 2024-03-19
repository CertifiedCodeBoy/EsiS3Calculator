let coef = document.getElementsByClassName("coef") 
let emd1 = document.getElementsByClassName("emd1") 
let emd2 = document.getElementsByClassName("emd2")
let td = document.getElementsByClassName("td")
let moy = document.getElementsByClassName("moy")
let mod = document.getElementsByClassName("mod")

let coef_res = document.getElementById("coef_result")
let emd1_res = document.getElementById("emd1_result")
let emd2_res = document.getElementById("emd2_result")
let td_res = document.getElementById("td_result")
let moy_res = document.getElementById("moy_result")
let inputs = document.getElementsByTagName("input")

let moy_sum = 0
let submit = document.getElementById("submit")
let average = document.getElementById("average")

submit.addEventListener("click", ()=>{
    let sum_coef = 0
    let sum_emd1 = 0
    let sum_emd2 = 0
    let sum_td = 0
    for (let i = 0; i < td.length; i++){
        sum_coef += parseInt(coef[i].value)
        sum_emd1 += parseInt(emd1[i].value) * parseInt(coef[i].value)
        sum_emd2 += parseInt(emd2[i].value) * parseInt(coef[i].value)
        sum_td += parseInt(td[i].value) * parseInt(coef[i].value)
    }

        coef_res.value = sum_coef
        emd1_res.value = (sum_emd1 / sum_coef).toFixed(2)
        emd2_res.value = (sum_emd2 / sum_coef).toFixed(2)
        td_res.value = (sum_td / sum_coef).toFixed(2)   
        update_moy()
        moy_sum = calc_moy_sum(moy, coef)
        moy_res.value = (moy_sum / sum_coef).toFixed(2)
        average.innerHTML = moy_res.value
    }
)

const update_moy = ()=>{
    for (let j = 0; j < mod.length; j++){
        moy[j].value = calc_moy(mod[j].innerHTML, parseFloat(emd1[j].value), parseFloat(emd2[j].value)
        , parseFloat(td[j].value))
    }
}


function calc_moy(mod, emd1, emd2, td){
    let Archi = ["Archi"]
    let Economie = ["Economie"]
    let mod33 = ["Analyse3", "Algebre3", "Proba", "English", "Sfsd","Elect"]
    if (Archi.includes(mod)){
        return (emd1 * .2 + emd2 * .4 + td * .4).toFixed(2)
    }
    if (Economie.includes(mod)){
        return (emd2 * .5 + td * .5).toFixed(2)
    }
    else if (mod33.includes(mod)){
        return (((emd1 + emd2 + td) / 3).toFixed(2)) 
    }
}
function calc_moy_sum(m, c){
    let sum = 0
    for(i = 0; i<m.length;i++ ){
        sum += m[i].value * c[i].value
    }
    return sum.toFixed(2)
}
