export default () => ({
  appInfo: {
    appName: 'Morgan Design',
    heading: 'Heading',
    subHeading: 'Sub-Heading',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    appIcon: require('~/assets/img/icon.png')
  },

  services: [
    {
      id: 1,
      name: 'Service-1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      serviceIcon: require('~/assets/icons/icon-1.svg')
    },
    {
      id: 2,
      name: 'Service-2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      serviceIcon: require('~/assets/icons/icon-2.svg')
    },
    {
      id: 3,
      name: 'Service-3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      serviceIcon: require('~/assets/icons/icon-3.svg')
    },
    {
      id: 4,
      name: 'Service-4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      serviceIcon: require('~/assets/icons/icon-4.svg')
    }
  ],

  colors: ['system', 'light', 'dark']
});
