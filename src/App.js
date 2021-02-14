import './App.css';
import routes from './configs/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './configs/store';
import Nav from "./components/navbar"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Menu from "./components/Menu";



function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <header/>
            <Header/>
            {/*<Nav />*/}
            <Menu/>
            <Content/>
            <Footer/>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
