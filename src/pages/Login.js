import React from 'react'
import axios from 'axios'
import './stylesLogin.css'

export default class Login extends React.Component {

    state = {
        usuarios: [],
        login: "",
        senha: "",
        loginC: "",
        senhaC: "",
        confirmarSenha: "",
        erro: ""
    };


//certo

    cliqueLogin = async e => {
        e.preventDefault();
        const { login, senha } = this.state;

        console.log(login)
        console.log(senha)
        if (!login || !senha) {
            this.setState({ error: "Preencha todos os dados para logar" });
        } else {
            try {
                await axios.post(`https://reqres.in/api/login`, {
                    email: login,
                    password: senha
                }, {
                    crossDomain: true
                }).then(result => {
                    if (result.request.status === 200){
                        alert("Login efetuado com sucesso")
                        this.props.history.push("/buscaCep")
                    }
                    else (alert("Login ou senha inválidos"))
                })

            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }

    }

    cliqueCadastro = async e => {
        e.preventDefault();
        const { loginC, senhaC, confirmarSenha } = this.state;

        if(senhaC === confirmarSenha) {
            if (!loginC || !senhaC) {
                this.setState({ error: "Preencha todos os dados para se cadastrar" });
            } else {
                try {
                    await axios.post(`https://reqres.in/api/register`, {
                        email: loginC,
                        password: senhaC
                    }, {
                        crossDomain: true
                    }).then(result => {
                        console.log(result)
                        if (result.request.status === 200){
                            alert("Usuário cadastrado, efetue o login")
                        }
                        else (alert("Erro ao cadastrar"))
                    })
    
                } catch (err) {
                    this.setState({
                        error:
                            "Houve um problema com o login, verifique suas credenciais. T.T"
                    });
                }
            }
        } else {
            alert('Senhas não conferem')
        }
    }

    render() {

        return (
            <>
                <div>
                    <form id="fmLogin" class="container" onSubmit={this.cliqueLogin}>
                        <div>
                            <input class="form-control" type="text" name="login" placeholder="Login" value={this.state.login} onChange={e => this.setState({ login: e.target.value })} />
                            <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} />
                            <button class="btn btn-outline-primary" type="submit">Logar</button>
                        </div>
                    </form>

                    <form id="fmLogin" class="container" onSubmit={this.cliqueCadastro}>
                        <input class="form-control" type="text" name="login" placeholder="Login" value={this.state.loginC} onChange={e => this.setState({ loginC: e.target.value })} />
                        <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.senhaC} onChange={e => this.setState({ senhaC: e.target.value })} />
                        <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.confirmarSenha} onChange={e => this.setState({ confirmarSenha: e.target.value })} />
                        <button  class="btn btn-outline-secondary" type="submit">Cadastrar</button>
                    </form>
                </div>
            </>
        )
    }
}