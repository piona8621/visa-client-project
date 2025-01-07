


























// 2nd time


// import React, { createContext, useState, useEffect } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../Firebase/Firebase.config";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser); // Update user state if logged in
//         localStorage.setItem("user", JSON.stringify(currentUser)); // Store user in localStorage
//       } else {
//         setUser(null); // Set user to null if not logged in
//         localStorage.removeItem("user");
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   };

 

//   const logOut = () => {
//      return signOut(auth);
//   }

//    // Manage user sate

//    useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//      setUser(currentUser);
//      setLoading(false);
//     });
//     return () => {
//       unsubscribe();
//     }
//   }, []);


//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signInUser,
//     googleSignIn,
//     setUser,
//     logOut,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;












// // 3rd time 



// import React, { createContext, useEffect, useState,  } from "react";
// import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import {auth} from "../Firebase/Firebase.config";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   };

//   const logOut = () => {
//     // return auth.signOut(); 
//     return signOut(auth);

//   };

//   const updateUserProfile = (displayName, photoURL) => {
//     return updateProfile(auth.currentUser, { displayName, photoURL });
//   };

//   return (
//     <AuthContext.Provider value={{ user, createUser, googleSignIn, logOut, updateUserProfile }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };











// 4th time 

// import React, {  createContext, useEffect, useState } from "react";
// import { 
//   createUserWithEmailAndPassword, 
//   updateProfile, 
//   signInWithPopup, 
//   GoogleAuthProvider, 
//   signOut, 
//   signInWithEmailAndPassword
// }   from "firebase/auth";

// import { auth } from "../Firebase/Firebase.config";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Listen to auth state changes
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Create user with email and password
//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Sign in user with email and password
//   const signInUser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Sign in with Google
//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   };

//   // Log out
//   const logOut = () => {
//     return signOut();
//   };

//   // Update user profile
//   const updateUserProfile = (displayName, photoURL) => {
//     return updateProfile(auth.currentUser, { displayName, photoURL });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser, // Add this for manual user updates
//         createUser,
//         signInUser, // Add this to expose signIn functionality
//         googleSignIn,
//         logOut,
//         updateUserProfile,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };







// 5th time 


import React, { createContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user with email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Log out
  const logOut = () => {
    return signOut(auth); // Make sure to pass `auth` here
  };

  // Update user profile
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser, // Add this for manual user updates
        createUser,
        signInUser, // Add this to expose signIn functionality
        googleSignIn,
        logOut,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };


