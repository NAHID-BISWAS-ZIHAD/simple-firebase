import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignInPop = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const singleUser = result.user;
                console.log(singleUser);
                setUser(singleUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })

    }
    const handleGitInPop = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const gitUser = result.user;
                setUser(gitUser)
                console.log(gitUser)
            }).catch(error => {
                console.log('error', error.message);
            })
    }
    const handlSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(result)
                console.log(result)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div>
            {user ?
                <button onClick={handlSignOut} className="btn">Sign Out</button> :
                <>
                    <button onClick={handleSignInPop} className="btn">Google Login</button>
                    <button onClick={handleGitInPop} className="btn">Github Login</button>
                </>}
            {user && <div>
                <h3>{user.displayName}</h3>
                <h3>{user.email}</h3>
                <img className="mx-auto" src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;