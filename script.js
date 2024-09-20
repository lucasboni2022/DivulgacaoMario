/*console.log("funcionou") */
 /*para colocar uma informação na tela*/

 /*
 function cliqueiNoBotao(){ AUla 07 javascript comentar as mascaras e css e html
    alert("Voce cricou no botão")
 }
 */

 /*aula 8 */
const formulario = document.querySelector(".fale-conosco")
 /**toda vez que vc queracessar algo dentro do html usa document.
querySelector selecionar o documento
(".fale-conosco") a classe que quer usar*/

/* testando...
 function MostrarForm(){
   console.log(formulario)
 }
   */
const mascara  = document.querySelector(".mascara-formulario")

 function mostrarForm(){
   formulario.style.left = "50%"
   formulario.style.transform = "translatex(-50%)"
   mascara.style.visibility = "visible"
 }

 function esconderForm(){
   formulario.style.left = "-300px"
   formulario.style.transform = "translatex(0%)"
   mascara.style.visibility = "hidden"
 }
