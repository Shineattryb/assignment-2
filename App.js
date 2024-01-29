import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import CardList from './components/cardlist';
import Pagination from './components/pagination';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get("https://backend-final-2.vercel.app/api/cards")
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

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <div className='container'>
      <div className="App">
        <CardList card={currentTodos} />
      </div>
      <div className='page'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
      </div>
    </div>
  );
}

export default App;
