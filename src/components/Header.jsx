import React, { useState } from 'react';
import {LogoHeader, MiniCart} from './Logo_Icons'


const Header = () => {
    //Guarda o valor da busca
    const [termoBusca, setTermoBusca] = useState('')

    //Função de redirecionamento
    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (termoBusca.trim() !== '') {
                window.location.href = `/products?filter=${encodeURIComponent(termoBusca)}`;
            }
        }
    }

    return (
        <header>
           {/*Logo*/}
            <div>
                <LogoHeader />
            </div>

            {/*Barra de pesquisa*/}
            <div id='camp_busca'>
                <input 
                type="text" 
                placeholder='Encontre produtos...'
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                onKeyDown={handleSearch}
                />
            </div>

        </header>
       
    )
}

export default Header;