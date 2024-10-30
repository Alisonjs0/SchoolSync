import styles from './page.module.css'

const PaginaInicial = () => {

    return (
        <div className={styles.paginaInicial}>
            <div className={`${styles.header} ${styles.container}`}>
                <img className={styles.img} src="/assets/logo.png" alt="logo" />
                <a href="./pages/login"><img className={styles.user} src="/assets/user.png" alt="" /></a>
            </div>
            <main>
                <div className={styles.banner}>
                    <img src="/assets/banner-inicial.jpg" alt="" />
                    <a className={styles.matricula} href="./pages/preMatricula"><button>Faça sua pré-matricula</button></a>
                </div>
                <div className={`${styles.info} ${styles.container}`}>
                    <div className={`${styles.oneContent} ${styles.container}`}>
                    <h2>Informações</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    
                    <div className={styles.twoContent}>
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                   
                </div>
                <div className={styles.carrossel}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
            <footer className={styles.footer}>
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