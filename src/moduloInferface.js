import alunos from "./moduloDados.js";

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  w=window.open();
  w.document.write(printContents);
  w.print();
  w.close();
}

class PaginaModelo {
  constructor(titulo, corpo) {
    this.titulo = titulo;
    this.corpo = corpo;
  }
  montarListagemAlunos() {
    let listagemHtml = "<ol>";
    alunos.forEach((alunos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      listagemHtml += `<li class="${corItem}"> | Nome: ${alunos.nome} ${
        alunos.sobrenome
      } | 
      Nascimento: ${alunos.nascimento} 
       | Genero: ${alunos.genero} | Renda: ${alunos.renda.toFixed(2)} Margem: 
       ${this.calcularMargem(0.3, alunos.renda).toFixed(2)}</li>`;
    });
    listagemHtml += "</ol>";
    return listagemHtml;
  }
  calcularMargem(taxa, renda) {
    return renda * taxa;
  }
  exibirGenero() {
    let opcoesHtml = "";
    const genero = alunos.map((alunos) => alunos.genero);
    const opcoesGenero = [...new Set(genero)];
    opcoesGenero.forEach((opcoesGenero) => {
      opcoesHtml += `<option value="${opcoesGenero}">
      ${opcoesGenero.toUpperCase()}</option>`;
    });
    return opcoesHtml;
  }
  filtroAlunos(nome) {
    let filtroHtml = "<ol>";
    const filtroAlunos = alunos.filter((alunos) => alunos.nome === nome);
    filtroAlunos.forEach((filtroAlunos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      filtroHtml += `<li class="${corItem}"> | Nome: ${filtroAlunos.nome} 
      ${filtroAlunos.sobrenome} | Nascimento: ${filtroAlunos.nascimento} | 
      Genero: ${filtroAlunos.genero} | Renda: ${filtroAlunos.renda.toFixed(
        2
      )} | 
      ${this.calcularMargem(0.3, filtroAlunos.renda).toFixed(2)} </li>`;
    });
    filtroHtml += "</ol>";
    return filtroHtml;
  }
  adicionarAluno(nome,sobrenome,nascimento,rg,cpf,genero,renda,generoAdd) {
    let adicionarHtml = "<ol>";
    if (generoAdd !== "") {
      genero = generoAdd;
    }
    alunos.splice(alunos.length, 0, {
      id: alunos.length + 1,
      nome: nome,
      sobrenome: sobrenome,
      nascimento: nascimento,
      rg: rg,
      cpf: cpf,
      genero: genero,
      renda: renda
    });
    alunos.forEach((alunos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      adicionarHtml += `<li class="${corItem}"> | Nome: ${alunos.nome} ${
        alunos.sobrenome
      } | 
      Nascimento: ${alunos.nascimento} 
       | Genero: ${alunos.genero} | Renda: ${alunos.renda} Margem: 
       ${this.calcularMargem(0.3, alunos.renda).toFixed(2)}</li>`;
    });
    adicionarHtml += "</ol>";
    return adicionarHtml;
  }
  montarChamada(){
    let chamadaHtml = "<ol>";
    const nomeCompleto = alunos.map((alunos=>`${alunos.nome} ${alunos.sobrenome}`));
    nomeCompleto.sort();
    nomeCompleto.forEach((nomeCompleto, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      chamadaHtml += `<li class="${corItem}">${nomeCompleto}</li>`;
    });
    chamadaHtml += "</ol>";
    return chamadaHtml;
  }
}

const homePage = new PaginaModelo("Home Projeto Sala Invertida", "");
export default homePage;
