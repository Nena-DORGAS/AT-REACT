import "./abc.css"
function Titulo(){

    let nome = "Página de login"
    

    return(
        <div class="menu">
        <h1>{nome}</h1>
        <label>
            Email:
            <input type="email" name="email" id="email" />
        </label>
        <label>
            Senha
            <input type="password" name="senha" id="senha" />
        </label>
        <button>Entrar</button>
        </div>
    )
}
export default Titulo

