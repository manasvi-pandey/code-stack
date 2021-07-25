import Navbar from "./components/Navbar/Navbar";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import BookmarksContainer from "./containers/BookmarksContainer";
import ProfileContainer from "./containers/ProfileContainer";
import SingleBlogContainer from "./containers/SingleBlogContainer";
import PostActionsContainer from "./containers/PostActionsContainer";
import Footer from "./components/Footer/Footer";

import AuthProvider from './store/auth-context';

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
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
        <Route path="/create">
          <PostActionsContainer />
        </Route>
      </Switch>
      <Footer />
    </AuthProvider>
  );
}

export default App;
