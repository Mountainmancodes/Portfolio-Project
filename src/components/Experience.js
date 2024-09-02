import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer III',
      company: 'USAA',
      location: 'Colorado',
      duration: 'Nov 2023 - Present',
      responsibilities: [
        'Develop and maintain employee mobile applications.',
        'Collaborate with cross-functional teams to enhance application functionality.',
        'Implement agile methodologies to ensure efficient and cost-effective project delivery.',
      ],
    },
    {
      title: 'IT Systems Analyst III',
      company: 'USAA',
      location: 'Colorado',
      duration: 'Mar 2023 - Nov 2023',
      responsibilities: [
        'Coordinated and oversaw local IT infrastructure.',
        'Provided troubleshooting and technical assistance for MAC-related issues.',
        'Validated and documented established test plans in ServiceNow for SOAR development.',
        'Assisted in building test plans in ServiceNow for SOAR development.',
        'Maintained and facilitated the rapid deployment of CAT equipment to local claims teams to ensure rapid response to catastrophes.',
        'Utilized Jira agile methodology to ensure quality service is provided to IT customers, ensuring all projects are completed on time and IT costs are kept in line with the plan and reduced when possible.',
        'Ensured that knowledge articles reflected the correct graphics, routing, and steps to facilitate a seamless troubleshooting experience.',
      ],
    },
    {
      title: 'Banking and Insurance Solutions Senior',
      company: 'USAA',
      location: 'Colorado',
      duration: 'Jan 2018 - Mar 2023',
      responsibilities: [
        'Served as Sit-in Manager, focusing on trends and providing consistent feedback to facilitate continued MSR improvement.',
        'Collaborated with BIS Managers and Learning and Development to facilitate MSR development.',
        'Involved in the "Promise Fulfilled" project, facilitating conversations around BIS processes in relation to auto and property acquisition.',
      ],
    },
    {
      title: 'Banking and Insurance I',
      company: 'USAA',
      location: 'Colorado',
      duration: 'Oct 2015 - Jan 2018',
      responsibilities: [
        'Recognized multiple times for being in the top 5% for sales.',
        'Collaborated with managers and peers to help drive team results.',
        'Elected to serve as a safety net for new hires in NMS, guiding, educating, and helping develop new hires in the pipeline.',
      ],
    },
    {
      title: 'Proof of Concept Specialist',
      company: 'Progressive',
      location: 'Colorado',
      duration: 'Jun 2012 - Oct 2015',
      responsibilities: [
        'Helped drive customer retention by implementing new enterprise processes and verbiage.',
        'Coached peers and new hires on business processes and metric attainment, leading to multiple team recognition awards.',
        'Tracked, gathered, and developed business processes to reduce costs for customers and the company.',
      ],
    },
    {
      title: 'CSR/Delivery',
      company: 'Southern Medical Equipment Corp',
      location: 'Alabama',
      duration: '2011 - 2012',
      responsibilities: [
        'Created and monitored territory expense reports for Southern Alabama territory.',
        'Created and archived all territory marketing materials for sales team use.',
        'Collaborated with partner companies to develop training and education for internal employees on new patient systems.',
      ],
    },
    {
      title: 'Buyer/Supervisor',
      company: 'Entertainmart',
      location: 'Colorado',
      duration: '2006 - 2012',
      responsibilities: [
        'Analyzed and monitored sales records, trends, and economic conditions to anticipate consumer buying patterns and determine what the company will sell and how much inventory is needed.',
        'Implemented hiring/training procedures for a newly developed department.',
        'Maintained knowledge of current sales and promotions, policies regarding payment, exchanges, and security practices.',
      ],
    },
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.title}</h3>
          <p className="job-details">{job.company}, {job.location}</p>
          <p className="job-duration">{job.duration}</p>
          <ul>
            {job.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
