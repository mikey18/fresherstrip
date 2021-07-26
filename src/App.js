import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './footer/Footer';
import Home from './Home';
import AboutUs from './Nav-Links/AboutUs';
import ContactUs from './Nav-Links/ContactUs';
import Requirements from './steps/Requirements';
import SchoolOfficer from './steps/SchoolOfficer';
import HeadOfDepartment from './steps/HeadOfDepartment';
import BabcockUniversityTeachingHospital from './steps/BabcockUniversityTeachingHospital';
import DirectorStudentSupportServices from './steps/DirectorStudentSupportServices';
import DirectorSecurityServices from './steps/DirectorSecurityServices';
import DataandArchievesOfficer from './steps/DataandArchievesOfficer';
import AdmissionsOfficer from './steps/AdmissionsOfficer';
import SchoolOfficer2 from './steps/SchoolOfficer2';
import Scrolltotopofsteps from './scrolltotop/scrolltotopofsteps';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Scrolltotopofsteps />
        <div className="content">
          <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
        
            <Route path = '/AboutUs'>
                <AboutUs />
            </Route>

            <Route path = '/ContactUs'>
                <ContactUs />
            </Route>

            <Route path = '/Requirements'>
                <Requirements />
            </Route>

            <Route path = '/SchoolOfficer'>
                <SchoolOfficer />
            </Route>

            <Route path = '/HeadOfDepartment'>
                <HeadOfDepartment />
            </Route>

            <Route path = '/BabcockUniversityTeachingHospital'>
                <BabcockUniversityTeachingHospital />
            </Route>

            <Route path = '/DirectorStudentSupportServices'>
                <DirectorStudentSupportServices />
            </Route>

            <Route path = '/DirectorSecurityServices'>
                <DirectorSecurityServices />
            </Route>

            <Route path = '/DataandArchievesOfficer'>
                <DataandArchievesOfficer />
            </Route>

            <Route path = '/AdmissionsOfficer'>
                <AdmissionsOfficer />
            </Route>

            <Route path = '/SchoolOfficer2'>
                <SchoolOfficer2 />
            </Route>

            <Route path = "*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
