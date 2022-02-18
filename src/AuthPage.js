import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [signInemail, setSignInEmail] = useState('');
  const [signInpassword, setSignInPassword] = useState('');
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

    const user = await signIn(signInemail, signInpassword);
    setCurrentUser(user);
    clearForms();
  }
  return (
    <div>AuthPage</div>
  );
}
