import './paginainicial.css'

const PaginaInicial = () => {

    return (
        <div className='paginaInicial'>
            <div className='header container'>
                <img src="/assets/logo.png" alt="logo" />
                <img className='user' src="/assets/user.png" alt="" />
            </div>
            <main>
                <div className='banner'>
                <button className='matricula'>Faça sua pré-matricula</button>
                </div>
                <div className='info container'>
                    <div className='oneContent'>
                    <h2>Informações</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    
                    <div className='twoContent'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                   
                </div>
                <div className='carrossel'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
            <footer>
                <p>Desenvolvido por SeraphicCode</p>
                <div>
                    <p>Contato</p>
                    <p>Pré-Matricula</p>
                    <p>Fale Conosco</p>
                </div>
            </footer>
            
        </div>
    )
}

export default PaginaInicial