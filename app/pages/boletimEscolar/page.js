import EsqueletoPrincipal from '../esqueletoPrincipal/page.js'

import './boletim.css'

const BoletimEscolar = () => {
    const user = {
        nome: 'Alison Jose Serafim de Lima',
        dataNasc: '22/02/2006',
        turma: '2°B',
        matricula: '01704127',
        notas: [8,6,7,9],
        media: 7.5,
        tipo: 'professor'
    }

    const materias = [
        'Matematica', 
        'Portugues',
        'Geografia',
        'Ciencias',
        'Filosofia',
        'Artes'
    ]
  return (
    <div>
        <EsqueletoPrincipal>
            <div className='container conteudoMenus'>
                <h3>Boletim Escolar</h3>
                <div>
                    <header className='cabecalho'>
                        <section>
                            <div className='div1'>
                                <p>Aluno:</p>
                                <p>Data de Nascimento:</p>
                                <p>Turma:</p>
                            </div>
                            <span className='line'></span>
                            <div className='div2'>
                                <p>{user.nome}</p>
                                <p>{user.dataNasc}</p>
                                <p>{user.turma}</p>
                            </div>
                        </section>
                        
                        <section>
                            <div>
                                <p>Matricula:</p>
                                <p>Instituicao:</p>
                                <p>Ano:</p>
                            </div>
                            <div className='line2'></div>
                            <div>
                                <p>{user.matricula}</p>
                                <p>EREM Jose Leite Barros</p>
                                <p>2024</p>
                            </div>
                        </section>
                    </header>
                    <main>
                        <section>
                            <div className='linhaSuperior'>
                                <div>
                                    <p>1° Bim</p>
                                    <p>Faltas</p>
                                </div>
                                <div>
                                    <p>2° Bim</p>
                                    <p>Faltas</p>
                                </div>
                                <div>
                                    <p>3° Bim</p>
                                    <p>Faltas</p>
                                </div>
                                <div>
                                    <p>4° Bim</p>
                                    <p>Faltas</p>
                                </div>
                                <div className='medFinal'>
                                    <p>Final</p>
                                    <p>Media</p>
                                </div>
                            </div>

                        {materias.map(materia => {
                            return ( 
                                <div className='tabela' key={1}>
                                    <p>{materia}:</p>
                                    <table className='forms'>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className='medFinal'>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        
                                    </table>
                                    
                                </div>
                            )
                        })}
                        </section>
                        
                    </main>
                </div>
            </div>
        </EsqueletoPrincipal>
    </div>
  )
}

export default BoletimEscolar