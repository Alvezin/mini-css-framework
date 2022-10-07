import props from './data/CssProps.js'

let body = document.querySelectorAll('body *')
let styleList = new Array()

function setAtributes(element){
    element.classList.forEach(el => {

        const data = el.split('-')
        const property = data[0]
        const atribute = data.splice(1)
    
        styleList.push(`${props[property]} ${atribute.join(' ')}`)

    })
    element.style = styleList.join('; ')
    styleList = []

}

function checkNodeClassList(NodeArray){
    NodeArray.forEach(el=>{
        if(el.classList) setAtributes(el)
    })
}

document.addEventListener('DOMContentLoaded',
    checkNodeClassList(body)
)





