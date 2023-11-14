import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/Sidebar';

const Dashboard = ({userUsername, setIsLoggedIn}) => {
    return (
        <div className='dashboard-div'>
            <Header
                userUsername={userUsername}
                setIsLoggedIn={setIsLoggedIn}
            />
            <SideBar />
        </div>
    )
}

export default Dashboard;