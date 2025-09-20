import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [articles, setArticles] = useState([]); // state to store API data
  const [search, setsearch] = useState("");
  const [category, setcategory] = useState("all");
  const [categories, setcategories] = useState([]);

  // fetch data once when component mounts
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setArticles(data); // store in state
        setcategories(["all", ...new Set(data.map((item) => item.category))]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  // Filter articles based on search and category
  const filterArticles = articles.filter((article) => {
    const matchsearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" ? true : article.category === category;
    return matchsearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        🛒 Fetch API Example - Product List
      </h1>
      <div>
        <input
          type="text"
          placeholder="search products..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setcategory(e.target.value)}>
          {categories.map((cat, idx) => (
            <option value={cat} key={idx}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <br />
      <br />
      <br />
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {filterArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-100 p-5 flex flex-col justify-between"
          >
            <div className="flex justify-center items-center h-48 mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="max-h-40 object-contain"
              />
            </div>

            {/* Title & Category */}
            <h2 className="font-bold text-lg text-gray-800 line-clamp-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 italic mb-2">
              {article.category}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {article.description}
            </p>

            {/* Price */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xl font-bold text-green-700">
                ${article.price}
              </span>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  article.rating?.rate > 4
                    ? "bg-green-200 text-green-900"
                    : "bg-yellow-200 text-yellow-900"
                }`}
              >
                ⭐ {article.rating?.rate} ({article.rating?.count})
              </span>
            </div>

            {/* Action Button */}
            <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* No results */}
      {filterArticles.length === 0 && (
        <p className="text-center text-red-600 mt-6 font-semibold">
          No products found 🚫
        </p>
      )}
    </div>
  );
};

export default FetchApi;

{
  /* <p>{article.completed}</p> */
}
{
  /* <span
              className={`px-2 py-1 text-sm rounded ${
                article.completed
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {article.completed ? "Completed" : "Pending"}
            </span> */
}
