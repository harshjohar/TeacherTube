import './App.css';
import {Switch, Route} from 'react-router-dom'
import Landing from './screens/Landing';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import About from './screens/About';
import Navbar from './components/common/Navbar';
import NotFound from './screens/NotFound';
function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact><Landing /></Route>
                <Route path='/dashboard'><Dashboard /></Route>
                <Route path='/auth'><Login /></Route>
                <Route path='/about'><About /></Route>
                <Route path='*'><NotFound /></Route>
            </Switch>
        </div>
    );
}

export default App;
