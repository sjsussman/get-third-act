import { IconBrandFacebook, IconBrandLinkedin, IconBrandTailwind, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, ServiceProps, FAQsProps, FeaturesProps, FooterProps, HeaderProps, HeroProps } from './types';

import heroImg from '~/assets/images/third-act/hero-images/hero-image-1.jpg';
import hero2Img from '~/assets/images/third-act/headshots/jesse_photo.jpg';
import hero3Img from '~/assets/images/third-act/headshots/jon_headshot.png';
import contactImg from '~/assets/images/third-act/contact-page/contact-page.jpg';
import servicesHeroImg from '~/assets/images/third-act/hero-images/services-hero.jpg';

import quoteCarousel from '~/assets/images/third-act/quotes/quote_carousel.gif';

// Header dataa
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Contact Us',
      href: '/contact',
    },
  ],
  isSticky: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: <>Simplified decision-making for senior small business owners.</>,
  subtitle: (
    <>
      <span className="md:inline">
        Maximize your company’s financial potential with clear perspective, we quickly clarify your goals, and give you
        the tools and expertise to achieve them.
      </span>{' '}
    </>
  ),
  callToAction: {
    text: 'Book a 15 minute free consult today',
    href: '/contact',
    targetBlank: true,
    btnType: 'primary',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

//ABOUT US PAGE
//About Us Intro
export const aboutUsHero: HeroProps = {
  title: 'Who We Are',
  subtitle:
    'We focus on helping small businesses that super-serve their community and maximize their value with exceptional leadership and empahty-driven partnership. We don’t have MBAs, and we didn’t learn business from a textbook. We learned it from sleepless nights perfecting a sales pitch for new product launches, agonizing over regulatory deadlines and master plans for store openings, or making friends with fellow local businesses to put on annual community health and wellness days. We learned it from hiring incredible team members or getting burned by unreliable ones. We helped small companies win transformative deals and signed others that left our customers in the lurch. There’s nothing like experience, and experience breeds expertise and empathy.',
  subtitle2:
    'We want to empower all senior small business owners to write their own legacy and to retire confidently. Whenever they choose, however that retirement looks. Whether that’s by working directly alongside owners as a force multiplier or helping owners successfully transition their businesses, Third Act is ready to jump in.',
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Jesse',
  subtitle: `Jesse cuts through the noise, empowering small business owners to take control of their financial futures. ${'\n'}
As a Business Development leader directly responsible for capturing $95mm+ in new revenue for global marketing and creative agencies like Publicis or Invisible North, Jesse developed and managed new go-to-market strategies and service offerings, while driving sales and growth planning from conception to execution.

Working with Owners, Founders, C-Suite executives, and Marketing leaders across diverse categories to solve their business challenges, Jesse’s strategic approach and keen understanding of market dynamics have been instrumental in his ability to identify and capitalize on growth opportunities.

Nowadays, Jesse gets most excited by connecting the dots for small business owners across categories and consumer contexts. A lifelong history major and graduate of Franklin & Marshall College, Jesse spends his free time mentoring current or aspiring business owners through SCORE or building a never-quite-finished walking trail in upstate New York.
`,
  subtitle2: `Jon Sussman is a seasoned legal professional and project management specialist, leveraging a decade's worth of experience in corporate and legal sectors to provide strategic consulting for entrepreneurs and small business owners.

A New York State licensed attorney, Jon holds a degree from Franklin and Marshall College and a Juris Doctor from Seton Hall Law School.
Having honed his skills in an array of settings, Jon has a unique understanding of the challenges and opportunities inherent to both large institutions and fledgling startups. His experience extends from Montefiore Medical Center, a prominent hospital system in the Bronx, and the United Nations, to burgeoning startups in healthcare and retail sectors.

His multifaceted background has fostered a comprehensive understanding of business structures, regulatory landscapes, and strategic management. In his most recent role, Jon focused on compliance, ensuring his business met all legal and ethical standards.

Based in Manhattan Valley, Jon brings a global perspective to his clients, while staying firmly rooted in his local community. A passionate patron of the arts, X spends his free time exploring the diverse theater scene across the city.
`,
  jesseImage: {
    src: hero2Img,
    alt: 'photo of Jesse',
  },
  jesseTitle: 'Jesse Samberg, Co-Founder',
  jonTitle: 'Jonathan Sussman, Co-Founder',
  jonImage: {
    src: hero3Img,
    alt: 'photo of Jon',
  },
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Our Services',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Marketing Strategy',
        href: '/tab1',
      },
      items: [
        {
          title: 'Sales & Marketing Strategy',
        },
        {
          title: 'Customer Insights',
        },
        {
          title: 'Channel-specific Planning (e.g. Social Media or B2B)',
        },
        {
          title: 'Sales & Marketing Asset Creation',
        },
        {
          title: 'Marketing Campaign Execution & Management',
        },
        {
          title: 'Measurement & Reporting',
        },
      ],
    },
    {
      link: {
        label: 'Business Strategy & Operations',
        href: '/tab2',
      },
      items: [
        {
          title: 'Profit & Margin Analysis',
        },
        {
          title: 'Risk Analysis ',
        },
        {
          title: 'Business Insurance',
        },
        {
          title: 'Regulatory Compliance',
        },
        {
          title: 'Business Licenses',
        },
        {
          title: 'Corporate Entity Management',
        },
        {
          title: 'OSHA',
        },
        {
          title: 'Supply Chain Analysis',
        },
        {
          title: 'Privacy Compliance ',
        },
        {
          title: 'Cyber Security',
        },
        {
          title: 'Category & Competitor Analysis',
        },
        {
          title: 'Business Insights & Measurement',
        },
        {
          title: 'Technology Evaluation & Recommendations',
        },
        {
          title: 'Process Development & Implementation',
        },
        {
          title: 'Guided Training',
        },
      ],
    },
    {
      link: {
        label: 'Business Development',
        href: '/tab3',
      },
      items: [
        {
          title: 'Prospect/Audience Strategy',
        },
        {
          title: 'Buyer Insights',
        },
        {
          title: 'Confidential Offering Materials Design ',
        },
        {
          title: 'Narrative-driven Sales Pitch',
        },
        {
          title: 'Prospective Buyer Outreach',
        },
        {
          title: 'Meeting Representation',
        },
        {
          title: 'Deal Negotiation',
        },
      ],
    },
    {
      link: {
        label: 'FAQS',
        href: '/tab4',
      },
      items: [
        {
          title: 'Why should we hire Third Act?',
          description: `Third Act understands that as a business owner, you're faced with a unique set of challenges that can feel overwhelming. We empathize with your struggle and are committed to providing you with a fresh perspective and expert insights to navigate these difficult times. Our cross-category experience, honed over decades, and our deep understanding of customer and employee behavior enables us to partner with you effectively. We're here to help you make confident strategic decisions, uncover hidden growth opportunities, adopt best operational practices, and ultimately improve profitability. Your success is our priority, and we're dedicated to helping you turn these challenges into a transformative journey towards sustainable growth.`,
        },
        {
          title: 'Who are your typical clients?',
          description:
            'Our typical clients are small to medium-sized businesses from a variety of sectors. We specialize in helping businesses that are in their growth phase, updating their business and marketing strategies, seeking digital transformation, or are looking to sell.',
        },
        {
          title: 'What is your approach to business consulting?',
          description:
            'Our approach is collaborative and focused on the unique needs of each client. We work closely with business owners and their teams to understand their goals, analyze their current operations, and recommend tailored solutions. We offer flexible services to meet the varying needs of our clients; we can provide expert guidance to steer your business towards success, or we can take the reins and execute on the strategic plans, giving you the freedom to focus on your core business operations or growth opportunities.',
        },
        {
          title: 'How do you measure the success of your consulting services?',
          description:
            'Success is measured based on the goals set at the beginning of the consulting engagement. This could include metrics like improved financial performance, increased sales, operational efficiencies, customer satisfaction, etc.',
        },
        {
          title: 'How do you charge for your services?',
          description:
            'Our pricing model varies depending on the scope and complexity of the project. We offer hourly rates, project-based rates, and long-term retainer agreements. Please contact us to discuss your specific needs. ',
        },
        {
          title: 'What is your typical timeline for your consulting process? ',
          description:
            'The timeline varies depending on the project scope and your business needs. After our initial consultation, we will provide a detailed proposal with estimated timelines for key milestones.',
        },
        {
          title: 'How do you ensure the confidentiality of our business information?',
          description:
            'We take confidentiality seriously and every client engagement begins with a Non-Disclosure Agreement (NDA) to protect sensitive business information. We also follow industry-standard best practices for privacy protection and data backup.',
        },
        {
          title: 'Do you provide support after the implementation of your recommendations?',
          description:
            'Yes, we offer post-implementation support to ensure that our strategies are effectively executed and are delivering the expected results.',
        },
      ],
    },
  ],
};

