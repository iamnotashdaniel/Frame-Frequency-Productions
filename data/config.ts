
import { logoImageUri, founderImageUri } from './images.ts';

export const config = {
  site: {
    logoUrl: logoImageUri,
    founderImageUrl: founderImageUri
  },
  header: {
    cta: {
      text: 'Let’s Create Together',
      href: '#contact'
    }
  },
  hero: {
    title: 'Crafting Stories in Sound & Vision.',
    subtitle: 'We blend creativity, technology, and storytelling to build immersive brand experiences.',
    ctaPrimary: {
      text: 'Let’s Create Together',
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
  contact: {
    title: 'Tell us about your project',
    subtitle: 'We typically reply within 24 hours. Don’t let your story get overlooked.',
    form: {
      name: { label: 'Name' },
      email: { label: 'Email' },
      phone: { label: 'Phone' },
      service: { 
        label: 'Service of Interest',
        options: ['Music Production', 'Video Production', 'Sound Design', 'Creative Direction']
      },
      details: { label: 'Project Details' },
      submitButton: 'Let’s Create Together',
      footnote: 'No spam. We’ll only use your info to respond to your inquiry.'
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
    email: 'f&fproductions@gmail.com',
    phone: '750-331-9888',
    tagline: 'Fast response times • Available for projects worldwide',
    copyright: 'Frame & Frequency Productions. All Rights Reserved.'
  }
};