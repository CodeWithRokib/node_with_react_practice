import { useState, useEffect } from "react";
import axios from "axios";

const SubCategoryForm = () => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/category");
        console.log(res.data); // Check if data is fetched correctly
        setCategories(res.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/subcategory", {
        name,
        categoryId,
      });
      setMessage(`SubCategory ${res.data.name} created successfully!`);
      setName("");
      setCategoryId("");
    } catch (error) {
      setMessage(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <div>
      <h1>Create SubCategory</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="SubCategory Name"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {Array.isArray(categories) &&
            categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubCategoryForm;
