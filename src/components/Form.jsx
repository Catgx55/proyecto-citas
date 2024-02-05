import React, { useState } from 'react'
import Error from './Error';

function Form({patients, setPatients}) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  const newId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario
    if([name, owner, email, alta, symptoms].includes('')){
      setError(true)
      return;
    };

    setError(false);

    //Objeto de pacientes
    const objectPatients = {
      name, 
      owner, 
      email, 
      alta, 
      symptoms,
      id: newId()
    }

    setPatients([...patients, objectPatients]);

    //Reiniciar form
    setName('');
    setOwner('');
    setEmail('');
    setAlta('');
    setSymptoms('');
  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {" "}
        <span className='text-indigo-600 font-bold'>Administralos</span></p>

        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' >
          {error && <Error><p>'Todos los campos son obligatorios'</p></Error> }
          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase'>
              Nombre Mascota
            </label>
            <input 
              id='mascota'
              type='text'
              placeholder='Nombre de la Mascota'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div className='mb-5'>
            <label htmlFor='owner' className='block text-gray-700 uppercase'>
              Nombre Propietario
            </label>
            <input 
              id='owner'
              type='text'
              placeholder='Nombre del Propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase'>
              Email
            </label>
            <input 
              id='email'
              type='email'
              placeholder='Email Contacto Propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase'>
              Alta
            </label>
            <input 
              id='alta'
              type='date'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
              />
          </div>
          <div className='mb-5'>
            <label htmlFor='symptoms' className='block text-gray-700 uppercase'>
              Síntomas
            </label>
            <input 
              id='symptoms'
              type='text'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              placeholder='Describe los Síntomas'
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              />
          </div>
          <input 
            type='submit'
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all'
            value='Agregar Paciente'
          />
        </form>
    </div>
  )
}

export default Form
