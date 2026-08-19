import React, { useEffect, useState } from 'react';
import Title from './Title';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assests';
import axiosInstance from '../services/axiosInstance';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [responseType, setResponseType] = useState('');

  useEffect(() => {
    if (responseMsg) {
      const timer = setTimeout(() => {
        setResponseMsg('');
        setResponseType('');
      }, 50000);

      return () => clearTimeout(timer);
    }
  }, [responseMsg]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');
    setResponseType('');

    try {
      const { data } = await axiosInstance.post('/mail', form);
      setResponseMsg(data.message || 'Message sent successfully!');
      setResponseType('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setResponseMsg(err.response?.data?.message || 'Something went wrong.');
      setResponseType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative section-x section-pt mb-10"
      id="contact-us"
    >
      <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl pointer-events-none select-none" />
      <Title
        title="Contact Us Here"
        subtitle="Share your ideas, and let’s build something great together."
      />

      <form
        className="flex flex-col items-center text-sm my-10 w-full max-w-3xl mx-auto bg-coprimary border border-borderColor rounded-2xl p-6 md:p-10"
        data-aos="fade-up"
        data-aos-delay="300"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="w-full">
            <label className="text-muted" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              className="h-12 p-2 mt-2 w-full bg-background text-text border border-borderColor rounded outline-none focus:border-primary transition-colors duration-300"
              value={form.name}
              onChange={handleChange}
              type="text"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="w-full">
            <label className="text-muted" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              className="h-12 p-2 mt-2 w-full bg-background text-text border border-borderColor rounded outline-none focus:border-primary transition-colors duration-300"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <label className="text-muted" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-2 p-2 h-40 bg-background text-text border border-borderColor rounded resize-none outline-none focus:border-primary transition-colors duration-300"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Share Your Thoughts, Project Ideas and Question..."
          />
        </div>

        <button
  type="submit"
  disabled={loading}
  className="cursor-pointer mt-5 bg-primary hover:bg-primaryDark hover:glow-primary text-background h-12 w-56 px-4 rounded active:scale-95 transition-all duration-300"
>
  {loading ? 'Sending...' : 'Send Message'}
</button>

{/* Alerts shown directly under the button */}
{responseType === 'success' && responseMsg && (
  <div className="mt-3 w-full max-w-md flex justify-center ">
    <SuccessAlert
      title="Message sent successfully!"
      message={responseMsg}
      onClose={() => setResponseMsg('')}
    />
  </div>
)}

{responseType === 'error' && responseMsg && (
  <div className="mt-3 w-full max-w-md flex justify-center">
    <ErrorAlert message={responseMsg} onClose={() => setResponseMsg('')} />
  </div>
)}
      </form>
    </div>
  );
};

export default Form;
