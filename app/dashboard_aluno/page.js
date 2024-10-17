import DashboardMain from "../dashboard_main/page"
import '../dashboard_main/dashboardTemplate.css'


const dashboard_aluno = () => {
    return (
        <div>
            <DashboardMain isAluno={true}/>
            
        </div>
    )
}

export default dashboard_aluno