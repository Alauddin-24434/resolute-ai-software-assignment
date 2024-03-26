import  { useState } from "react";
import "./Signup.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";

const Signup = () => {
    // State variable to store form input values
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
      
    });
    const navigate=useNavigate()
    const [error, setError] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
   
        // Clear error if passwords match
        setError("");
    
        try {
            // Make POST request to your backend server
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const responseData = await response.json();
                console.error("Error Status:", response.status);
                console.error("Error Message:", responseData.message);
                throw new Error("Network response was not ok");
            }
    
            const responseData = await response.json();
            console.log(responseData.message);
            navigate('/login')
            // Handle successful response if needed
        } catch (error) {
            console.error("Error:", error);
            // Handle error if needed
        }
    };
    

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
               
                {error && <p className="error">{error}</p>}
                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
