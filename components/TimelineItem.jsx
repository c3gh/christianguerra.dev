const TimelineItem = ({
  jobTitle,
  company,
  startDate,
  endDate,
  description
}) => {
  return (
    <>
      <div className='experience'>
        <div className='position'>
          <h3>{jobTitle}</h3>
          <p>{company}</p>
          <span>
            <small>
              {startDate} - {endDate || 'Currently'}
            </small>
          </span>
        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
      </div>

      <style jsx>{`
        .experience {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .experience::after {
          background-color: #9e9c9c;
          border-radius: 999px;
          content: '';
          height: 10px;
          position: absolute;
          transform: translate(0.5px, 30px);
          width: 10px;
        }
        .position,
        .description {
          padding: 20px;
          width: 50%;
        }
        .position {
          text-align: right;
        }
        .description {
          text-align: left;
        }
        h3,
        p {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default TimelineItem
