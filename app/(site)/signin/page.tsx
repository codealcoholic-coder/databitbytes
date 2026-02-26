export default function SignInPage() {
  return (
    <main className="simple-auth container">
      <section className="auth-card signin-card">
        <h1>Sign in to DataBites</h1>
        <input type="email" placeholder="Email" />
        <button className="primary-auth">Continue</button>
        <p className="auth-meta">First time here? Create an account</p>
      </section>
    </main>
  );
}
