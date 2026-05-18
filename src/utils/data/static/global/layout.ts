/**
 * @description This module exports an object containing assets for the root layout.
 * @private
 * @function layoutAssets
 * @property {object} navigationBar - An object containing assets for the navigation bar.
 * @property {object} contactForm - An object containing assets for the contact form.
 * @property {object} footer - An object containing assets for the footer.
 * @property {object} contactWhatsApp - An object containing assets for the WhatsApp contact button.
 * @return {object} An object containing navigation bar, contact form, footer, and WhatsApp contact button assets.
 */
export const layoutAssets = {
  navigationBar: {
    menuId: 'options-menu',
    logo: { url: '/images/logo/logo1.webp' },
    getStartedButtonHref: { href: '#contact-us' },
    links: [
      { key: 'home', href: '/', icon: 'home', id: 15 },
      { key: 'aboutUs', href: '#about-us', icon: 'about-us', id: 16 },
      { key: 'services', href: '#services', icon: 'services', id: 17 },
      { key: 'areas', href: '#contact-us', icon: 'areas', id: 18 },
      { key: 'process', href: '#process', icon: 'process', id: 19 },
      { key: 'reviews', href: '#testimonials', icon: 'reviews', id: 20 },
      { key: 'offers', href: '#services', icon: 'offers', id: 21 },
      { key: 'blogs', href: '#testimonials', icon: 'blogs', id: 22 },
    ],
  },
  contactForm: {
    fields: [
      { key: 'name', type: 'text', icon: 'user' },
      { key: 'email', type: 'email', icon: 'email' },
      { key: 'phone', type: 'tel', icon: 'phone' },
    ],
    problemDescription: { key: 'problemDescription', charactersLimit: 400 },
  },
  footer: {
    sectionId: 'footer',
    logo: { url: '/images/logo/logo2.webp' },
    copyright: { key: 'copyright', year: new Date().getFullYear() },
    contacts: [
      {
        key: 'address',
        href: 'https://maps.google.com/?q=Houston,TX,USA',
        type: 'Address',
        icon: 'location',
        id: 62,
      },
      { key: 'phone', href: 'tel:+12814427230', type: 'Phone', icon: 'phone', id: 64 },
      { key: 'schedule', href: '#', type: 'Schedule', icon: 'clock', id: 65 },
      { key: 'email', href: 'mailto:henrystopnotchair@live.com', type: 'Email', icon: 'email', id: 63 },
    ],
    links: [
      { key: 'quickLinks', href: '#', id: 23 },
      { key: 'allAboutUs', href: '/', id: 29 },
      { key: 'home', href: '/', id: 24 },
      { key: 'allAreas', href: '/', id: 25 },
      { key: 'ourBlogs', href: '/', id: 26 },
      { key: 'allReviews', href: '/', id: 27 },
      { key: 'ourProcess', href: '/', id: 28 },
      { key: 'specialOffers', href: '/', id: 30 },
      { key: 'ourServices', href: '#', id: 31 },
      { key: 'hvacSystemMaintenance', href: '/', id: 32 },
      { key: 'hvacSystemInstallation', href: '/', id: 33 },
      { key: 'hvacSystemRepair', href: '/', id: 34 },
      { key: 'airQualitySolutions', href: '/', id: 35 },
      { key: 'acInstallation', href: '/', id: 36 },
      { key: 'breatheEasyBundle', href: '/', id: 37 },
      { key: 'coolComfortDeal', href: '/', id: 38 },
    ],
    highlight: ['quickLinks', 'ourServices'],
    certifieds: {
      title: { key: 'certifieds.title' },
      description: { key: 'certifieds.description' },
      license: [
        { key: 'certifieds.license.label', id: 68 },
        { key: 'certifieds.license.number', id: 69 },
      ],
      imagesUrl: [
        { url: '/images/certifieds/certified4.webp', id: 66 },
        { url: '/images/certifieds/certified8.webp', id: 68 },
        { url: '/images/certifieds/certified6.webp', id: 67 },
      ],
      mapsUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.6068672945!2d-95.350747!3d29.875609599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b778421d4375%3A0xeb2ba56539e71463!2s2228%20William%20Tell%20St%2C%20Houston%2C%20TX%2077093%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1773350497868!5m2!1ses!2smx',
    },
    networks: [
      {
        href: 'https://facebook.com/profile.php?id=61586744246927',
        icon: 'facebook',
        name: 'Facebook',
        id: 49,
      },
      { href: 'https://twitter.com/remiuxsoft', icon: 'twitter', name: 'Twitter', id: 44 },
      { href: 'https://youtube.com/remiuxsoft', icon: 'youtube', name: 'YouTube', id: 46 },
      { href: 'https://instagram.com/remiuxsoft', icon: 'instagram', name: 'Instagram', id: 45 },
    ],
  },
  directLine: [
    {
      href: `https://wa.me/${process.env.WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(process.env.WHATSAPP_CONTACT_MESSAGE ?? '')}`,
      icon: 'whatsapp',
    },
    { href: `tel:${process.env.PHONE_CONTACT_NUMBER}`, icon: 'phone' },
  ],
} as const
