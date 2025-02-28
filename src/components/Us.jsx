import React, { useState, useEffect, useRef, useCallback } from "react";

const LazyLoading = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [page, setPage] = useState(1); // Current page
  const limit = 5; // Number of items per request
  const observer = useRef(); // Intersection Observer reference
  const lastItemRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreData(); // Load more data when last item is in view
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const loadMoreData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]); // Append data
      setPage(page + 1); // Increment page
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadMoreData(); // Load initial data
  }, []);

  return (
    <div>
      <h2>Lazy Loading (Infinite Scroll)</h2>
      <ul>
        {data.map((item, index) => (
          <li
            key={item.id}
            ref={index === data.length - 1 ? lastItemRef : null}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LazyLoading;
