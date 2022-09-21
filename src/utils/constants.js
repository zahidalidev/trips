const chartDetails = [
  {
    expanded: true,
    question: 'How many bikes are rented at every hour of the day?',
    details: {},
    label: 'Bikes Rented At Each Hour',
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Bikes',
          },
        },
      },
    },
  },
  {
    expanded: false,
    question: 'The age distribution of riders for each starting location',
    details: {},
    label: 'Average Age Distribution',
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Age',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Station Id',
          },
        },
      },
    },
  },
  {
    expanded: false,
    question: 'The average distance covered by each bike',
    details: {},
    label: 'Average Covered Distance',
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Distance',
          },
          ticks: {
            callback: (value) => `${value}m`,
          },
        },
        x: {
          title: {
            display: true,
            text: 'Bike Id',
          },
        },
      },
    },
  },
]

export default chartDetails
