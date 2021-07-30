/* eslint-disable @next/next/no-img-element */
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';
import { signIn, signout, useSession } from 'next-auth/client'
import { useRouter } from 'next/router';

import styles from './styles.module.scss';


export function SignInButton () {

  const [session] = useSession();
  const router = useRouter();
  // console.log(session)

  // const inUserLoggedIn = false;

  return session ? (
    <button 
      type="button" 
      className={styles.SingInButton}
      onClick={() => signout()}
    >  
      <FaGithub color="#04d361"/>  
      { session.user.name }
      <FiX  color="#737380" className={styles.closeIcon}/>
    </button>

  ) : (
    <button 
      type="button"  
      className={styles.SingInButton}
      onClick={() => 
        signIn('github')
      }
    >  
      <FaGithub color="#eba417"/>  
      Sign in with Github
    </button>
  )
}