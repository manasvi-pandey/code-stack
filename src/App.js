import Navbar from "./components/Navbar/Navbar";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import BookmarksContainer from "./containers/BookmarksContainer";
import ProfileContainer from "./containers/ProfileContainer";
import SingleBlogContainer from "./containers/SingleBlogContainer";
import PostActionsContainer from "./containers/PostActionsContainer";
import Footer from "./components/Footer/Footer";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import AuthProvider from "./store/auth-context";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <HomeContainer />
        </Route>
        <Route path="/about">
          <AboutContainer />
        </Route>
        <Route path="/bookmarks">
          <BookmarksContainer />
        </Route>
        <Route path="/profile">
          <ProfileContainer />
        </Route>
        <Route path="/blog/:slug" component={SingleBlogContainer} />
        <Route
          path={["/create/:postID", "/create"]}
          component={PostActionsContainer}
        />
      </Switch>
      <Footer />
    </AuthProvider>
  );
}

export default App;