// FAQS5 data
export const faqs1Data: FAQsProps = {
  header: {
    title: 'FAQs',
    position: 'center',
  },
  tabs: [
    {
      items: [
        {
          title: 'Why should we hire Third Act?',
          description: `Third Act understands that as a business owner, you're faced with a unique set of challenges that can feel overwhelming.
          We empathize with this struggle and are committed to providing owners with a fresh perspective and expert insights to navigate these difficult times. Our cross-category experience, honed over decades, and our deep understanding of customer and employee behavior enables us to partner with you effectively. We're here to help you make confident strategic decisions, uncover hidden growth opportunities, adopt best operational practices, and ultimately, improve profitability.
          Your success is our priority, and we're dedicated to helping you turn these challenges into a transformative journey towards sustainable growth.
          `,
        },
        {
          title: 'Who are your typical clients?',
          description:
            'Our typical clients are small to medium-sized businesses from a variety of sectors. We specialize in helping businesses that are in a growth phase, need help updating their business processes or marketing strategies, are seeking digital transformation, or are looking to sell.',
        },
        {
          title: 'What is your approach to business consulting?',
          description:
            'Our approach is collaborative and focused on the unique needs of each client. We work closely with business owners and their teams to understand their goals, analyze their current operations, and recommend tailored solutions. We offer flexible services to meet the varying needs of our clients; we can provide expert guidance to steer your business towards success, or we can take the reins and execute on the strategic plans, giving you the freedom to focus on your core business operations or growth opportunities.',
        },
        {
          title: 'How do you measure the success of your consulting services?',
          description:
            'Success is measured based on the goals set at the beginning of the consulting engagement. This could include metrics like improved financial performance, increased sales, operational efficiencies, customer satisfaction, etc.',
        },
        {
          title: 'How do you charge for your services?',
          description:
            'Our pricing model varies depending on the scope and complexity of the project. We offer hourly rates, project-based rates, and long-term retainer agreements. Please contact us to discuss your specific needs. ',
        },
        {
          title: 'What is your typical timeline for your consulting process? ',
          description:
            'The timeline varies depending on the project scope and your business needs. After our initial consultation, we will provide a detailed proposal with estimated timelines for key milestones.',
        },
        {
          title: 'How do you ensure the confidentiality of our business information?',
          description:
            'We take confidentiality seriously and every client engagement begins with a Non-Disclosure Agreement (NDA) to protect sensitive business information. We also follow industry-standard best practices for privacy protection and data backup.',
        },
        {
          title: 'Do you provide support after the implementation of your recommendations?',
          description:
            'Yes, we offer post-implementation support to ensure that our strategies are effectively executed and are delivering the expected results.',
        },
      ],
    },
  ],
};

