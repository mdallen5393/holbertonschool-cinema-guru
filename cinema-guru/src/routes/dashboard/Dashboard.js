import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({userUsername, setIsLoggedIn}) => {
    return (
        <div className='dashboard-div'>
            <Header
                userUsername={userUsername}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Dashboard;