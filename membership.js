
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let memberName = ' '

submitNameBtn.onclick=function(){
  memberName = inptFirstName.value
  if (members.includes(memberName, 0)) {
  members.push(memberName)
  lblPopUp.textContent = `The list of members is ${members}.`
} else {
  lblPopUp.textContent = `Sorry, you are not a member.`
  }
}
