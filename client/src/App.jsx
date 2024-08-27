import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryForm from "./components/CategoryForm"
import ContactForm from "./components/ContactForm"
import SubCategoryForm from "./components/SubCategoryForm"
import ContactUpdate from './components/ContactUpdate';
import DepartmentForm from './components/DepartmentForm';

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<CategoryForm />} />
                <Route path="/subcategory" element={<SubCategoryForm />} />
                <Route path="/department" element={<DepartmentForm />} />
                <Route path="/add-contact" element={<ContactForm />} />
                <Route path="/update-contact/:id" element={<ContactUpdate />} />
            </Routes>
        </Router>
           
    </>
  )
}

export default App
