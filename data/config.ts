// Fixed config.ts with working placeholder images
// The main issue was corrupted/incomplete base64 strings

const founderImageUri = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2RhYTdjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzEyMTIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFzaCBEYW5pZWw8L3RleHQ+PC9zdmc+';

const logoImageUri = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMjEyMTIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjY2RhYTdjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RiZhbXA7RiBQcm9kdWN0aW9uczwvdGV4dD48L3N2Zz4=';

export const config = {
  site: {
    logoUrl: logoImageUri,
    founderImageUrl: founderImageUri
  },
  header: {
    cta: {
      text: 'Let\'s Create Together',
      href: '#contact'
    }
  },
  hero: {
    title: 'Crafting Stories in Sound & Vision.',
    subtitle: 'We blend creativity, technology, and storytelling to build immersive brand experiences.',
    ctaPrimary: {
      text: 'Let\'s Create Together',
      href: '#contact'
    },
    ctaSecondary: {
      text: 'Watch the Showreel',
      href: '#portfolio'
    },
    footnote: 'Trusted by artists and brands worldwide.'
  },
  about: {
    title: 'Meet the Founder: Ash Daniel',
    bio: 'With a vision to merge emotional narratives with cutting-edge production, Ash Daniel founded Frame & Frequency to be a sanctuary for stories that demand to be felt. Specializing in translating core messages into cinematic soundscapes and visuals, my approach is always collaborative, precise, and centered on creating a lasting impact.',
    highlights: ['Turnaround Quality', 'Collaborative Process', 'End-to-End Delivery'],
    cta: {
      text: 'See Our Work',
      href: '#portfolio'
    }
  },
  services: {
    title: 'Our Services',
    items: [
      { title: "Music Production", description: "From songwriting to a final, radio-ready mix, we deliver broadcast-quality tracks that resonate." },
      { title: "Video Production", description: "We create beautiful, brand-aligned visual stories, from concept and scripting to the final cut." },
      { title: "Sound Design", description: "Crafting immersive audio worlds that elevate your project and captivate your audience." },
      { title: "Creative Direction", description: "We provide a cohesive vision across all media to ensure your story is told with power and clarity." }
    ]
  },
  portfolio: {
    title: 'Showreel & Highlights',
    videos: [
      { id: 'PnRMOA27bxo', title: 'Cinematic Brand Film', type: 'Video Production' },
      { id: '6ZK71L4OgZQ', title: 'Indie Artist Music Video', type: 'Video Production' },
      { id: 'LHcLCKJYYgo', title: 'Advanced Sound Design', type: 'Audio Production' },
      { id: 'NK6vUMH1nfA', title: 'Commercial Audio Mix', type: 'Audio Production' }
    ]
  },
  testimonials: {
    title: 'What Our Clients Say',
    items: [
      { quote: "F&F Productions took our raw idea and turned it into an award-finalist cut. The process was seamless and incredibly creative.", client: "- Jamie L., Indie Artist" },
      { quote: "The team delivered a +120k stream hit! Their attention to detail in the mix was just phenomenal. Absolutely top-tier.", client: "- Alex R., Brand Manager" },
      { quote: "Unparalleled creative direction and sound design. They understood our vision perfectly and executed it beyond our expectations.", client: "- Sarah K., Film Director" }
    ]
  },
  impact: {
    title: 'Every Frame. Every Frequency. Designed to Move You.',
    counters: [
      { target: 150, label: "Projects Delivered" },
      { target: 98, label: "Happy Clients" },
      { target: 8, label: "Years of Creativity" }
    ]
  },
  instagram: {
    title: 'Latest on Instagram',
    username: '@framenfreq',
    profileUrl: 'https://www.instagram.com/framenfreq',
    cta: {
      text: 'Follow on Instagram',
      href: 'https://www.instagram.com/framenfreq'
    },
    posts: [
      { id: 1, postUrl: 'https://www.instagram.com/framenfreq', imageUrl: 'https://via.placeholder.com/300x300/121212/cdaa7c?text=Post+1' },
      { id: 2, postUrl: 'https://www.instagram.com/framenfreq', imageUrl: 'https://via.placeholder.com/300x300/121212/cdaa7c?text=Post+2' },
      { id: 3, postUrl: 'https://www.instagram.com/framenfreq', imageUrl: 'https://via.placeholder.com/300x300/121212/cdaa7c?text=Post+3' },
      { id: 4, postUrl: 'https://www.instagram.com/framenfreq', imageUrl: 'https://via.placeholder.com/300x300/121212/cdaa7c?text=Post+4' },
      { id: 5, postUrl: 'https://www.instagram.com/framenfreq', imageUrl: 'https://via.placeholder.com/300x300/121212/cdaa7c?text=Post+5' },
      { id: 6, postUrl: 'https://www.instagram.com/framenfreq', imageUrl: 'https://via.placeholder.com/300x300/121212/cdaa7c?text=Post+6' },
    ]
  },
  contact: {
    title: 'Tell us about your project',
    subtitle: 'We typically reply within 24 hours. Don\'t let your story get overlooked.',
    form: {
      name: { label: 'Name' },
      email: { label: 'Email' },
      phone: { label: 'Phone' },
      service: { 
        label: 'Service of Interest',
        options: ['Music Production', 'Video Production', 'Sound Design', 'Creative Direction']
      },
      details: { label: 'Project Details' },
      submitButton: 'Let\'s Create Together',
      footnote: 'No spam. We\'ll only use your info to respond to your inquiry.'
    },
    success: {
      title: 'Thank You!',
      message: "Your message has been sent. We'll be in touch within 24 hours to discuss the next steps.",
      calendarPrompt: 'For a free 15-minute creative consult, feel free to book a time on our',
      calendarLinkText: 'calendar',
      calendarLinkHref: '#'
    }
  },
  footer: {
    email: 'info@frameandfrequency.com',
    phone: '750-331-9888',
    tagline: 'Fast response times • Available for projects worldwide',
    copyright: 'Frame & Frequency Productions. All Rights Reserved.'
  }
};