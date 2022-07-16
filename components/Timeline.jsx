import TimelineItem from './TimelineItem'

const items = [
  {
    jobTitle: 'Junior Software Engineer',
    company: 'EPAM Systems',
    startDate: 'July, 2021',
    endDate: '',
    description:
      'Working as a Junior Software Engineer within a project for an important car retailer company.'
  },
  {
    jobTitle: 'Frontend Developer',
    company: 'Universidad Politécnica de Sinaloa',
    startDate: 'January, 2021',
    endDate: 'July, 2021',
    description:
      'Worked as a Frontend Developer in a web application aimed to professors and students, with the goal to facilitate and improve the management of the internships process of the University.'
  }
]

const Timeline = () => {
  return (
    <>
      <section className='container'>
        <div>
          <h1>Experience</h1>
          <div className='line'>
            {items.map(item => (
              <TimelineItem key={item.company} {...item} />
            ))}
          </div>
        </div>
      </section>

      <style jsx>
        {`
          section > div {
            margin: 0 auto;
            max-width: 640px;
          }
          h1 {
            text-align: center;
          }
          .line {
            position: relative;
          }
          .line::after {
            background-color: #9e9c9c;
            content: '';
            height: 100%;
            left: 50%;
            position: absolute;
            top: 0;
            width: 1px;
          }
        `}
      </style>
    </>
  )
}

export default Timeline
