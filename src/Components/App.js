import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css"
import Login from './Login';
import Quiz from './Quiz';
import Result from './Result';
import Signup from './Signup';
import Video from './Video';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {AuthProvider, useAuth} from "../Contexts/AuthContext";
import PrivateRoute from '../Route/PrivateRoute';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Video/>}/>
                    <Route 
                        path="/login" 
                        element={
                            <PrivateRoute>
                                <Login/>
                            </PrivateRoute>
                        }>
                    
                    </Route>

                    <Route 
                        path="/signup" 
                        element={
                            <PrivateRoute>
                                <Signup/>
                            </PrivateRoute>
                        }>
                    </Route>

                    <Route path="/quiz/:id" element={<Quiz/>}/>
                    <Route path="/result" element={<Result/>}/>
            </Routes>
            </AuthProvider>
        </div>
    );    
}

export default App;
