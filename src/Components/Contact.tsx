import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState<{ email?: string }>({});
  const [showAlert, setShowAlert] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setFormErrors({ email: 'El correo electrónico no puede estar vacío' });
      setShowAlert(true); // Mostrar la alerta
      setTimeout(() => {
        setShowAlert(false); // Ocultar la alerta después de 3 segundos
      }, 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors({ email: 'El correo electrónico no es válido' });
      setShowAlert(true); // Mostrar la alerta
      setTimeout(() => {
        setShowAlert(false); // Ocultar la alerta después de 3 segundos
      }, 3000);
      return;
    }

    setFormErrors({});
    setShowAlert(false); // Ocultar la alerta si no hay errores
    // Aquí puedes manejar el email válido (por ejemplo, enviarlo a un servidor)
  };

  return (
    <section className='flex flex-col mx-6 justify-center text-center gap-6 items-center my-20 relative'>
      <h1 className='text-white text-2xl w-52 flex items-center font-bold'>Get notified when we launch</h1>
      <form onSubmit={handleSubmit} className='w-full flex flex-col items-center md:flex-row md:justify-center z-10'>
        <input
          className={`w-[327px] h-10 rounded-full bg-[#093f68] text-white placeholder-gray  ${formErrors.email ? 'border-red-500' : ''}`}
          type="email"
          placeholder='Email address'
          value={email}
          onChange={handleEmailChange}
        />
        {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
        <button type="submit" className='bg-[#3ee9e5] w-[327px] h-10 rounded-full font-semibold mt-4 md:w-[170px] md:ml-5 md:mt-0'>
          Get notified
        </button>
      </form>
      {showAlert && (
        <div className="absolute bottom-0 left-0 z-50 bg-white p-4 rounded-md">
          <p>Email is valid!</p>
        </div>
      )}
      <img className="absolute bottom-0 left-0 z-0" src="../../src/Img/bg-footer-squiggle.svg" alt="" />
    </section>
  );
}

export default Contact;
