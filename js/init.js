function getSiteConfig() {
  return {
    tab_title: 'Sample tab bar title',
    site_title: 'Sample Site Title',
    site_description: 'This is a sample site description.'
  }
};

function personalInfo() {
  return {
    email: 'mybusiness@mail.com',
    telephone: '255-336-1144',
    mobile: '(+63)9223104546',
    business_physcal_address: 'Room 316, MIT Building Lahug, Cebu City',
    coordinates: {lat: 14.15616161, long: -9.5616161651}
  }
}

function siteMenu() {
  return [
    {
      name: 'Home',
      url: '#'
    },
    {
      name: 'About Us',
      url: '#'
    },
    {
      name: 'Menu',
      url: '#'
    },
    {
      name: 'Contact Us',
      url: '#'
    },
    {
      name: 'Opening Hour',
      url: '#'
    }
  ]
};

function socialMedias() {
  return [
    {
      name: 'Facebook',
      symbol: 'f',
      img_url: 'http://kongres-magazine.eu/wp-content/uploads/2017/07/facebook-icon-preview-1.png'
    },
    {
      name: 'Twitter',
      symbol: 't',
      img_url: 'https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png'
    },
    {
      name: 'Pinterest',
      symbol: 'p',
      img_url: 'https://i.pinimg.com/originals/b1/33/74/b133746f7dfcc7757b8a6fa038dd8d1b.png'
    }
  ]
}
