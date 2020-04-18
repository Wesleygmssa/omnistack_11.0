import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css';


import logoImg from'../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

  async  function handleRegistger(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsApp,
            city,
            uf,
        }

      try{
        const response = await api.post('/ongs', data);
        alert(`seu ID de acesso: ${response.data.id}`)
      } catch(err){
          alert(`erro no cadastro tente novamente`)
       }
    }
    return (
          <div className="register-container">
             <div className="content">
                 <section>
                    <img src={logoImg} alt="Be The"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encotraem os casos da sua ONG</p>


                    <Link className="back-link" to="/">
                         <FiArrowLeft size={16} color={"#e02041"}/> {/* icone baixado no npm  */}
                              Não tenho cadastro
                    </Link>
                 </section>
                <form onSubmit={handleRegistger}>
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="whatsApp"
                    value={whatsApp}
                    onChange={e => setWhatsApp(e.target.value)}
                    /> 

                    <div className="input-group">
                        <input 
                        placeholder="Cidade" 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input 
                        placeholder="UF" 
                        style={{width: 80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        
                        />
                    </div>

                  <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div> 
          </div>
    );
}