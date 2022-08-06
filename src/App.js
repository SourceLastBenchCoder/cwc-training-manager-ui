import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <MDBContainer fluid>
      <Header/>
     <Home/>
     <Footer/>
    </MDBContainer>
  );
}

export default App;
