import './dashboardTemplate.css'

const ConteudoMenus = () => {

    const user = {
        nome: 'Alison Jose Serafim de Lima',
        notas: [8,6,7,9],
        media: 7.5,
        tipo: 'admin'
    }

  return (
            <div className={`${"container"} ${"conteudoMenus"}`}>
                    <div className="menu1">
                        <h2>
                            Seja bem vindo, {user.nome.split(" ")[0]}
                        </h2>
                        <p>
                            SchoolSync Dashboard
                        </p>
                    </div>
                        {user.tipo === 'aluno' ? (
                            <div>
                                <h2>aluno</h2>
                                <p>Aluno</p>
                            </div>
                        ) : user.tipo === "admin" ? (
                            <div>
                                <h2>Admin</h2>
                                <p>admin</p>
                            </div>
                        ) : (
                            <h1>ola</h1>
                        )}
                    
                    <div>
                        oi
                    </div>
                </div>

  )
}

export default ConteudoMenus