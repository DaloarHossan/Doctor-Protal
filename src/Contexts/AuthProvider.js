import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config'
export const AuthContext=createContext();
const auth=getAuth(app);



const AuthProvider = ({children}) => {
	const [user,setUser]=useState(null);
	const provider=new GoogleAuthProvider();
	const [loading,setLoading] =useState(true);
    const createUser=(email,password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth,email,password);
	};
	const signIn=(email,password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth,email,password);
	};
	const googleSignIn=()=>{
		return signInWithPopup(auth,provider);
	}
	const updateUser=(userInfo)=>{
		return updateProfile(user,userInfo)
	}
	const logOut=()=>{
		setLoading(true);
		return signOut(auth);
	}
	useEffect(()=>{
		const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
			setUser(currentUser);
			setLoading(false);
		});
		return ()=> unsubscribe();
	},[])

	const authInfo={

		createUser,
		signIn,
		googleSignIn,
		updateUser,
		logOut,
		user,
		loading
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;