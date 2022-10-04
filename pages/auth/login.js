import { getCsrfToken, signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa';

export default function SignIn({ csrfToken }) {
  const { query } = useRouter();
  const { redirectUri } = query;

  return (
    <div className="mt-3 row justify-content-around text-center">
      <div className="col-4">
        <div>Sign In</div>
        <button className="btn btn-primary mt-2 px-3 w-100" onClick={() => signIn('google', { callbackUrl: redirectUri || '/' })}><FaGoogle size={'1em'} className="mb-1 me-2"/>Google</button>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}