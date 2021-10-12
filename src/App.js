
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductsComponent from './components/ProductsComponent';
import ProductsList from './components/ProductsList';
import Header from './components/Header';
import {Route,Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        
        <Route  exact path="/" render={()=><ProductsList/>}/>
        <Route   path="/products/:productId" render={()=><ProductDetail/>}/>
        
      </Switch>
      
    </div>
  );
}

export default App;
