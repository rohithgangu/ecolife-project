import './App.css';
import Shop_list_left_sidebar from './pages/Shop_list_left_sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Single_product from './pages/Single_product';
import Header from './components/Header';
import Breadcrumbarea from './components/Breadcrumbarea';
import Shop_category from './components/Shop_category';
import Footer from './components/Footer';
import Recomendation from './components/Recomendation';
import { useState } from 'react';

function App() {
  const[user,setUser]=useState(["rohith"])
  return (
    <main>
      <Router>
      <Switch> 
        <Route path="/Shop_list_left_sidebar" component={Shop_list_left_sidebar}/>
        <Route path="/Single_product/:id" component={Single_product}/>
        
      </Switch> 

      </Router>
      </main>
  );
}

export default App;
