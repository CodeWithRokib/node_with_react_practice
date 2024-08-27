import { useState, useEffect } from "react";
import axios from "axios";

const DepartmentForm = () => {
  const [departments, setDepartments] = useState([]); // Initialize as an empty array
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/departments"
        );
        setDepartments(response.data.departments || []); // Fallback to empty array
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/departments",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setDepartments([...departments, response.data]); // Assuming the response contains the new department
      setName("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Error creating department", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Department Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Create Department</button>
      </form>

      <h2>Departments</h2>
      <ul>
        {Array.isArray(departments) &&
          departments?.map((department) => (
            <li key={department._id}>
              <h3>{department.name}</h3>
              <p>{department.description}</p>
              {department.image && (
                <img
                  src={`http://localhost:4000/public/images/${department.image}`} // Ensure this matches the server path
                  alt={department.name}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DepartmentForm;
