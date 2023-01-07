import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {DataContext} from './components/DataContext'
import './App.css';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo]= useState({
    id: 3, name: 'fake', username: 'fake', password: 'fake',
  })
  const [cart, setCart] = useState(null)
  console.log(userInfo)
  console.log(cart)
  return (
    <div className="App">
      <DataContext.Provider value={{userInfo,setUserInfo, cart, setCart}}>
        <Header/>
        <Main/>
        <Footer/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
