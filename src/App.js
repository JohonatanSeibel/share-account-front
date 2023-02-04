

import Home from './components/pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MyOrders from './components/pages/MyOrders';
import ViewOrder from './components/pages/ViewOrder';
import CreateOrder from './components/pages/CreateOrder';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/order">
            <CreateOrder />
          </Route>
          <Route exact path="/myorder">
            <MyOrders />
          </Route>
          <Route exact path="/vieworder">
            <ViewOrder />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
