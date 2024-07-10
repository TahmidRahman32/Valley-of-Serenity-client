import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Auth/Firebase/Firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser =(email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const login = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = () =>{
      return signInWithPopup(auth, googleProvider);
   }

   const logOut = ()=>{
      return signOut(auth)
   } 

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log("currentUser", currentUser);
         setLoading(false);
      });
      return () => {
         return unSubscribe();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      login,
      googleLogin,
      logOut,
   };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
