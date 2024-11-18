"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  // Sign in to Firebase with GitHub authentication
  async function handleSignIn() {
    try {
      await gitHubSignIn();
      setTimeout(() => {
        router.push("week-10/shopping-list");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      {user ? (
        <div className="flex flex-col items-center bg-slate-900 px-20 py-5 rounded-3xl">
          <p> Welcome {user.displayName}!</p>
          <p>Loading Shopping List...</p>
        </div>
      ) : (
        <div>
          <p className="flex flex-col items-center text-3xl font-extrabold mb-5">
            Welcome to Shoppie!
          </p>
          <div className="flex flex-col items-center bg-slate-900 px-14 py-7 rounded-3xl">
            <p className="mb-4">
              Sign in bellow to start using your Shopping List!
            </p>
            <button
              type="button"
              onClick={handleSignIn}
              className="bg-blue-500 text-white rounded px-14 py-2 hover:bg-blue-700"
            >
              Sign In with Github
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
