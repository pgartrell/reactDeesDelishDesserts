import NavbarComponent from "./Navbar/navBar";
import {About} from ""
import {ImageGallery} from "./Gallery/imageGallery"
import {Events} from ""
import {Contactme} from ""



export const Routes = () => {
    return (
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/About" component={About} />
          <Route exact path="/">
            <Redirect to="/About" />
          </Route>
          <Route exact path="/Gallery" component={imageGallery} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/Contactme" component={Contactme} />
        </Switch>
      </div>
    );
  };