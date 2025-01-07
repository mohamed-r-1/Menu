import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ItemsList from './components/ItemsList';
import { items } from './data';
import { useState } from 'react';

function App() {

  const [itemsData, setItemsData] = useState(items);

  // All Cat Unique
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]

  // Filter By Category
  const filterbyCategory = (cat) => {
    if (cat === 'الكل') {
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr)
    }
  }

  // Filter By Search 

  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title.includes(word));
      setItemsData(newArr);
    }
  }

  return (
    <div className='color-body font'>
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );

}

export default App;
