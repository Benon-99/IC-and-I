import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            padding: "2rem",
            // background: "linear-gradient(135deg, #1e1e2f, #121212)"
        }}>
            <div style={{
                maxWidth: "500px",
                width: "100%",
                backgroundColor: "#1e1e2f",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#ffffff" }}>
                        Send us a message
                    </h2>
                    <p style={{ fontSize: "0.875rem", marginBottom: "1.5rem", color: "#9c3aaf" }}>
                        Fill out the form below and we'll get back to you shortly.
                    </p>

                    {/* Name Field */}
                    <div style={{ marginBottom: "1rem" }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "6px",
                                border: "1px solid #444",
                                backgroundColor: "#2a2a42",
                                color: "#ffffff",
                            }}
                        />
                    </div>

                    {/* Email Field */}
                    <div style={{ marginBottom: "1rem" }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "6px",
                                border: "1px solid #444",
                                backgroundColor: "#2a2a42",
                                color: "#ffffff",
                            }}
                        />
                    </div>

                    {/* Subject Field */}
                    <div style={{ marginBottom: "1rem" }}>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "6px",
                                border: "1px solid #444",
                                backgroundColor: "#2a2a42",
                                color: "#ffffff",
                            }}
                        />
                    </div>

                    {/* Message Field */}
                    <div style={{ marginBottom: "1.5rem" }}>
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "6px",
                                border: "1px solid #444",
                                backgroundColor: "#2a2a42",
                                color: "#ffffff",
                                minHeight: "120px",
                            }}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" style={{
                        width: "100%",
                        padding: "0.75rem",
                        backgroundColor: "#9c3aaf",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
