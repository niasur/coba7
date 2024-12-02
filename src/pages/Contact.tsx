import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);

    // Clear the form after submitting
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 sm:p-10 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact Me</h1>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Get in touch</h2>
      <p className="text-sm sm:text-base text-black-300 mb-6 text-center">
        I'm very approachable and would love to speak to you. Feel free to call, send me an email. Follow me on social media or simply complete the enquiry form.
      </p>
      
      {/* Kontainer untuk Nomor Telepon dan Email */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0 mb-6 w-full max-w-md">
        {/* Kontainer untuk Nomor Telepon */}
        <div className="flex items-center space-x-4 flex-1">
          <div className="bg-white p-2 rounded-full text-blue-500">
            <i className="fas fa-phone-alt"></i> {/* FontAwesome icon */}
          </div>
          <a href="https://wa.me/+628989878274" className="text-sm sm:text-base text-blue-500 hover:underline">
            +62 898-9878-274
          </a>
        </div>

        {/* Kontainer untuk Email */}
        <div className="flex items-center space-x-4 flex-1">
          <div className="bg-white p-2 rounded-full text-blue-500">
            <i className="fas fa-envelope"></i> {/* FontAwesome icon */}
          </div>
          <a href="mailto:rusitainnya@gmail.com" className="text-sm sm:text-base text-blue-500 hover:underline">
            rusitainnya@gmail.com
          </a>
        </div>
      </div>

      {/* Form Kontak */}
      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden mx-auto mt-6 w-full max-w-md sm:max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 sm:p-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 border rounded"
            required
            maxLength={30}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 border rounded"
            required
            maxLength={50}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;