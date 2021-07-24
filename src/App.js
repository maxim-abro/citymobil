import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Aside from './components/Aside/Aside'
import Content from './components/Content/Content'
import './App.css';

function App() {
    return (
       <div className="container">
           <div className="header"><Header /></div>
           <div className="aside"><Aside /></div>
           <div className="content"><Content /></div>
           <div className="footer"><Footer /></div>
       </div>
 )

}

export default App;
