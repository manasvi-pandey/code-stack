import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import firebase, { db } from "../firebase";

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

  function addNewUser(user) {
    db.collection("users")
      .doc(user.uid)
      .set({
        id: user.uid,
        fullname: user.displayName,
        email: user.email,
        about: "New user",
        photo: user.photoURL,
        role: "reader",
        date_of_joining: new Date(),
      })
      .then(() => console.log("New user added ✔"))
      .catch((err) => console.error("Unable to add new user ❌"));
  }

  function handleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        let user = res.user;
        setAuthUser(user);
        // Check for users existence in DB
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (!doc.exists) {
              addNewUser(user);
            }
          })
          .catch((err) => console.error("Unable to find the user ❌:" + err));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  function handleProfile() {
    authUser?.uid ? history.push("/profile") : handleLogin();
  }

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(function (res) {
        console.log("Logged out successfully");
        setAuthUser({});
        history.push("/");
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  const value = { authUser, handleLogin, handleLogout, handleProfile };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
