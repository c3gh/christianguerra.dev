import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header>
        <Link href='/'>
          <a>
            <h1>christian</h1>
          </a>
        </Link>
      </header>

      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 4rem;
          position: absolute;
          width: 100%;
        }
        h1 {
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: -0.5px;
        }
      `}</style>
    </>
  )
}

export default Header
