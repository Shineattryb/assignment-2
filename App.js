import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import CardList from './components/cardlist';
import Pagination from './components/pagination';
import Star from './components/star';
import Navbar from './components/navbar';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [cartcount,setcartcount]=useState(0);
  const handleAddToCart = () => {
    setcartcount(cartcount + 1);
    console.log(cartcount);
  };

  useEffect(() => {
    axios.get("https://assignment2-filter-backend.vercel.app/api/cards")
      .then((res) => {
        setTodos(res.data);
        const totalPagesCount = Math.ceil(res.data.length / todosPerPage);
        setTotalPages(totalPagesCount);
      })
      .catch(error => console.error('Error fetching card data:', error));
  }, [todosPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageClick = async (page) => {
    try {
      const response = await axios.get(`https://assignment2-filter-backend.vercel.app/api/cards?page=${page}`);
      setCurrentPage(page);
      window.scrollTo(0,0);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <div className='container'>
      <Navbar cartcount={cartcount}/>
      <div className="App">
        <CardList card={currentTodos} handleAddtoCart={handleAddToCart} />
      </div>
      <div className='page'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageClick}/>
      </div>
    </div>
  );
}

export default App;
