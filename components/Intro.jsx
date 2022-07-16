const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/c3gh'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/christian-guerra-917929208/'
  }
]

const Intro = () => {
  return (
    <>
      <section className='container'>
        <h2>
          <span>
            I work as a <br /> software engineer.
          </span>
        </h2>
        <div className='contact'>
          {links.map(({ name, url }, index) => (
            <a href={url} key={name} rel='noreferrer' target='_blank'>
              {name}
            </a>
          ))}
        </div>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        h2 {
          font-size: calc(35px + 4.8vw);
          font-weight: 300;
          letter-spacing: -1.5px;
          line-height: 0.9;
          margin: 0 0 2rem 0;
        }
        .contact {
          display: grid;
          font-size: 1.2rem;
          font-weight: 500;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 3rem;
        }
        @media (max-width: 425px) {
          .contact {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}

export default Intro
