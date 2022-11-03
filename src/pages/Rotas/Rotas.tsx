import { useState } from 'react';
import Jogo from '../../components/Jogo';
import Login from '../../components/Login';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default function Rotas() {
    const [nome, setNome] = useState('')

    function handleSaveUser(user: any) {
        let nome = user
        setNome(nome)
    }

    return (
        <Routes>
            <Route path='/' element={<Login OnAddUser={handleSaveUser} />}>

            </Route>

            <Route path='/jogo' element={<Jogo OnSaveUser={nome} />}>

            </Route>


        </Routes>
    )
}