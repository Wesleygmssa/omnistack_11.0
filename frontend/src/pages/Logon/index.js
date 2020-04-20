import React, {useState}from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'


import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from'../../assets/logo.svg';

export default function Logon(){
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{

      const response = await api.post('sessions', {id});// fazendo a conexão da rota com back end, e verificando a regra de negocio

       localStorage.setItem('ongId', id); // armazenamento local
       localStorage.setItem('ongName', response.data.name)// aramazenamento local

      history.push('/profile'); // redirencionando para profile apos verificar o id corrento
    } catch(err){

      alert('Falha no login tente novamente')

    }
  }


    return (

        <div className="logon-container">

           <section className="form">

           <img src={logoImg}  alt="Heroes"/>

         <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input 
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}
                
                />
                <button type="submit" className="button" >Entrar</button>

                  <Link className="back-link" to="/register">
                      <FiLogIn size={16} color={"#e02041"}/> {/* imagem  */}
                       Não tenho cadastro
                 </Link>
         </form>
           
           </section>

           <img src={heroesImg}  alt="Heroes"/>
        </div>
    )
}