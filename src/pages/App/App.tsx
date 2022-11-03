import { BrowserRouter } from 'react-router-dom';
import style from './style.module.scss'

import Rotas from '../Rotas/Rotas'

function App() {

  return (
    <div className={style.container}>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  )


}

export default App;