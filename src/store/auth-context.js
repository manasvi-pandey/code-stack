import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import firebase from "../firebase";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [authUser, setAuthUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser({});
      }
    });
  }, []);

  function handleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        let user = res.user;
        setAuthUser(user);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  function handleLogout() {
      firebase
        .auth()
        .signOut()
        .then(function(res) {
            console.log("Logged out successfully");
            setAuthUser({});
            history.push("/");
        })
        .catch(function(err) {
            console.error(err);
        })
  }

  const value = { authUser, handleLogin, handleLogout };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
