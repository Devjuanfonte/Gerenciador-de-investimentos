
let acaoBox = document.querySelector(".firstBox");   // adicionando o botão da aba ação em uma variável
let fiiBox = document.querySelector(".secondBox");   // adicionando o botão da aba fii em uma variável

acaoBox.addEventListener("click",()=>{
   let acaoContent = document.querySelector("#açao");
   let fiiContent = document.querySelector("#fii");
    fiiContent.style.display = "none"; 
    acaoContent.style.display = "flex"; 

    fiiBox.classList.remove('active');
    acaoBox.classList.add('active');
  
})
fiiBox.addEventListener("click",()=>{
    let acaoContent = document.querySelector("#açao");
    let fiiContent = document.querySelector("#fii");
 
    fiiContent.style.display = "flex"; 
    acaoContent.style.display = "none"; 

    acaoBox.classList.remove('active');
    fiiBox.classList.add('active');
 })