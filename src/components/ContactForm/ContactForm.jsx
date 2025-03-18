import { useState } from "react";
import { InputField } from "../InputField/InputField";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setResponseMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // reset the form:

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[372px] flex flex-col justify-center mx-auto p-6 bg-gray-800 border-2 border-gray-100 rounded-xl text-gray-100 font-outfit">
      {responseMessage && (
        <div className="p-3 mb-4 text-green-800 bg-green-100 rounded">
          {responseMessage}
        </div>
      )}
      {error && (
        <div className="p-3 mb-4 text-red-800 bg-red-100 rounded">{error}</div>
      )}

      <h2>Contact me</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="your name"
          value={form.name}
          onChange={handleChange}
        >
          Name
        </InputField>

        <InputField
          type="email"
          name="email"
          placeholder="your email"
          value={form.email}
          onChange={handleChange}
        >
          Email
        </InputField>

        <InputField
          type="text"
          name="subject"
          placeholder="e.g. feedback"
          value={form.subject}
          onChange={handleChange}
        >
          Subject
        </InputField>

        <InputField
          type="textarea"
          name="message"
          placeholder="your message here ..."
          value={form.message}
          onChange={handleChange}
        >
          Message
        </InputField>

        <button
          type="submit"
          disabled={isSubmitting}
          className="p-2.5 w-full border-2 border-gray-200 rounded-2xl text-gray-200 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
