import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Pokémon Trading Card Game</h1>
      <div className="card-grid">
        <Link href="/">
          <div className="card">Home</div>
        </Link>
        <Link href="/login">
          <div className="card">Login</div>
        </Link>
        <Link href="/collection">
          <div className="card">Collection</div>
        </Link>
        <Link href="/profiles">
          <div className="card">See Other Profiles</div>
        </Link>
      </div>
      <style jsx>{`
        body {
          background-color: white;
          margin: 0;
          padding: 0;
        }
        .container {
          text-align: center;
          padding: 2rem;
          max-width: 300px;
          margin: 0 auto;
          color: white;
        }
        .card-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        .card {
          background-color: #ffd700;
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
          color: black;
        }
        .card:hover {
          background-color: #ff0000;
          color: white;
        }
      `}</style>
    </div>
  );
}