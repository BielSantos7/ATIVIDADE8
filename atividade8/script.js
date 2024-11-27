dq = (el) => {
   return document.querySelector(el)
}

const nomeEl = dq("#name"); 
const emailEl = dq("#email");
const passEl = dq("#pass");
const paisEl = dq("#countries")
const comentEl = dq("#text")
const btnEl = dq("#btn-submit");


btnEl.addEventListener("click", (e) => {
   e.preventDefault()
   const paisElValue = paisEl.value
   const nomeElValue = nomeEl.value;
   const emailElValue = emailEl.value;
   const passElValue = passEl.value;


   if(!nomeElValue || !emailElValue || !passElValue) {
      alert("Preencha os campos necessários!")
      return
   } else {
      dq("h2").innerHTML = "Formulário Enviado Com Sucesso!"
      dq("h2").style.color = "#00FF00"
      const areaForm = dq(".area-form").innerHTML = `
      Seu nome é: ${nomeElValue}<br/>
      Seu email é: ${emailElValue}<br/>
      Seu pais é: ${paisElValue}<br/>

      `
   }
})