import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoLists from './components/TodoList';
import queryString from 'query-string'
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';
import Hero from './components/Hero';

function App() {
  const [todoList, setTodo] = useState([
    {
      id: 1,
      title: "title 1"
    },
    {
      id: 2,
      title: 'title 2'
    },
    {
      id: 3,
      title: 'title 3'
    }
  ]);
  const [showClock, setShowClock] = useState(true);

  const [post, setPost] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRow: 11
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })
  const [count, setCount] = useState(0);


  useEffect(() => {
    const getAll = async () => {
      try {
        const paramsString = queryString.stringify(filters);
        const url = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log({ responseJson });
        const { data, pagination } = responseJson;
        setPost(data);
        setPagination(pagination);
      } catch (error) {
        console.error(error.message);
      }
    }
    getAll();
  }, [filters])

  const handelTodoClick = (todo) => {
    const newTodo = todoList.filter(to => to.id !== todo.id);
    setTodo(newTodo);
  }

  const handelTodoFormSubmit = (formValues) => {
    const newTodo = [...todoList, formValues];
    setTodo(newTodo);
  }

  const handelPageChange = (newPage) => {
    console.log({ newPage })
    setFilters({ ...filters, _page: newPage })
  }

  const handelFiltersChange = (formValues) => {
    console.log({ formValues });
    setFilters({
      ...filters,
      _page: 1,
      title_like: formValues.searchTerm
    })
  }

  const handelHeroClick = useCallback(
    (text) => {
      console.log(text)
    }, []
  )





  return (
    <div className="app">
      <h1>Todo list</h1>
      {/* <TodoForm onSubmit={handelTodoFormSubmit} /> */}
      {/* <TodoLists todos={todoList} onTodoClick={handelTodoClick} /> */}
      {showClock && <Clock />}
      <button
        onClick={() => { showClock ? setShowClock(false) : setShowClock(true) }}
      >Show/Hide</button>
      <BetterClock />
      <MagicBox />
      <PostFiltersForm onSubmit={handelFiltersChange} />
      < PostList posts={post} />
      <Pagination onPageChange={handelPageChange} pagination={pagination} />

      <p>{count}</p>
      <button
        onClick={() => { setCount(count + 1) }}
      >Up</button>
      <Hero name="key" onClick={handelHeroClick} />

    </div>
  );
}

export default App;
