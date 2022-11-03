import { useState } from "react";
import style from './style.module.scss'
import { Link } from 'react-router-dom'


export default function Login({ OnAddUser }: any) {

    const [nome, setNome] = useState("")

    function handleSaveUser() {
        const data = nome
        OnAddUser(data)
    }


    return (
        <div className={style.container}>
            <form>
                <h1>Bem-vindo ao jogo de cartas pokemon tcg</h1>
                <p>Para começar a jogar digite o seu nome:</p>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required />
                <button onClick={() => handleSaveUser()}>
                    <Link to="/jogo">Ver cartas</Link></button>

            </form>
        </div>
    )
}