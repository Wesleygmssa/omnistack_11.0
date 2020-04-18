import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; /* funções para rotas */

import Logon from './pages/Logon'; /* Tela de login , direcionando para pasta*/
import Register from './pages/Register';/* pagina de registro , direcionando para pasta*/
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){ /* funtion das rotas */
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/> {/* rota inicial , OBS: tem q colcoar o exact*/}

                 <Route path="/register" component={Register}/> {/* rota de cadastro */}
                 <Route path="/profile" component={Profile}/> {/* rota de perfil */}
                 <Route path="/incidents/new" component={NewIncident}/> {/* rota de perfil */}
            </Switch>
        </BrowserRouter>
    );
}