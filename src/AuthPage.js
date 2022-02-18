import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(signUpEmail, signUpPassword);
    setCurrentUser(user);
    clearForms();

  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(signInEmail, signInPassword);
    setCurrentUser(user);
    clearForms();
  }
  return (
    <div className='auth-page'>
      <form onSubmit={handleSignUp}>
        <label>
                Email

          <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
        </label>
        <label>
                Password

          <input value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
                Email

          <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
        </label>
        <label>
                Password

          <input value={signInPassword} onChange={e => setSignInPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
