import { useState } from 'react';
import { LogoHeader } from './Logo_Icons'
import { Link } from 'react-router-dom';


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
        <header className='header_container'>
            <section className='header_top'>
                {/*Logo_Header*/}
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
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="Btn_campoBusca">
                    </button>
                </div>

                <div>
                    <Link to="/cadastre-se" className="btn_register"> Cadastre-se </Link>
                    <Link to="/Login" className='btn_login'> Entrar </Link>
                </div>

            </section>

            {/*Barra de navegação principal*/}
            <nav id="Nav_Principal">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/products"> Produtos </Link>
                    </li>
                    <li>
                        <Link to="/categories"> Categorias </Link>
                    </li>
                    <li>
                        <Link to="/orders"> Meus Pedidos </Link> 
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;