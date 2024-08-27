import { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/v1/category', { name });
            setMessage(`Category ${res.data.name} created successfully!`);
            setName(''); 
        } catch (error) {
            setMessage(`Error: ${error.response.data.message}`);
        }
    };

    return (
        <div>
            <h1>Create Category</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Category Name"
                />
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CategoryForm;
