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
        <a
          href="mailto:s.harir@harir-avocats.com"
          style={{
            display: 'inline-flex',
            marginTop: '24px',
            padding: '14px 24px',
            borderRadius: '9999px',
            backgroundColor: 'transparent',
            border: '1px solid #ffffff',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          s.harir@harir-avocats.com
        </a>
      </section>
    </main>
  )
}
