import { Routes, Route } from 'react-router-dom'
import ListCity from './pages/ListCity';
import Home from './pages/Home';
import ListCustomer from './pages/ListCustomer';
import ListProject from './pages/ListProject';
import ListFlat from './pages/ListFlat';
import ListEmployee from './pages/ListEmployee';
import ListVisit from './pages/ListVisit';
import ListSale from './pages/ListSale';
import ListGender from './pages/ListGender';
import ListFlatType from './pages/ListFlatType';
import ListIncomeType from './pages/ListIncomeType';
import ListProjectStatus from './pages/ListProjectStatus';
import FormProject from './pages/FormProject';
import FormFlat from './pages/FormFlat';
import FormEmployee from './pages/FormEmployee';
import FormCustomer from './pages/FormCustomer';
import FormVisit from './pages/FormVisit';
import FormSale from './pages/FormSale';
import EditProject from './pages/EditProject';
import EditFlat from './pages/EditFlat';
import Login from './pages/Login';
import EditEmployee from './pages/EditEmployee';
import EditCustomer from './pages/EditCustomer';
import EditVisit from './pages/EditVisit';
import ListFlatStatus from './pages/ListFlatStatus';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listcity" element={<ListCity />} />
        <Route path="/listcustomer" element={<ListCustomer />} />
        <Route path="/listproject" element={<ListProject />} />
        <Route path="/listflat" element={<ListFlat />} />
        <Route path="/listemployee" element={<ListEmployee />} />
        <Route path="/listvisit" element={<ListVisit />} />
        <Route path="/listsale" element={<ListSale />} />
        <Route path="/listgender" element={<ListGender />} />
        <Route path="/listflattype" element={<ListFlatType />} />
        <Route path="/listflatstatus" element={<ListFlatStatus />} />
        <Route path="/listincometype" element={<ListIncomeType />} />
        <Route path="/listprojectstatus" element={<ListProjectStatus />} />
        <Route path="/formproject" element={<FormProject />} />
        <Route path="/formflat" element={<FormFlat />} />
        <Route path="/formemployee" element={<FormEmployee />} />
        <Route path="/formcustomer" element={<FormCustomer />} />
        <Route path="/formvisit" element={<FormVisit />} />
        <Route path="/formsale" element={<FormSale />} />
        <Route path='/editproject' element={<EditProject />} />
        <Route path='/editflat' element={<EditFlat />} />
        <Route path='/editemployee' element={<EditEmployee />} />
        <Route path='/editcustomer' element={<EditCustomer />} />
        <Route path='/editvisit' element={<EditVisit />} />

      </Routes>


    </div>
  );
}

export default App;
