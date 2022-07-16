const Background = () => {
  return (
    <>
      <section className='container'>
        <div>
          <p>
            I&apos;m a Software Engineer focused on designing and developing
            quality web solutions. Always learning something new and open to try
            different technologies. Enthusiastic, self-motivated, adaptable to
            challenging situations and excellent team player.
          </p>
        </div>
      </section>

      <style jsx>{`
        section {
          align-items: center;
          display: flex;
          font-size: 1.5rem;
          justify-content: center;
        }
        div {
          margin: 0 auto;
          max-width: 640px;
        }
      `}</style>
    </>
  )
}

export default Background
