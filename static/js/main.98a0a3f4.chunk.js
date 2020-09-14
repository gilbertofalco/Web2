(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},54:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),c=a(8),l=a(9),i=a(11),u=a(10),m=a(30),p=a(1),d=a(13),h=a.n(d),f=(a(54),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={cidade:"",estado:"",endereco:"",faixaDeNumero:""},n}return Object(l.a)(a,[{key:"buscarCep",value:function(){var e=this;console.log("Chegou aqui");var t="https://viacep.com.br/ws/"+document.getElementById("cep").value+"/json";h.a.get(t).then((function(t){e.setState({cidade:t.data.localidade}),e.setState({estado:t.data.uf}),e.setState({endereco:t.data.logradouro}),e.setState({faixaDeNumero:t.data.complemento})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("head",null,r.a.createElement("script",{src:"./script/jquery-3.1.1.min.js"}),r.a.createElement("script",{src:"./script/bootstrap.min.js"}),r.a.createElement("link",{rel:"stylesheet",href:"./script/bootstrap.min.css"}),r.a.createElement("title",null,"Buscar Endere\xe7os")),r.a.createElement("h1",null,"P\xe1gina que faz consultas na API Via Cep"),r.a.createElement("div",{class:"divGeral"},r.a.createElement("div",{class:"column"},r.a.createElement("label",{for:""},"Escolha um CEP que deseja informa\xe7\xf5es"),r.a.createElement("input",{type:"text",placeholder:"Digite um CEP v\xe1lido",id:"cep","data-mask":"00000000",class:"margemInput form-control"}),r.a.createElement("span",{id:"mensagemValidacao"}),r.a.createElement("button",{id:"botaoEnviar",onClick:function(){return e.buscarCep()},class:"styleButton btn-primary btn"},"Buscar")),r.a.createElement("div",{class:"column"},r.a.createElement("label",{for:""},"Cidade"),r.a.createElement("input",{type:"text",id:"localidade",value:this.state.cidade,class:"margemInput form-control"}),r.a.createElement("label",{for:""},"Estado"),r.a.createElement("input",{type:"text",id:"estado",value:this.state.estado,class:"margemInput form-control"}),r.a.createElement("label",{for:""},"Endere\xe7o"),r.a.createElement("input",{type:"text",id:"logradouro",value:this.state.endereco,class:"margemInput form-control"}),r.a.createElement("label",{for:""},"Faixa de Numero"),r.a.createElement("input",{type:"text",id:"complemento",value:this.state.faixaDeNumero,class:"margemInput form-control"}),r.a.createElement("a",{href:"/",id:"sair"},"Sair"))))}}]),a}(r.a.Component)),v=a(14),g=a.n(v),b=a(16),E=(a(56),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={usuarios:[],login:"",senha:"",loginC:"",senhaC:"",confirmarSenha:"",erro:""},e.cliqueLogin=function(){var t=Object(b.a)(g.a.mark((function t(a){var n,r,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.login,o=n.senha,console.log(r),console.log(o),r&&o){t.next=8;break}e.setState({error:"Preencha todos os dados para logar"}),t.next=16;break;case 8:return t.prev=8,t.next=11,h.a.post("https://reqres.in/api/login",{email:r,password:o},{crossDomain:!0}).then((function(t){200===t.request.status?(alert("Login efetuado com sucesso"),e.props.history.push("/buscaCep")):alert("Login ou senha inv\xe1lidos")}));case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(8),e.setState({error:"Houve um problema com o login, verifique suas credenciais. T.T"});case 16:case"end":return t.stop()}}),t,null,[[8,13]])})));return function(e){return t.apply(this,arguments)}}(),e.cliqueCadastro=function(){var t=Object(b.a)(g.a.mark((function t(a){var n,r,o,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.loginC,o=n.senhaC,s=n.confirmarSenha,o!==s){t.next=17;break}if(r&&o){t.next=7;break}e.setState({error:"Preencha todos os dados para se cadastrar"}),t.next=15;break;case 7:return t.prev=7,t.next=10,h.a.post("https://reqres.in/api/register",{email:r,password:o},{crossDomain:!0}).then((function(e){console.log(e),200===e.request.status?alert("Usu\xe1rio cadastrado, efetue o login"):alert("Erro ao cadastrar")}));case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(7),e.setState({error:"Houve um problema com o login, verifique suas credenciais. T.T"});case 15:t.next=18;break;case 17:alert("Senhas n\xe3o conferem");case 18:case"end":return t.stop()}}),t,null,[[7,12]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("form",{id:"fmLogin",class:"container",onSubmit:this.cliqueLogin},r.a.createElement("div",null,r.a.createElement("input",{class:"form-control",type:"text",name:"login",placeholder:"Login",value:this.state.login,onChange:function(t){return e.setState({login:t.target.value})}}),r.a.createElement("input",{class:"form-control",type:"password",name:"senha",placeholder:"Senha",value:this.state.senha,onChange:function(t){return e.setState({senha:t.target.value})}}),r.a.createElement("a",{className:"botoes"},r.a.createElement("button",{class:"btn btn-outline-primary",type:"submit"},"Logar")))),r.a.createElement("form",{id:"fmLogin",class:"container",onSubmit:this.cliqueCadastro},r.a.createElement("input",{class:"form-control",type:"text",name:"login",placeholder:"Login",value:this.state.loginC,onChange:function(t){return e.setState({loginC:t.target.value})}}),r.a.createElement("input",{class:"form-control",type:"password",name:"senha",placeholder:"Senha",value:this.state.senhaC,onChange:function(t){return e.setState({senhaC:t.target.value})}}),r.a.createElement("input",{class:"form-control",type:"password",name:"senha",placeholder:"Senha",value:this.state.confirmarSenha,onChange:function(t){return e.setState({confirmarSenha:t.target.value})}}),r.a.createElement("a",{className:"botoes"},r.a.createElement("button",{class:"btn btn-outline-secondary",type:"submit"},"Cadastrar")))))}}]),a}(r.a.Component)),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:E}),r.a.createElement(p.a,{path:"/buscaCep",component:f})))}}]),a}(n.Component);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.98a0a3f4.chunk.js.map