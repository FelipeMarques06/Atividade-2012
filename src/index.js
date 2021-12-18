import homePage from "./moduloInferface.js";

document.getElementById("listaAlunos").innerHTML = homePage.montarListagemAlunos();
document.getElementById("genero").innerHTML= homePage.exibirGenero();

const filtro = document.getElementById("btFiltro");
filtro.addEventListener("click", (event)=>{
  let nome = document.getElementById("nome").value;
  if(nome===""){
    alert("Nome não pode estar vazio para filtrar!");
  } else{
    document.getElementById("filtroAlunos").innerHTML = homePage.filtroAlunos(nome);
  }
})

const adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", (event)=>{
  let nome = document.getElementById("nome").value,
  sobrenome = document.getElementById("sobrenome").value,
  nascimento = document.getElementById("nascimento").value,
  rg = document.getElementById("rg").value,
  cpf = document.getElementById("cpf").value,
  genero = document.getElementById("genero").value,
  renda = document.getElementById("renda").value,
  generoAdd = document.getElementById("generoAdd").value

  if(nome==="" || sobrenome==="" || nascimento==="" || rg ==="" || cpf ==="" || renda === ""){
    alert("Os campos não podem ficar em branco");
  } else{
    document.getElementById("listaAlunos").innerHTML = homePage.adicionarAluno(nome,sobrenome,nascimento,rg,cpf, genero, renda, generoAdd);
  }
})

const chamada = document.getElementById("btChamada");
chamada.addEventListener("click", (event)=> {
  document.getElementById("listaChamada").innerHTML = homePage.montarChamada()}
  );

const imprimir = document.getElementById("btImprimir");
imprimir.addEventListener("click", (event)=>{
  let novaJanela = window.open('', '', 'height=500, width=800');
  novaJanela.document.write('<html>');
  novaJanela.document.write('<body> <h2>Lista de presença:</h2>');
  novaJanela.document.write(homePage.montarChamada());
  novaJanela.document.write('</body></html>');
  novaJanela.document.close();
  novaJanela.print();
})

  