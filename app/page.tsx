export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0d1117',
      color: '#f8fafc',
      padding: '24px',
      textAlign: 'center',
    }}>
      <section style={{
        maxWidth: '720px',
        width: '100%',
      }}>
        <p style={{
          margin: 0,
          fontSize: '1rem',
          color: '#94a3b8',
        }}>
          Site en construction
        </p>
        <h1 style={{
          margin: '16px 0 0',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
        }}>
          Harir Avocats
        </h1>
        <div style={{
          marginTop: '24px',
          fontSize: '1rem',
          color: '#94a3b8',
          lineHeight: 1.5,
        }}>
          <p>77, boulevard du Montparnasse,</p>
          <p>75006, Paris</p>
          <p>T. +33 (0)1 86 95 80 45</p>
          <p>F. +33 (0)1 86 95 80 46</p>
          <p><a href="mailto:s.harir@harir-avocats.com" style={{ color: '#f8fafc', textDecoration: 'none' }}>s.harir@harir-avocats.com</a></p>
        </div>
      </section>
    </main>
  )
}
