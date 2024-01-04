import { useContext, useState } from 'react';
import { AuthContext } from './context/AutheProbider';

function CreditCardForm() {
 

   const{ signIn, createUser} =useContext(AuthContext)
   
 const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



    const handleLogin=(e)=>{
      e.preventDefault()
    const from=e.target
    const  email=from.email.value;
    const  password=from.password.value


         signIn(email, password)
  .then(user => {
    console.log('User signed in:', user);
  })
  .catch(error => {
    console.error('Firebase authentication error:', error.code, error.message);
  });


    console.log(email,password)

    }
   




  return (

    <>
 
<div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
    <form   onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block mb-1" >Email-Address</label>
        <input required id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
       <div>
      <label htmlFor="password">Password</label>
      <input

      className='w-full py-2 px-2 rounded-md border border-gray-300'
        type={showPassword ? 'text' : 'password'}
        id="password"
        value={password}
        name='password'
        onChange={handlePasswordChange}
      />
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
    </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label  className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
        
      </div>
      <div className="mt-6">
        <button   type='submit' className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
      </div>
     
    </form>
  </div>
</div>


</>
  );
}

export default CreditCardForm;
