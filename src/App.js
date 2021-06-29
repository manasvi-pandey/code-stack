import Navbar from "./components/Navbar/Navbar";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import BookMarksContainer from "./containers/BookMarksContainer";
import ProfileContainer from "./containers/ProfileContainer";
import SingleBlogContainer from "./containers/SingleBlogContainer";
import Footer from "./components/Footer/Footer";

import { Route, Switch } from "react-router-dom"; 

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <HomeContainer />
        </Route>
        <Route path="/about">
          <AboutContainer />
        </Route>
        <Route path="/bookmarks">
          <BookMarksContainer />
        </Route>
        <Route path="/profile">
          <ProfileContainer />
        </Route>
        <Route path="/blog/:slug" component={SingleBlogContainer}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
