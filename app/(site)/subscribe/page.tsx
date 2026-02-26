export default function SubscribePage() {
  return (
    <main className="simple-auth container">
      <section className="auth-card">
        <h1>What’s your email?</h1>
        <div className="auth-input-wrap">
          <input type="email" placeholder="Type your email..." />
          <button>Subscribe</button>
        </div>
        <p className="auth-meta">By submitting, you agree to Terms, Privacy Policy and collection notice.</p>
      </section>
    </main>
  );
}
