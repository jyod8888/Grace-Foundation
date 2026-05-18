export const site = {
  name: 'Grace Foundation',
  tagline: 'Embrace • Educate • Enhance • Empower',
  email: 'gracefoundation2@gmail.com',
  altEmail: 'grace@gracef.org',
  phone: '+91 98194 45069',
  whatsapp: '+91 84338 10217',
  address: 'Office No. 11, C5/6, Shanti Vihar, Near P. G. Vora School, Mira Road East, Thane 401107, Mumbai, Maharashtra',
};

export const programItems = [
  { href: '/education', label: 'Education' },
  { href: '/mother-nature', label: 'Mother Nature' },
  { href: '/women-empowerment', label: 'Women Empowerment' },
  { href: '/institutional-care', label: 'Institutional Care' },
];

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/mission', label: 'Mission' },
  { label: 'Programs', children: programItems },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact Us' },
];

export const programs = [
  {
    title: 'Education Support',
    href: '/education',
    image: '/data/images/india-village-school.png',
    description: 'Helping children and youth continue learning through academic guidance, distance learning awareness, mentoring, and encouragement for a stronger future.'
  },
  {
    title: 'Women Empowerment',
    href: '/women-empowerment',
    image: '/data/images/india-women-education.jpg',
    description: 'Promoting dignity, confidence, equal opportunity, and social participation so women and families can grow with independence and respect.'
  },
  {
    title: 'Institutional Care',
    href: '/institutional-care',
    image: '/data/images/india-food-distribution.jpg',
    description: 'Supporting vulnerable children and communities through care, safety, food support, guidance, and long-term hope.'
  },
  {
    title: 'Mother Nature',
    href: '/mother-nature',
    image: '/images/1.jpg',
    description: 'Encouraging environmental awareness, care for public spaces, and community participation in protecting natural resources.'
  }
];

export const galleryImages = [
  '/data/images/india-village-school.png',
  '/data/images/india-women-education.jpg',
  '/data/images/india-food-distribution.jpg',
  '/data/images/grace-community-hands.jpg',
  '/data/images/grace-children-care.jpg',
  '/images/page1-img1.jpg',
  '/images/page1-img2.jpg',
  '/images/page3-img1.jpg',
  '/images/page3-img2.jpg',
  '/images/page2-img3.jpg'
];
