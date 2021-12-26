import { createContext, useState, useContext, useEffect, useReducer } from "react";
import {  clearCart } from "./cartContext";
import fire from "../fire"
import {GoogleAuthProvider ,signInWithPopup} from "firebase/auth"
import {aut} from "../fire"




export const authContext = createContext();

// const {cart, clearCart} = useContext(cartContext);
export const useAuth = () => {
  return useContext(authContext);
};

const INIT_STATE = {
  googleUser:null,
}

const reducer =(state = INIT_STATE , action)=>{
  switch(action.type){
    case "SET_USER":
      return{...state,googleUser:action.payload};
      default:
        return state;
  }
}

const AuthContextProvider = ({ children }) => {
  const [state,dispath]=useReducer(reducer,INIT_STATE)
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  // const navigate = useNavigate()

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const googleProvider = new GoogleAuthProvider();
  const authWithGoogle = async()=>{
    try {
      await signInWithPopup(aut ,googleProvider);
    }catch(e){
      console.log(e);
    }
  }

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = (e) => {
    // e.preventDefault();

    fire.auth().signOut()
  
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    email,
    user,
    handleLogout,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
    googleUser:state.googleUser
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
