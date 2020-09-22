import React from 'react';
import axios from 'axios';
import './BuscaCep.css'

export default class BuscaCep extends React.Component{
  
  constructor(props) {
    super(props)

    this.state = {
        cidade: "",
        estado: "",
        endereco: "",
        faixaDeNumero: "",
        erro: ""
    }
  }

  buscarCep() {
    let cep = document.getElementById('cep');
    this.setState({erro: ""})
    if(cep.value < 3){
      this.setState({erro: "Cep inválido"})
    } else {
     
      let cepParaPesquisa = 'https://viacep.com.br/ws/' + cep.value + '/json'; 
      axios.get(cepParaPesquisa)
      .then(resp => {
        this.setState({cidade: resp.data.localidade});
        this.setState({estado: resp.data.uf})
        this.setState({endereco: resp.data.logradouro})
        this.setState({faixaDeNumero: resp.data.complemento})
      });
    }
  }

  render() {

    return (
      <div className="App">
        <head>
          <script src="./script/jquery-3.1.1.min.js"></script>
          <script src="./script/bootstrap.min.js"></script>
          <link rel="stylesheet" href="./script/bootstrap.min.css"></link>
          <title>Buscar Endereços</title>
        </head>
        <h1>Página que faz consultas na API Via Cep</h1>
          <div class="divGeral">
              <div class="column">
                  <label for="">Escolha um CEP que deseja informações</label>
                  <input type="text" placeholder="Digite um CEP válido" id="cep" data-mask="00000000" class="margemInput form-control" ></input>
                  <span value={this.state.erro} className="mensagemUsuario">{this.state.erro}</span>
                  <button id="botaoEnviar" onClick={() => this.buscarCep()} class="styleButton btn-primary btn">Buscar</button>
              </div>
      
              <div class="column">
                  <label for="">Cidade</label>
                  <input type="text" id="localidade" value={this.state.cidade} class="margemInput form-control" ></input>
                  <label for="">Estado</label>
                  <input type="text" id="estado" value={this.state.estado} class="margemInput form-control" ></input>
                  <label for="">Endereço</label>
                  <input type="text" id="logradouro" value={this.state.endereco} class="margemInput form-control" ></input>
                  <label for="">Faixa de Numero</label>
                  <input type="text" id="complemento" value={this.state.faixaDeNumero} class="margemInput form-control" ></input>
                  <a href="/Web2" id="sair">Sair</a>
              </div>
          </div>
      </div>
    );
  }
}
