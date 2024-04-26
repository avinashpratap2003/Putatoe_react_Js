import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle changes in the search input
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // Call a function to perform search with the current search term
    performSearch(event.target.value);
  };

  // Function to perform search based on the given term
  const performSearch = (term) => {
    // Perform search operation here, for example, fetch data from an API
    // In this example, we'll just filter a static list of items for demonstration purposes
    const results = staticItemList.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      {/* Search input */}
      <input
      className='bg-['
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {/* Display search results */}
      <div>
        {searchResults.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

// Example static list of items
// const staticItemList = [
//   { id: 1, name: 'Product 1' },
//   { id: 2, name: 'Product 2' },
//   { id: 3, name: 'Product 3' },
//   // Add more items as needed
// ];

export default SearchBar;
