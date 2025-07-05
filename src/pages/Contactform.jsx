import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[450px] flex flex-col gap-5 rounded-lg bg-white shadow-[0_1px_4px_#ededed] p-6"
    >
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col">
          <label htmlFor="firstName" className="mb-1 text-sm text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Value"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="h-9 border border-[#ececec] rounded bg-[#fcfcfc] text-[15px] outline-none px-2"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="lastName" className="mb-1 text-sm text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Value"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="h-9 border border-[#ececec] rounded bg-[#fcfcfc] text-[15px] outline-none px-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="mobileNumber" className="mb-1 text-sm text-gray-700">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Value"
          required
          value={formData.mobileNumber}
          onChange={handleChange}
          className="h-9 border border-[#ececec] rounded bg-[#fcfcfc] text-[15px] outline-none px-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Value"
          required
          value={formData.email}
          onChange={handleChange}
          className="h-9 border border-[#ececec] rounded bg-[#fcfcfc] text-[15px] outline-none px-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 text-sm text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Value"
          required
          value={formData.message}
          onChange={handleChange}
          className="min-h-[64px] border border-[#ececec] rounded bg-[#fcfcfc] text-[15px] outline-none px-2 py-1 resize-y"
        />
      </div>
      <button
        type="submit"
        className="h-10 bg-[#00c4de] text-white text-base font-medium rounded cursor-pointer w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;