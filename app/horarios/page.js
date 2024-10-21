import EsqueletoPrincipal from '../esqueletoPrincipal/page.js'
import './horario.css'

const Horarios = () => {
    return (
        <div>
            <EsqueletoPrincipal>
                <div className={`${"container"} ${"conteudoMenus"}`}>
                    <h3>Horarios:</h3>
                    <div className='horarios'>
                    <table className='horariosTabela'>
                        <thead>
                            <tr className='ok'>
                                <th></th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="primeiroElemento">7:30</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="primeiroElemento">8:20</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="primeiroElemento">9:30</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="primeiroElemento">10:20</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="primeiroElemento">11:10</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="primeiroElemento">12:00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="primeiroElemento">13:00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </EsqueletoPrincipal>
        </div>
    )
}

export default Horarios