// alert("Cool chicks rise up!!!")

// Feeling Loopy Continued


let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"


let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cell = 1
// let row = 1

for (let i = 0; i < csvStr.length; i++) {

  if (csvStr[i] === ','){
    cell++
    continue
  }

  if (csvStr[i] === "\n") {
    cell = 1
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    continue
  }

  switch (cell) {
    case 1:
      cell1 += csvStr[i]
    break
    case 2:
      cell2 += csvStr[i]
    break
    case 3:
      cell3 += csvStr[i]
    break
    case 4:
      cell4 += csvStr[i]
    break
  }

  if (cell === 4 && csvStr[i + 1] === '\n' || i + 1 === csvStr.length) {
    console.log(cell1, cell2, cell3, cell4);
  }

}
//******************************************* */
//Refactoring old code

const id = [42, 57, 63, 98]
const people = ["Bruce", "Bob", "Blaine", "Bill"]
const occupation = ["Knight", "Fry Cook", "Quiz Master", "Doctors Assistand"]
const age = [41, 19, 58, 26]

console.log("ID", "Name", "Occupation", "Age")
for (let i = 0; i < id.length; i++) {
console.log(id[i] + " " + people[i] + " " + occupation[i] + " " + age[i])
}

// Need to work on this, this doesn't look reusable if needed to be

// Expanding Functionality 

