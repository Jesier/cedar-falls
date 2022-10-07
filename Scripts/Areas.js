import { getArea } from "./Database.js";

 export const areaList = () => {
const areas = getArea()

let areasHTML = '<article class="areas">'

    for (const area of areas) {

    areasHTML += `<div><img class="areaImg" src="${area.image}" width="500" height="333"></div>
    <h3 class="areaName">${area.name}</h3>
    
    `
    }
    areasHTML += `</article>`

    return areasHTML
}