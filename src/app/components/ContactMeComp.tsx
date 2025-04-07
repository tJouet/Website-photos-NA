import { useState } from "react";
import Title from "../atoms/Title";
import useContactStore from "@/stores/contact";

const ContactMeComp = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    title: "",
    message: "",
  });

  const { sendForm } = useContactStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm(formData);
    setFormData({
      email: "",
      subject: "",
      title: "",
      message: "",
    });
  };
  return (
    <>
      <Title content={"Contact"} imageUrl="/images/relache03_07/P1260179.jpg" />
      <div className=" flex justify-center items-center w-full">
        <form
          onSubmit={handleSubmit}
          className=" rounded-lg p-6 w-full max-w-lg"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              placeholder="Votre adresse e-mail"
              required
            />
          </div>

          <div className="mb-4 ">
            <label htmlFor="subject" className="block  font-medium mb-2">
              Objet
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              required
            >
              <option value="" disabled>
                Sélectionnez un objet
              </option>
              <option value="priseRdv">Prendre rendez-vous</option>
              <option value="informations">Demande d&apos;informations</option>
              <option value="misc">Autre</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block  font-medium mb-2">
              Titre
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              placeholder="Titre de votre message"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block  font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              placeholder="Votre message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-darkerGrey text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactMeComp;
