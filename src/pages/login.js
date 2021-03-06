import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '';

    const handLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmail('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Login - Career Day App';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border bored-gray-primary mb-4 rounded">
                    <h1 className="flex justify-center w-full"> 
                        <img src="/images/logo.png" alt="Instgram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handLogin} method="POST">
                        <input aria-label="Enter your email address"
                        type="text" 
                        placeholder="Email Address"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
                        border-gray-primary rounded mb-2"
                        onChange={({ target }) => setEmail(target.value)}
                        value={email}
                        />
                        <input aria-label="Enter your password address"
                        type="password" 
                        placeholder="Password"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
                        border-gray-primary rounded mb-2"
                        onChange={({ target }) => setPassword(target.value)}
                        value={password}
                        />

                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={
                                `bg-blue-medium text-white w-full rounded h-8 font-bold
                            ${isInvalid && 'opacity-50'}`}>
                        Log In
                        </button>
                    </form>
                    <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border bored-gray-primary">
                        <p className="text-sm">Don't have an ancount?{``}
                            <Link to={ROUTES.SIGN_UP}  className="font-bold text-blue-medium ml-2">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
