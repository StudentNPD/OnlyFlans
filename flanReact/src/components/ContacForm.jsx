import React, { useState } from "react";
import { formulario } from "../api/flancito.api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    customer_email: "",
    customer_name: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, isSubmitting: true });

    try {
      await formulario(formData);
      setStatus({
        message: "Enviado!",
        isError: false,
        isSubmitting: false,
      });
      setFormData({ customer_email: "", customer_name: "", message: "" });
    } catch (error) {
      setStatus({
        message: "Error creating contact. Please try again.",
        isError: true,
        isSubmitting: false,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Contáctanos</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="customer_name"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customer_name"
            name="customer_name"
            type="text"
            placeholder="Ingresa tu nombre"
            value={formData.customer_name}
            onChange={handleChange}
            required
            maxLength={64}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="customer_email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customer_email"
            name="customer_email"
            type="email"
            placeholder="Ingresa tu email"
            value={formData.customer_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Mensaje
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {status.message && (
          <div
            className={`mb-4 p-4 rounded-md ${
              status.isError
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {status.message}
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              status.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={status.isSubmitting}
          >
            {status.isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
