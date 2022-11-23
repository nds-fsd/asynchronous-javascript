import {useEffect, useState} from "react";

const Component = () => {
  const [todos, setTodos] = useState([]);

  // We use useEffect hook to fetch backend data on component mount
  // Choose one of the two methods below

  // Method 1 for fetching data on component mount: async/await
  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      const json = await response.json();
      setTodos(json);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Method 2 for fetching data on component mount: then and catch
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((json) => {
        setTodos(json);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <h1>My to-dos</h1>
      {todos.map(todo => {
        return <p>{todo.title}</p>
      })}
    </div>
  )
}

export default Component;