import { useState } from "react";
import { usePhotos } from "../contexts/PhotosContext"

function Search() {
  const { searchTitle } = usePhotos();

  const [title, setTitle] = useState('');

  const addTitle = (value) => {
    setTitle(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchTitle(title)
  }

  return (
    <form onSubmit={handleSubmit} role="search">
      <input
        type="search"
        placeholder="Cerca"
        value={title}
        onChange={event => addTitle(event.target.value)} />
      <button>Search</button>
    </form>
  )
}
  
export default Search