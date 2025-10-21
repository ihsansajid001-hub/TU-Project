// Mock data for Team United website

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  status: 'completed' | 'ongoing';
  fullDescription?: string;
  goals?: string[];
  impact?: {
    label: string;
    value: string;
  }[];
  timeline?: string;
  location?: string;
  teamSize?: string;
  gallery?: string[];
}

export interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  project: string;
  story: string;
  quote: string;
  impact: string;
  fullStory?: string;
  challenges?: string[];
  achievements?: string[];
  futureGoals?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Digital Literacy Program",
    category: "Education",
    description: "Empowering communities through technology education and digital skills training for 500+ students.",
    image: "https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MDY4NTU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2024-10-15",
    status: "ongoing",
    fullDescription: "In an increasingly digital world, access to technology and digital skills is no longer a luxury—it's a necessity. Our Digital Literacy Program was born from the recognition that many communities, particularly in underserved areas, lack the resources and training needed to participate fully in the digital economy. Through this initiative, we're bridging the digital divide by providing comprehensive technology education, hands-on training, and continued support to students of all ages. Our program covers everything from basic computer skills and internet navigation to more advanced topics like coding, digital marketing, and online safety. We've established computer labs in community centers, partnered with local schools, and recruited volunteer instructors who are passionate about sharing their knowledge. The impact has been transformative—students who once had no computer experience are now creating their own websites, applying for jobs online, and accessing educational resources that were previously out of reach.",
    goals: [
      "Provide technology training to 500+ students in underserved communities",
      "Establish 5 community computer labs with modern equipment",
      "Train 50 local volunteers as digital literacy instructors",
      "Develop culturally relevant digital curriculum in multiple languages",
      "Create pathways for students to pursue technology careers"
    ],
    impact: [
      { label: "Students Trained", value: "500+" },
      { label: "Computer Labs", value: "5" },
      { label: "Volunteer Instructors", value: "50" },
      { label: "Completion Rate", value: "85%" }
    ],
    timeline: "Started October 2024 - Ongoing",
    location: "Multiple community centers across the city",
    teamSize: "50+ volunteers and instructors",
    gallery: [
      "https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MDY4NTU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1588072432904-3eeb44a6d877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYwNzM3Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MDczNzc4NXww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 2,
    title: "Clean Environment Initiative",
    category: "Environment",
    description: "A city-wide program to plant 10,000 trees and promote sustainable living practices.",
    image: "https://images.unsplash.com/photo-1624858194621-92e3efffe22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc2VydmF0aW9ufGVufDF8fHx8MTc2MDY5NTg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2024-08-20",
    status: "ongoing",
    fullDescription: "Climate change and environmental degradation are among the most pressing challenges of our time. The Clean Environment Initiative is our comprehensive response to these challenges, combining immediate action with long-term sustainable solutions. Launched in August 2024, this city-wide program aims to plant 10,000 trees across urban and suburban areas while educating communities about sustainable living practices. We've partnered with local government, schools, and businesses to identify planting locations, organize community planting events, and ensure proper tree care and maintenance. Beyond tree planting, the initiative includes workshops on composting, recycling, water conservation, and renewable energy. We've established community gardens, organized regular clean-up drives, and created a youth environmental ambassador program. Our goal is not just to make our city greener, but to foster a culture of environmental stewardship that will benefit generations to come.",
    goals: [
      "Plant 10,000 trees across the city by 2025",
      "Engage 1,000+ volunteers in environmental activities",
      "Establish 10 community gardens in urban areas",
      "Reduce waste by 30% through recycling programs",
      "Train 100 youth environmental ambassadors"
    ],
    impact: [
      { label: "Trees Planted", value: "7,500+" },
      { label: "Volunteers Engaged", value: "1,200+" },
      { label: "Community Gardens", value: "8" },
      { label: "CO2 Reduced", value: "50 tons/year" }
    ],
    timeline: "Started August 2024 - Ongoing through 2025",
    location: "City-wide initiative across 15 neighborhoods",
    teamSize: "1,200+ volunteers",
    gallery: [
      "https://images.unsplash.com/photo-1624858194621-92e3efffe22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc2VydmF0aW9ufGVufDF8fHx8MTc2MDY5NTg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmd8ZW58MXx8fHwxNzYwNzM3Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzYwNzM3Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 3,
    title: "Community Food Bank",
    category: "Charity",
    description: "Providing meals and groceries to families in need, serving over 1,000 families monthly.",
    image: "https://images.unsplash.com/photo-1731304144595-41f5708a3304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBzdXBwb3J0fGVufDF8fHx8MTc2MDcyOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2024-06-10",
    status: "completed",
    fullDescription: "Food insecurity is a reality for many families in our community, especially during challenging economic times. The Community Food Bank was established to ensure that no family goes hungry and that everyone has access to nutritious food. What started as a modest initiative serving 50 families has grown into a comprehensive food assistance program serving over 1,000 families monthly. We operate multiple distribution centers across the city, working with local farmers, grocery stores, and food manufacturers to source fresh produce, grains, proteins, and other essentials. Our approach goes beyond simply providing food—we also offer nutrition education, cooking classes, and connections to other support services. We've successfully completed the pilot phase of this project, which ran for six months and exceeded all expectations. The infrastructure we've built, the partnerships we've established, and the community trust we've earned have laid a solid foundation for scaling this program to serve even more families in need.",
    goals: [
      "Provide food assistance to 1,000+ families monthly",
      "Establish 5 distribution centers across the city",
      "Partner with 20+ local food suppliers",
      "Offer nutrition education to 500+ families",
      "Create a sustainable food sourcing model"
    ],
    impact: [
      { label: "Families Served", value: "1,200+" },
      { label: "Meals Distributed", value: "36,000+" },
      { label: "Distribution Centers", value: "5" },
      { label: "Volunteer Hours", value: "5,000+" }
    ],
    timeline: "June 2024 - December 2024 (6 months - Completed)",
    location: "5 distribution centers across the city",
    teamSize: "200+ volunteers",
    gallery: [
      "https://images.unsplash.com/photo-1731304144595-41f5708a3304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBzdXBwb3J0fGVufDF8fHx8MTc2MDcyOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb258ZW58MXx8fHwxNzYwNzM3Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwZm9vZHxlbnwxfHx8fDE3NjA3Mzc3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 4,
    title: "Youth Tech Innovation Hub",
    category: "Technology",
    description: "Creating a space for young innovators to learn coding, robotics, and entrepreneurship.",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjA3MDEyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2024-09-05",
    status: "ongoing"
  },
  {
    id: 5,
    title: "Healthcare Outreach",
    category: "Health",
    description: "Free medical camps and health awareness programs in underserved communities.",
    image: "https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjA2Mzg4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2024-07-12",
    status: "completed"
  },
  {
    id: 6,
    title: "Women Empowerment Workshop",
    category: "Education",
    description: "Skills development and entrepreneurship training for women in rural areas.",
    image: "https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjA3MTQ1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2024-05-28",
    status: "completed"
  }
];

export const works: Work[] = [
  {
    id: 1,
    title: "Education for All",
    description: "Providing quality education and learning resources to underprivileged children across communities.",
    image: "https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MDY4NTU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#education"
  },
  {
    id: 2,
    title: "Charity & Relief",
    description: "Supporting families in need through food distribution, medical aid, and emergency relief programs.",
    image: "https://images.unsplash.com/photo-1731304144595-41f5708a3304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBzdXBwb3J0fGVufDF8fHx8MTc2MDcyOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#charity"
  },
  {
    id: 3,
    title: "Environmental Conservation",
    description: "Promoting sustainable practices, tree plantation drives, and environmental awareness campaigns.",
    image: "https://images.unsplash.com/photo-1624858194621-92e3efffe22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc2VydmF0aW9ufGVufDF8fHx8MTc2MDY5NTg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#environment"
  },
  {
    id: 4,
    title: "Technology & Innovation",
    description: "Empowering youth through technology education, innovation labs, and digital transformation.",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjA3MDEyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#technology"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aisha Mohammed',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1634552516330-ab1ccc0f605e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZW1iZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc2MDczNzc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    project: 'Education Empowerment Program',
    story: 'Before Team United, I had to drop out of school due to financial constraints. Their scholarship program gave me a second chance. Today, I\'m pursuing my dream of becoming a teacher and helping other girls in my community access education.',
    quote: 'Team United didn\'t just change my life—they gave me hope and a future I never thought possible.',
    impact: 'Completed high school with honors and now in university',
    fullStory: 'Growing up in Nairobi\'s Kibera slum, education seemed like a distant dream. My parents worked hard but struggled to make ends meet, and when my father fell ill, I had to drop out of school in my second year of high school to help support the family. I felt like my future was slipping away. Then I heard about Team United\'s Education Empowerment Program through a community meeting. I applied for their scholarship program, not expecting much, but to my surprise, I was accepted. Team United didn\'t just pay for my school fees—they provided textbooks, uniforms, transportation support, and even connected me with a mentor who guided me through my studies. The program also included life skills training and career counseling sessions that helped me discover my passion for teaching. With their support, I was able to complete high school with honors, scoring high enough to earn a place at the University of Nairobi. Today, I\'m in my second year of education studies, and I volunteer with Team United on weekends, tutoring younger students in my community. My goal is to return to Kibera as a qualified teacher and help other girls realize that education is possible, no matter their circumstances. Team United showed me that with the right support, anything is achievable.',
    challenges: [
      'Financial constraints forced school dropout',
      'Limited access to educational resources',
      'Family responsibilities and economic pressure',
      'Lack of mentorship and career guidance'
    ],
    achievements: [
      'Completed high school with honors',
      'Earned university admission with scholarship',
      'Currently studying to become a teacher',
      'Volunteers as a tutor for younger students',
      'Became a community education advocate'
    ],
    futureGoals: 'I plan to complete my education degree and return to my community as a qualified teacher. I want to establish a free tutoring center for girls from low-income families and work with Team United to expand their scholarship program. My ultimate goal is to ensure that no girl in my community has to choose between education and survival.'
  },
  {
    id: 2,
    name: 'Carlos Silva',
    location: 'São Paulo, Brazil',
    image: 'https://images.unsplash.com/photo-1664843917218-71f7b6bb3afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBzdWNjZXNzfGVufDF8fHx8MTc2MDczNzc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    project: 'Tech Skills Training',
    story: 'Growing up in a low-income neighborhood, technology seemed out of reach. Team United\'s coding bootcamp opened doors I didn\'t know existed. Now I work as a software developer and mentor other youth from my community.',
    quote: 'They showed me that my background doesn\'t define my future. Skills and determination do.',
    impact: 'Employed as a junior developer, mentoring 15+ students',
    fullStory: 'I grew up in Capão Redondo, one of São Paulo\'s most challenging neighborhoods. Computers and technology were luxuries we couldn\'t afford. I used to watch YouTube videos on my phone about coding and dream about creating apps and websites, but I had no idea where to start. When Team United opened their Tech Skills Training hub in our neighborhood, I was one of the first to sign up. The six-month intensive bootcamp taught me web development, starting from the basics of HTML and CSS to advanced JavaScript and React. What made it special wasn\'t just the technical skills—the instructors, many of whom came from similar backgrounds, showed us that it was possible to break into the tech industry. They taught us how to build portfolios, prepare for interviews, and network with companies. Three months after completing the bootcamp, I landed my first job as a junior developer at a local startup. The feeling of receiving my first paycheck was indescribable. But what means even more to me is that I\'m now paying it forward. Every Saturday, I return to the Tech Skills hub to mentor the new cohort of students. I share my journey, help them debug code, and remind them that they belong in tech just as much as anyone else.',
    challenges: [
      'Limited access to computers and technology',
      'No formal technical education or training',
      'Lack of role models in the tech industry',
      'Economic barriers to career transition'
    ],
    achievements: [
      'Completed intensive coding bootcamp',
      'Built professional portfolio of projects',
      'Secured job as junior software developer',
      'Mentoring 15+ students in coding',
      'Contributing to open-source projects'
    ],
    futureGoals: 'I want to advance my career as a full-stack developer and eventually start my own tech education company focused on underserved communities. I\'m working on an open-source project to create free coding curriculum in Portuguese for Brazilian youth. My vision is to see more people from favelas working in tech and creating opportunities for others.'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1648966448046-818d8c74b015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF0ZWZ1bCUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDczNzc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    project: 'Environmental Action Initiative',
    story: 'Our neighborhood was struggling with waste management and pollution. Team United helped us organize community clean-ups and taught us about recycling. Now we run our own sustainable waste program that serves 500+ families.',
    quote: 'We learned that change starts with us. Team United gave us the tools and confidence to make it happen.',
    impact: 'Community waste reduced by 60%, recycling program serving 500+ families',
    fullStory: 'I live in Dharavi, Mumbai—a densely populated area where waste management has always been a critical issue. Garbage piled up in streets, open drains overflowed, and the smell of rotting waste was overwhelming, especially during monsoon season. Health issues like dengue and respiratory problems were common. I felt frustrated watching my community suffer, but I didn\'t know how to help. When Team United launched their Environmental Action Initiative in our area, they didn\'t just come in with solutions—they empowered us to become the solution. They organized workshops teaching us about segregation, composting, and recycling. They helped us form a neighborhood committee and provided initial resources like bins, gloves, and collection carts. What started as a small group of 10 families quickly grew as neighbors saw the difference. We began organizing weekly clean-up drives, set up waste collection points, and partnered with local recycling centers. Team United connected us with the municipal corporation and helped us navigate the bureaucracy. Today, our community-run waste program serves over 500 families. We\'ve reduced waste by 60%, our streets are cleaner, and we\'ve created employment for 12 waste collectors from our own community. But the real transformation is in our mindset—we\'ve gone from feeling helpless to realizing that we have the power to change our environment.',
    challenges: [
      'Severe waste management and pollution issues',
      'Lack of infrastructure and resources',
      'Community awareness about recycling',
      'Coordination with municipal authorities'
    ],
    achievements: [
      'Reduced community waste by 60%',
      'Established recycling program serving 500+ families',
      'Created employment for 12 waste collectors',
      'Partnered with municipal corporation',
      'Became model for other neighborhoods'
    ],
    futureGoals: 'I want to scale our waste management model to other areas of Dharavi and eventually across Mumbai. We\'re working on creating a social enterprise that can sustain itself while providing employment. I\'m also collaborating with Team United to develop an app that helps residents track waste collection schedules and learn about proper segregation.'
  },
  {
    id: 4,
    name: 'James Okonkwo',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1751666526244-40239a251eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHZvbHVudGVlciUyMGhhcHB5fGVufDF8fHx8MTc2MDczNzc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    project: 'Youth Leadership Summit',
    story: 'I always had ideas for improving my community but lacked the confidence and network. The leadership program connected me with mentors and other young changemakers. Together, we launched a micro-loan program helping 50 small businesses.',
    quote: 'Team United taught me that leadership isn\'t about age—it\'s about vision, action, and collaboration.',
    impact: 'Started community micro-loan initiative supporting 50+ entrepreneurs',
    fullStory: 'Growing up in the Ajegunle area of Lagos, I watched my mother struggle to keep her small provisions shop running. She could never access formal loans because she lacked collateral, and the informal lenders charged interest rates that were impossible to repay. I saw countless other small business owners facing the same challenges. I always believed our community could thrive if entrepreneurs had access to fair credit, but at 24 years old with no business background, I didn\'t think anyone would take me seriously. Attending Team United\'s Youth Leadership Summit changed everything. Over three intensive days, I met other young people passionate about creating change, learned from successful social entrepreneurs, and discovered that my ideas had merit. The summit didn\'t just inspire me—it equipped me with practical skills in project planning, fundraising, and community organizing. More importantly, it connected me with mentors who guided me in turning my idea into reality. With support from Team United and a small seed grant, I launched the Ajegunle Community Micro-Loan Initiative. We started by pooling resources from 20 community members and providing small loans of ₦20,000-₦50,000 to local entrepreneurs. We charge minimal interest (just enough to sustain the program) and provide business mentorship. In 18 months, we\'ve helped 50+ small businesses grow, and our loan repayment rate is 95%. My mother was one of our first beneficiaries—she used the loan to expand her shop and now employs two people.',
    challenges: [
      'Limited access to affordable credit',
      'Lack of business experience and credibility',
      'Community skepticism about youth leadership',
      'Difficulty navigating financial regulations'
    ],
    achievements: [
      'Launched community micro-loan initiative',
      'Disbursed loans to 50+ small businesses',
      'Achieved 95% loan repayment rate',
      'Created employment opportunities',
      'Built network of young social entrepreneurs'
    ],
    futureGoals: 'I\'m working on formalizing our micro-loan initiative into a registered cooperative society to access larger funding and help more entrepreneurs. I want to replicate this model in other underserved communities across Lagos. I\'m also developing a financial literacy program to help business owners make better financial decisions and grow sustainably.'
  }
];

export const milestones: Milestone[] = [
  {
    year: "2020",
    title: "Team United Founded",
    description: "A group of passionate individuals came together with a vision to make a positive impact in society."
  },
  {
    year: "2021",
    title: "First Major Initiative",
    description: "Launched our first education program, reaching over 200 students in the first year."
  },
  {
    year: "2022",
    title: "Expanding Our Reach",
    description: "Opened three community centers and partnered with local organizations to amplify our impact."
  },
  {
    year: "2023",
    title: "Technology Integration",
    description: "Introduced digital learning platforms and tech workshops to prepare youth for the future."
  },
  {
    year: "2024",
    title: "Sustainable Growth",
    description: "Launched environmental conservation projects and reached 10,000+ beneficiaries across all programs."
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Scaling operations nationwide with new partnerships and innovative solutions for community development."
  }
];
