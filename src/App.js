import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDetail from './components/admin/AdminDetail';
import AdminCreate from './components/admin/AdminCreate';

function App() {
  return (
    <Router>
      <MDBContainer fluid>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/admin-create' element={<AdminCreate />} />
          <Route path='/admindetail/:adminId' element={<AdminDetail />} />
        </Routes>
        <hr/>
        <Footer />
      </MDBContainer>
    </Router>
  );
}

export default App;
