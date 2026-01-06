function App() {
  const { useState, useEffect } = React;
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch('/api/alumni')
      .then(r => r.json())
      .then(data => {
        setAlumni(data);
      })
      .catch(() => setAlumni([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = alumni.filter(a =>
    a.name.toLowerCase().includes(q.toLowerCase()) ||
    a.role.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <section className="hero">
        <h2>Welcome to the Alumni Data Management System</h2>
        <p>Find alumni, view profiles, and keep the community connected.</p>
      </section>

      <section className="alumni-list">
        <h3>Alumni</h3>
        <div style={{marginBottom:12}}>
          <input placeholder="Search name or role" value={q} onChange={e => setQ(e.target.value)} />
        </div>

        {loading ? (
          <div>Loading…</div>
        ) : (
          <div className="grid">
            {filtered.length === 0 ? (
              <div className="card">No results</div>
            ) : (
              filtered.map(a => (
                <article key={a.id} className="card">
                  <h4>{a.name}</h4>
                  <div className="meta">{a.role} • Class of {a.year}</div>
                  <p style={{marginTop:8}}>{a.bio}</p>
                </article>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