// Feature data
export const aboutUsHomepageData: FeaturesProps = {
  header: {
    title: <>About Us</>,
  },
  items: [
    {
      title: 'Focus',
      description: 'Third Act exists to simplify these challenges for small business owners.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Focus',
      description:
        'We focus on helping small businesses that super-serve their community and maximize their value with exceptional leadership and empathy-driven partnership. ',
      icon: IconBrandTailwind,
    },
  ],
  image: {
    src: quoteCarousel,
    alt: 'moving quotes',
  },
  callToAction: {
    text: 'More About Us',
    href: '/about-us',
    targetBlank: true,
    btnType: 'primary',
  },
};
// Service data
export const serviceData: ServiceProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Business Strategy & Operations',
      description: `Hiring and managing reliable team members. Keeping current customers happy while searching for new ones. Successful owners know how much time is needed just to keep up.`,
      description2: `We help small business owners make time for growing the business, with replicable processes for scaling what matters most.`,
    },
    {
      title: 'Marketing Strategy',
      description: `Smart small business owners invest in growing their business. The best operators are planning ahead to spend effectively.`,
      description2: `Count on the expertise trusted by Fortune 1000 brand leaders and let Third Act design your unique growth strategy, customized to your business's goals.`,
    },
    {
      title: 'Business Development',
      description: `Prepping confidential offering memos. Finding and reaching out to ideal buyers. Due diligence and vetting. Even on our best days these are sometimes tedious, sometimes bewildering, even emotional processes.`,
      description2: `With a range of business development services to reduce the time and stress of an ownership transition, Third Act helps owners maximize their company's value.`,
    },
  ],
  image: {
    src: servicesHeroImg,
    alt: 'man playing chess image',
  },
  callToAction: {
    text: 'See our full services',
    href: '/services',
    targetBlank: true,
    btnType: 'primary',
  },
  isReversed: false,
  isAfterContent: false,
};

// Contact data
export const contactData: ContactProps = {
  header: {
    position: 'left',
    title: 'Feeling stuck?',
  },
  header2: {
    position: 'left',
    title: 'Third Act can help.',
  },
  items: [
    // {
    //   title: 'Contact Us',
    //   description: ['(o) 914.391.4798', 'Mail: info@thirdact.com'],
    //   icon: IconPhoneCall,
    // },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder:
        'Tell us your biggest challenge, a goal you need help hitting, or just a story about an ‘all-time’ customer!',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Feeling stuck? Third Act can help.',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [],
  image: { src: contactImg, alt: 'street art' },
  form: {
    inputs: [
      {
        type: 'text',
        label: 'Your name',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your Name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder:
        'Tell us your biggest challenge, a goal you need help hitting, or just a story about an ‘all-time’ customer!',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  columns: [
    {
      title: 'Phone',
      texts: ['(o) 914.391.4798'],
    },
    {
      title: 'Email',
      texts: ['info@getthirdact.com'],
    },
  ],
  socials: [
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: '#' },
  ],
};
