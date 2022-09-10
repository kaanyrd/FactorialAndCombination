let factoDOM = document.querySelector("#factoForm")
const factorial = document.querySelector("#factoInput")
factoDOM.addEventListener("submit", factoSubmit)


function factoSubmit(event){
event.preventDefault()
let number = Number(factorial.value)


if(number > 0){
    let input = BigInt(1)
    for(let n = BigInt(1); n<=number; n++){
        input *=n
    }
    addResult(`${factorial.value} => SAYISININ FAKTÖRİYEL SONUCU = ${input}`)
    console.log(`${factorial.value} => SAYISININ FAKTÖRİYEL SONUCU = ${input}`)
    factorial.value = ""

}
else if(number === 0){
    addResult(`0 => SAYISININ FAKTÖRİYEL SONUCU = ${1}`)
    factorial.value=""
    console.log(`0 SAYISININ FAKTÖRİYEL SONUCU BULUNDU: ${1}`)



    
}
else{
    let alertDOM = document.querySelector("#alert")
    let alert = document.createElement("h6")
    alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>HATALI GİRİŞ!</strong> Faktöriyelini hesaplamak için geçerli sayılar giriniz... <strong>(SIFIR VEYA POZİTİF TAMSAYILAR)<strong> 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
  </div>`
    alert.classList.add("alert-danger", "pl-3")
    alert.style["text-align"]="center"
    alertDOM.append(alert)
}
}
// VERİ EKLEME
let factoListDOM = document.querySelector("#factoList")

let addResult = (facto) => {
let liDOM = document.createElement("li")
liDOM.innerHTML = `${facto}`
liDOM.classList.add("list-group-item", "text-danger")
liDOM.style["background-color"]="#d5e1df";
factoListDOM.append(liDOM)
}

// VERİ SİLME
let deleteButton = document.querySelector("#factoDelete")
deleteButton.addEventListener("click", deleteItem)

function deleteItem(silmeventi){
silmeventi.preventDefault()
console.log("işlem gerçekleştirildi")

factoListDOM.removeChild(factoListDOM.lastChild)

}