
let accountName = ""

btnSubmit.onclick=function(){
  accountName = inptAccount.value
  let pass = inptPassword.value
  if ((accountName == "Smith") && (pass == "123Dogs#"))
    ChangeForm(welcome)
  else    
    NSB.MsgBox("That login is not recognised. Please try again.")
    inptAccount.value = ""
    inptPassword.value = ""
}
