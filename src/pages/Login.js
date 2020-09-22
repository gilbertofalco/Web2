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
        erroLogin: "",
        erroCad: ""
    };

    
    cliqueLogin = async e => {

        e.preventDefault();
        const { login, senha } = this.state;

        console.log(login)
        console.log(senha)
        if (!login || !senha) {
            this.setState({ erro: "Preencha todos os dados para logar" });
        } else {
            try {
                await axios.post(`https://reqres.in/api/login`, {
                    email: login,
                    password: senha
                }, {
                    crossDomain: true
                }).then(result => {
                    if (result.request.status === 200){
                        localStorage.setItem('tokenLogin', result.data.token)
                        this.props.history.push("/buscaCep")
                    }
                    else {
                        this.state.setState({erro: "Usuário ou senha incorreto"})
                    }  
                })

            } catch (err) {
                this.setState({
                    erro:
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
                this.setState({ erroCad: "Preencha todos os dados para se cadastrar" });
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
                            this.state.setState({erro: "Usuário cadastrado, efetue o login"})
                        }
                        else (
                            this.state.setState({erro: "Ocorreu um erro ao cadastrar usuário"})
                        )
                    })
    
                } catch (err) {
                    this.setState({
                        erroCad:
                            "Houve um problema com o login, verifique suas credenciais. T.T"
                    });
                }
            }
        } else {
            this.setState({ erroCad: "Login e senha não conferem"});
        }
    }

    render() {
        localStorage.setItem('tokenLogin', "");
        return (
            <>
                <div>
                    <form id="fmLogin" class="container" onSubmit={this.cliqueLogin}>
                        <div>
                            <input class="form-control" type="text" name="login" placeholder="Login" value={this.state.login} onChange={e => this.setState({ login: e.target.value })} />
                            <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} />
                            <span value={this.state.erro} className="mensagemUsuario">{this.state.erro}</span>
                            <a className="botoes"><button class="btn btn-outline-primary" type="submit">Logar</button></a>
                        </div>
                    </form>

                    <form id="fmLogin" class="container" onSubmit={this.cliqueCadastro}>
                        <input class="form-control" type="text" name="login" placeholder="Login" value={this.state.loginC} onChange={e => this.setState({ loginC: e.target.value })} />
                        <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.senhaC} onChange={e => this.setState({ senhaC: e.target.value })} />
                        <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.confirmarSenha} onChange={e => this.setState({ confirmarSenha: e.target.value })} />
                        <span className="mensagemUsuario">{this.state.erroCad}</span>
                        <a className="botoes"><button  class="btn btn-outline-secondary" type="submit">Cadastrar</button></a>
                    </form>
                </div>
            </>
        )
    }
}