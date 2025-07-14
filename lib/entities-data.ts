export interface Leader {
  name: string
  position: string
  email?: string
  phone?: string
}

export interface Member {
  name: string
  role?: string
  year?: string
}

export interface Entity {
  id: string
  name: string
  category: string
  mandate: string
  vision?: string
  objectives: string[]
  leaders: Leader[]
  members: Member[]
  meetingTime?: string
  location?: string
}

export const entitiesData: Entity[] = [
  // KSUCU-MC BOARDS
  {
    id: "ict-board",
    name: "ICT Board",
    category: "KSUCU-MC BOARDS",
    mandate:
      "The ICT Board is responsible for managing and maintaining all technological infrastructure within KSUCU-MC. We ensure seamless digital communication, maintain websites, manage databases, and provide technical support for all church activities.",
    vision: "To leverage technology for effective ministry and church growth in the digital age.",
    objectives: [
      "Maintain and upgrade church technological infrastructure",
      "Provide technical support for all church events and services",
      "Develop and maintain digital platforms for church communication",
      "Train church members on digital literacy and tools",
      "Ensure data security and backup systems",
    ],
    leaders: [
      { name: "John Kamau", position: "ICT Board Chairperson", email: "john.kamau@ksucu.org" },
      { name: "Mary Wanjiku", position: "Vice Chairperson", email: "mary.wanjiku@ksucu.org" },
      { name: "David Ochieng", position: "Technical Lead", email: "david.ochieng@ksucu.org" },
    ],
    members: [
      { name: "Peter Mwangi", role: "Systems Administrator" },
      { name: "Grace Akinyi", role: "Web Developer" },
      { name: "Samuel Kiprotich", role: "Database Manager" },
      { name: "Faith Nyambura", role: "Technical Support" },
      { name: "Michael Otieno", role: "Network Administrator" },
      { name: "Sarah Chepkemoi", role: "Software Developer" },
    ],
    meetingTime: "Every Tuesday 6:00 PM",
    location: "ICT Lab, Main Campus",
  },
  {
    id: "editorial-board",
    name: "Editorial Board",
    category: "KSUCU-MC BOARDS",
    mandate:
      "The Editorial Board oversees all written content and publications within KSUCU-MC. We ensure quality, accuracy, and spiritual alignment of all church communications, newsletters, bulletins, and digital content.",
    vision: "To communicate God's word effectively through quality written content and publications.",
    objectives: [
      "Review and approve all church publications",
      "Maintain editorial standards and guidelines",
      "Coordinate content creation across different ministries",
      "Manage church newsletter and bulletin production",
      "Ensure theological accuracy in all publications",
    ],
    leaders: [
      { name: "Rev. Sarah Mutua", position: "Editorial Board Chairperson", email: "sarah.mutua@ksucu.org" },
      { name: "James Kiplagat", position: "Chief Editor", email: "james.kiplagat@ksucu.org" },
      { name: "Ruth Wambui", position: "Content Coordinator", email: "ruth.wambui@ksucu.org" },
    ],
    members: [
      { name: "Michael Otieno", role: "Senior Writer" },
      { name: "Esther Njeri", role: "Proofreader" },
      { name: "Daniel Kuria", role: "Layout Designer" },
      { name: "Joyce Auma", role: "Content Reviewer" },
      { name: "Paul Wekesa", role: "Copy Editor" },
    ],
    meetingTime: "Every Friday 4:00 PM",
    location: "Conference Room A",
  },
  {
    id: "media-production",
    name: "Media Production",
    category: "KSUCU-MC BOARDS",
    mandate:
      "Media Production handles all audio-visual content creation, live streaming, recording, and multimedia presentations for KSUCU-MC services and events.",
    vision: "To enhance worship experience and extend church reach through quality media production.",
    objectives: [
      "Produce high-quality audio-visual content for services",
      "Manage live streaming and recording of church events",
      "Create promotional and educational videos",
      "Maintain and operate media equipment",
      "Train volunteers in media production skills",
    ],
    leaders: [
      { name: "Kevin Mbugua", position: "Media Production Head", email: "kevin.mbugua@ksucu.org" },
      { name: "Linda Cherop", position: "Video Production Lead", email: "linda.cherop@ksucu.org" },
      { name: "Brian Omondi", position: "Audio Engineer", email: "brian.omondi@ksucu.org" },
    ],
    members: [
      { name: "Collins Wekesa", role: "Camera Operator" },
      { name: "Mercy Wanjiru", role: "Video Editor" },
      { name: "Felix Kibet", role: "Sound Technician" },
      { name: "Hannah Muthoni", role: "Graphics Designer" },
      { name: "Timothy Njoroge", role: "Lighting Technician" },
    ],
    meetingTime: "Every Sunday 2:00 PM",
    location: "Media Studio",
  },
  {
    id: "communication-board",
    name: "Communication Board",
    category: "KSUCU-MC BOARDS",
    mandate:
      "The Communication Board manages all internal and external communications, public relations, and information dissemination within KSUCU-MC and to the broader community.",
    vision: "To facilitate effective communication that builds unity and promotes church growth.",
    objectives: [
      "Develop and implement communication strategies",
      "Manage church social media presence",
      "Coordinate public relations activities",
      "Ensure timely information dissemination",
      "Handle crisis communication when necessary",
    ],
    leaders: [
      { name: "Patricia Wangari", position: "Communications Director", email: "patricia.wangari@ksucu.org" },
      { name: "Robert Macharia", position: "Public Relations Officer", email: "robert.macharia@ksucu.org" },
      { name: "Agnes Moraa", position: "Social Media Manager", email: "agnes.moraa@ksucu.org" },
    ],
    members: [
      { name: "Timothy Njoroge", role: "Communications Assistant" },
      { name: "Lydia Chepkemoi", role: "Content Creator" },
      { name: "Moses Wafula", role: "Community Liaison" },
      { name: "Priscilla Adhiambo", role: "Event Coordinator" },
    ],
    meetingTime: "Every Wednesday 5:00 PM",
    location: "Communications Office",
  },
  // EVANGELISTIC TEAMS
  {
    id: "cetne",
    name: "CETNE",
    category: "EVANGELISTIC TEAMS",
    mandate:
      "CETNE focuses on campus evangelism and discipleship among university students, spreading the Gospel within academic institutions and establishing strong Christian foundations.",
    vision: "To transform university campuses through the power of the Gospel and discipleship.",
    objectives: [
      "Conduct evangelistic campaigns in universities",
      "Establish and strengthen campus fellowships",
      "Disciple new converts and young believers",
      "Organize inter-campus Christian events",
      "Mentor student leaders in evangelism",
    ],
    leaders: [
      { name: "Pastor Mark Kiprotich", position: "Team Leader", email: "mark.kiprotich@ksucu.org" },
      { name: "Catherine Wanjala", position: "Campus Coordinator", email: "catherine.wanjala@ksucu.org" },
      { name: "Stephen Mutiso", position: "Discipleship Leader", email: "stephen.mutiso@ksucu.org" },
    ],
    members: [
      { name: "Emmanuel Kigen", role: "Evangelist", year: "4th Year" },
      { name: "Beatrice Nyokabi", role: "Worship Leader", year: "3rd Year" },
      { name: "Joseph Mwangi", role: "Bible Study Leader", year: "2nd Year" },
      { name: "Winnie Achieng", role: "Outreach Coordinator", year: "4th Year" },
      { name: "Samuel Rotich", role: "Prayer Coordinator", year: "3rd Year" },
    ],
    meetingTime: "Every Thursday 6:30 PM",
    location: "Student Center",
  },
  {
    id: "tese",
    name: "TESE",
    category: "EVANGELISTIC TEAMS",
    mandate:
      "TESE (Team for Evangelistic Support and Encouragement) provides support and encouragement to evangelistic efforts while focusing on community outreach and soul winning.",
    vision: "To support and strengthen evangelistic work through prayer, encouragement, and practical assistance.",
    objectives: [
      "Support evangelistic campaigns and crusades",
      "Provide prayer backing for evangelistic activities",
      "Encourage and train evangelists",
      "Organize community outreach programs",
      "Follow up on new converts",
    ],
    leaders: [
      { name: "Evangelist Paul Kimani", position: "Team Leader", email: "paul.kimani@ksucu.org" },
      { name: "Rose Cheptoo", position: "Prayer Coordinator", email: "rose.cheptoo@ksucu.org" },
      { name: "Francis Ouma", position: "Outreach Director", email: "francis.ouma@ksucu.org" },
    ],
    members: [
      { name: "Margaret Wairimu", role: "Prayer Warrior" },
      { name: "Isaac Rotich", role: "Evangelist" },
      { name: "Gladys Kemunto", role: "Follow-up Coordinator" },
      { name: "Andrew Maina", role: "Community Liaison" },
      { name: "Ruth Chepkemoi", role: "Counselor" },
    ],
    meetingTime: "Every Saturday 3:00 PM",
    location: "Prayer Hall",
  },
  {
    id: "trive",
    name: "TRIVE",
    category: "EVANGELISTIC TEAMS",
    mandate:
      "TRIVE focuses on organizing revival meetings, evangelistic crusades, and spiritual awakening events within and outside the church community.",
    vision: "To ignite spiritual revival and bring souls to Christ through powerful evangelistic events.",
    objectives: [
      "Organize revival meetings and crusades",
      "Coordinate evangelistic outreaches",
      "Train and equip evangelists",
      "Mobilize prayer for revival",
      "Document and follow up on conversions",
    ],
    leaders: [
      { name: "Rev. Joshua Mwangi", position: "Revival Coordinator", email: "joshua.mwangi@ksucu.org" },
      { name: "Miriam Chepkurui", position: "Evangelism Leader", email: "miriam.chepkurui@ksucu.org" },
      { name: "Peter Wanjiku", position: "Event Organizer", email: "peter.wanjiku@ksucu.org" },
    ],
    members: [
      { name: "Samuel Kiprono", role: "Evangelist" },
      { name: "Mary Wambui", role: "Worship Coordinator" },
      { name: "John Ochieng", role: "Logistics Manager" },
      { name: "Grace Njambi", role: "Counselor" },
      { name: "David Kiplagat", role: "Prayer Leader" },
    ],
    meetingTime: "Every Sunday 4:00 PM",
    location: "Main Sanctuary",
  },
  {
    id: "tweso",
    name: "TWESO",
    category: "EVANGELISTIC TEAMS",
    mandate:
      "TWESO is dedicated to systematic evangelism, church planting, and discipleship across different communities, focusing on establishing strong Christian foundations.",
    vision: "To establish strong Christian communities through systematic evangelism and church planting.",
    objectives: [
      "Plant new churches in unreached areas",
      "Train local evangelists and pastors",
      "Conduct systematic evangelism programs",
      "Establish discipleship programs",
      "Support rural and urban missions",
    ],
    leaders: [
      { name: "Bishop David Kiptoo", position: "National Coordinator", email: "david.kiptoo@ksucu.org" },
      { name: "Pastor Jane Wanjiru", position: "Training Director", email: "jane.wanjiru@ksucu.org" },
      { name: "Evangelist Simon Mutua", position: "Field Coordinator", email: "simon.mutua@ksucu.org" },
    ],
    members: [
      { name: "Philip Cheruiyot", role: "Church Planter" },
      { name: "Esther Nyambura", role: "Discipleship Trainer" },
      { name: "Daniel Kiplagat", role: "Mission Coordinator" },
      { name: "Ruth Akinyi", role: "Women's Ministry Leader" },
      { name: "Moses Kiprotich", role: "Youth Coordinator" },
    ],
    meetingTime: "First Saturday of every month 9:00 AM",
    location: "Mission Center",
  },
  // KSUCU-MC MINISTRIES
  {
    id: "ushering",
    name: "Ushering",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "The Ushering Ministry ensures orderly and welcoming church services by guiding congregants, maintaining order, and creating a conducive worship environment.",
    vision: "To create a welcoming and orderly worship environment that honors God and serves His people.",
    objectives: [
      "Welcome and guide church members and visitors",
      "Maintain order during church services",
      "Assist with seating arrangements",
      "Collect offerings and tithes",
      "Provide information and assistance to congregants",
    ],
    leaders: [
      { name: "Elder Thomas Kiprotich", position: "Head Usher", email: "thomas.kiprotich@ksucu.org" },
      { name: "Sister Mary Wanjiku", position: "Assistant Head Usher", email: "mary.wanjiku@ksucu.org" },
      { name: "Brother James Ochieng", position: "Training Coordinator", email: "james.ochieng@ksucu.org" },
    ],
    members: [
      { name: "Grace Mutindi", role: "Senior Usher" },
      { name: "Paul Wekesa", role: "Door Keeper" },
      { name: "Faith Chepkoech", role: "Information Desk" },
      { name: "Michael Kamau", role: "Parking Coordinator" },
      { name: "Joyce Wanjiru", role: "Children's Section Usher" },
      { name: "Daniel Kibet", role: "Security Coordinator" },
    ],
    meetingTime: "Every Sunday 7:00 AM",
    location: "Church Foyer",
  },
  {
    id: "creativity",
    name: "Creativity",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "The Creativity Ministry nurtures and showcases artistic talents within the church, using creative arts to worship God and minister to others.",
    vision: "To use creative arts as a powerful tool for worship, evangelism, and spiritual growth.",
    objectives: [
      "Develop and showcase artistic talents",
      "Organize creative arts events and exhibitions",
      "Use arts for worship and ministry",
      "Train members in various creative skills",
      "Create visual and performing arts for church events",
    ],
    leaders: [
      { name: "Sister Grace Muthoni", position: "Creative Arts Director", email: "grace.muthoni@ksucu.org" },
      { name: "Brother Kevin Wanjala", position: "Visual Arts Coordinator", email: "kevin.wanjala@ksucu.org" },
      { name: "Sister Linda Cherop", position: "Performing Arts Leader", email: "linda.cherop@ksucu.org" },
    ],
    members: [
      { name: "Hannah Njeri", role: "Graphic Designer" },
      { name: "Samuel Kiprotich", role: "Photographer" },
      { name: "Ruth Wambui", role: "Drama Team Leader" },
      { name: "David Ochieng", role: "Poetry Coordinator" },
      { name: "Mercy Akinyi", role: "Dance Instructor" },
    ],
    meetingTime: "Every Saturday 2:00 PM",
    location: "Creative Arts Studio",
  },
  {
    id: "compassion",
    name: "Compassion",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "The Compassion Ministry demonstrates God's love through practical care and support for those in need within the church and community.",
    vision: "To be the hands and feet of Jesus by showing compassion to those in need.",
    objectives: [
      "Provide practical support to needy families",
      "Visit and care for the sick and elderly",
      "Organize charity drives and community service",
      "Counsel and support those facing difficulties",
      "Partner with other organizations for community development",
    ],
    leaders: [
      { name: "Deaconess Sarah Mutua", position: "Compassion Ministry Leader", email: "sarah.mutua@ksucu.org" },
      { name: "Elder John Kiplagat", position: "Community Outreach Coordinator", email: "john.kiplagat@ksucu.org" },
      { name: "Sister Agnes Moraa", position: "Counseling Coordinator", email: "agnes.moraa@ksucu.org" },
    ],
    members: [
      { name: "Mary Wanjiru", role: "Visitation Team Leader" },
      { name: "Peter Mwangi", role: "Food Distribution Coordinator" },
      { name: "Faith Chepkemoi", role: "Counselor" },
      { name: "Moses Wafula", role: "Community Liaison" },
      { name: "Esther Nyambura", role: "Children's Care Coordinator" },
    ],
    meetingTime: "Every Wednesday 5:30 PM",
    location: "Community Hall",
  },
  {
    id: "intercessory",
    name: "Intercessory",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "The Intercessory Ministry is dedicated to prayer and spiritual warfare, standing in the gap for the church, community, and nation through focused prayer.",
    vision: "To be a house of prayer that impacts heaven and transforms earth through intercession.",
    objectives: [
      "Organize regular prayer meetings and vigils",
      "Pray for church leadership and ministries",
      "Intercede for community and national issues",
      "Train members in effective prayer methods",
      "Provide prayer support for church events",
    ],
    leaders: [
      { name: "Pastor Ruth Chepkurui", position: "Intercessory Leader", email: "ruth.chepkurui@ksucu.org" },
      { name: "Elder Francis Ouma", position: "Prayer Coordinator", email: "francis.ouma@ksucu.org" },
      { name: "Sister Rose Wanjiku", position: "Women's Prayer Leader", email: "rose.wanjiku@ksucu.org" },
    ],
    members: [
      { name: "Margaret Wairimu", role: "Prayer Warrior" },
      { name: "Isaac Rotich", role: "Men's Prayer Leader" },
      { name: "Gladys Kemunto", role: "Youth Prayer Coordinator" },
      { name: "Andrew Maina", role: "Early Morning Prayer Leader" },
      { name: "Joyce Auma", role: "Fasting Coordinator" },
    ],
    meetingTime: "Every Tuesday and Friday 5:00 AM",
    location: "Prayer Room",
  },
  {
    id: "high-school",
    name: "High School",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "The High School Ministry focuses on nurturing and discipling high school students, providing them with spiritual guidance and age-appropriate programs.",
    vision: "To raise a generation of young people who are passionate about God and equipped for His service.",
    objectives: [
      "Provide spiritual guidance to high school students",
      "Organize age-appropriate programs and activities",
      "Mentor students in their faith journey",
      "Prepare students for university and adult life",
      "Create a supportive community for teenagers",
    ],
    leaders: [
      { name: "Pastor Michael Otieno", position: "High School Pastor", email: "michael.otieno@ksucu.org" },
      { name: "Sister Catherine Wanjala", position: "Girls' Coordinator", email: "catherine.wanjala@ksucu.org" },
      { name: "Brother Stephen Mutiso", position: "Boys' Coordinator", email: "stephen.mutiso@ksucu.org" },
    ],
    members: [
      { name: "Emmanuel Kigen", role: "Student Leader", year: "Form 4" },
      { name: "Beatrice Nyokabi", role: "Worship Team Leader", year: "Form 3" },
      { name: "Joseph Mwangi", role: "Bible Study Leader", year: "Form 4" },
      { name: "Winnie Achieng", role: "Drama Team Leader", year: "Form 3" },
      { name: "Samuel Rotich", role: "Sports Coordinator", year: "Form 2" },
    ],
    meetingTime: "Every Sunday 2:00 PM",
    location: "Youth Hall",
  },
  {
    id: "wananzambe",
    name: "Wananzambe",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "Wananzambe Ministry focuses on community development and social transformation through various outreach programs and community initiatives.",
    vision:
      "To transform communities through holistic development programs that address spiritual, social, and economic needs.",
    objectives: [
      "Implement community development projects",
      "Provide skills training and capacity building",
      "Support small-scale entrepreneurs",
      "Organize health and wellness programs",
      "Promote environmental conservation",
    ],
    leaders: [
      { name: "Dr. Patricia Wangari", position: "Program Director", email: "patricia.wangari@ksucu.org" },
      { name: "Engineer Robert Macharia", position: "Projects Coordinator", email: "robert.macharia@ksucu.org" },
      { name: "Sister Agnes Moraa", position: "Community Liaison", email: "agnes.moraa@ksucu.org" },
    ],
    members: [
      { name: "Timothy Njoroge", role: "Skills Training Coordinator" },
      { name: "Lydia Chepkemoi", role: "Women's Empowerment Leader" },
      { name: "Moses Wafula", role: "Agriculture Specialist" },
      { name: "Priscilla Adhiambo", role: "Health Program Coordinator" },
      { name: "Daniel Kuria", role: "Youth Empowerment Officer" },
    ],
    meetingTime: "Every Thursday 6:00 PM",
    location: "Community Development Center",
  },
  {
    id: "church-school",
    name: "Church School",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "Church School Ministry provides Christian education and Sunday school programs for children and adults, ensuring biblical literacy and spiritual growth.",
    vision: "To provide quality Christian education that builds strong biblical foundations for all ages.",
    objectives: [
      "Conduct Sunday school for all age groups",
      "Develop Christian education curriculum",
      "Train Sunday school teachers",
      "Organize Bible study programs",
      "Promote biblical literacy in the church",
    ],
    leaders: [
      { name: "Teacher Sarah Mutua", position: "Church School Director", email: "sarah.mutua@ksucu.org" },
      { name: "Teacher James Kiplagat", position: "Curriculum Coordinator", email: "james.kiplagat@ksucu.org" },
      { name: "Sister Ruth Wambui", position: "Children's Coordinator", email: "ruth.wambui@ksucu.org" },
    ],
    members: [
      { name: "Michael Otieno", role: "Adult Class Teacher" },
      { name: "Esther Njeri", role: "Youth Class Teacher" },
      { name: "Daniel Kuria", role: "Children's Teacher" },
      { name: "Joyce Auma", role: "Nursery Coordinator" },
      { name: "Paul Wekesa", role: "Materials Coordinator" },
    ],
    meetingTime: "Every Sunday 9:00 AM",
    location: "Sunday School Classrooms",
  },
  {
    id: "praise-and-worship",
    name: "Praise and Worship",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "Praise and Worship Ministry leads the congregation in worship through music, creating an atmosphere for encountering God's presence.",
    vision: "To usher the congregation into God's presence through spirit-filled worship and praise.",
    objectives: [
      "Lead congregational worship during services",
      "Develop and train worship leaders",
      "Select appropriate songs for different occasions",
      "Maintain worship equipment and instruments",
      "Organize special worship events",
    ],
    leaders: [
      { name: "Worship Pastor Kevin Mbugua", position: "Worship Leader", email: "kevin.mbugua@ksucu.org" },
      { name: "Sister Linda Cherop", position: "Assistant Worship Leader", email: "linda.cherop@ksucu.org" },
      { name: "Brother Brian Omondi", position: "Music Director", email: "brian.omondi@ksucu.org" },
    ],
    members: [
      { name: "Collins Wekesa", role: "Lead Guitarist" },
      { name: "Mercy Wanjiru", role: "Vocalist" },
      { name: "Felix Kibet", role: "Drummer" },
      { name: "Hannah Muthoni", role: "Keyboardist" },
      { name: "Timothy Njoroge", role: "Bass Guitarist" },
      { name: "Grace Chepkemoi", role: "Vocalist" },
    ],
    meetingTime: "Every Wednesday 6:00 PM and Sunday 8:00 AM",
    location: "Main Sanctuary",
  },
  {
    id: "choir",
    name: "Choir",
    category: "KSUCU-MC MINISTRIES",
    mandate:
      "The Choir Ministry provides special music ministry through organized choral performances, enhancing worship services and special events.",
    vision: "To minister through music and bring glory to God through excellent choral performances.",
    objectives: [
      "Perform special music during services",
      "Participate in church events and celebrations",
      "Develop vocal and musical skills",
      "Minister through music in the community",
      "Organize choir concerts and performances",
    ],
    leaders: [
      { name: "Choirmaster Patricia Wangari", position: "Choir Director", email: "patricia.wangari@ksucu.org" },
      {
        name: "Assistant Director Robert Macharia",
        position: "Assistant Choir Director",
        email: "robert.macharia@ksucu.org",
      },
      { name: "Sister Agnes Moraa", position: "Choir Secretary", email: "agnes.moraa@ksucu.org" },
    ],
    members: [
      { name: "Timothy Njoroge", role: "Tenor" },
      { name: "Lydia Chepkemoi", role: "Soprano" },
      { name: "Moses Wafula", role: "Bass" },
      { name: "Priscilla Adhiambo", role: "Alto" },
      { name: "Daniel Kuria", role: "Tenor" },
      { name: "Joyce Auma", role: "Soprano" },
      { name: "Paul Wekesa", role: "Bass" },
      { name: "Faith Chepkoech", role: "Alto" },
    ],
    meetingTime: "Every Thursday 6:30 PM and Sunday 1:00 PM",
    location: "Choir Room",
  },
  // CLASSES AND FELLOWSHIPS
  {
    id: "best-p-classes",
    name: "Best-p Classes",
    category: "CLASSES AND FELLOWSHIPS",
    mandate:
      "Best-p Classes provide specialized training and development programs for church members, focusing on personal growth and ministry skills.",
    vision: "To equip church members with practical skills and knowledge for effective Christian living and ministry.",
    objectives: [
      "Provide specialized training programs",
      "Develop leadership and ministry skills",
      "Offer personal development courses",
      "Create learning opportunities for all ages",
      "Promote continuous education and growth",
    ],
    leaders: [
      { name: "Dr. Sarah Mutua", position: "Classes Coordinator", email: "sarah.mutua@ksucu.org" },
      { name: "Teacher James Kiplagat", position: "Curriculum Developer", email: "james.kiplagat@ksucu.org" },
      { name: "Sister Ruth Wambui", position: "Training Coordinator", email: "ruth.wambui@ksucu.org" },
    ],
    members: [
      { name: "Michael Otieno", role: "Leadership Trainer" },
      { name: "Esther Njeri", role: "Skills Development Instructor" },
      { name: "Daniel Kuria", role: "Personal Development Coach" },
      { name: "Joyce Auma", role: "Life Skills Trainer" },
      { name: "Paul Wekesa", role: "Ministry Skills Instructor" },
    ],
    meetingTime: "Every Saturday 10:00 AM",
    location: "Training Center",
  },
  {
    id: "class-fellowships",
    name: "Class Fellowships",
    category: "CLASSES AND FELLOWSHIPS",
    mandate:
      "Class Fellowships bring together church members based on age groups or life stages for fellowship, mutual support, and spiritual growth.",
    vision: "To create strong bonds of fellowship and support among church members through age-appropriate gatherings.",
    objectives: [
      "Foster fellowship among age-matched groups",
      "Provide mutual support and encouragement",
      "Organize social and spiritual activities",
      "Create mentorship opportunities",
      "Build lasting friendships within the church",
    ],
    leaders: [
      { name: "Elder Thomas Kiprotich", position: "Fellowship Coordinator", email: "thomas.kiprotich@ksucu.org" },
      { name: "Sister Mary Wanjiku", position: "Activities Coordinator", email: "mary.wanjiku@ksucu.org" },
      { name: "Brother James Ochieng", position: "Mentorship Leader", email: "james.ochieng@ksucu.org" },
    ],
    members: [
      { name: "Grace Mutindi", role: "Young Adults Coordinator" },
      { name: "Paul Wekesa", role: "Middle Age Coordinator" },
      { name: "Faith Chepkoech", role: "Seniors Coordinator" },
      { name: "Michael Kamau", role: "Activities Organizer" },
      { name: "Joyce Wanjiru", role: "Fellowship Secretary" },
    ],
    meetingTime: "Every Second Sunday 3:00 PM",
    location: "Fellowship Hall",
  },
  {
    id: "sisters-fellowship",
    name: "Sisters Fellowship",
    category: "CLASSES AND FELLOWSHIPS",
    mandate:
      "Sisters Fellowship provides a platform for women in the church to come together for spiritual growth, mutual support, and women-specific ministry activities.",
    vision: "To empower and support women in their spiritual journey and life challenges through sisterly fellowship.",
    objectives: [
      "Provide spiritual support for women",
      "Address women-specific issues and challenges",
      "Organize women's ministry activities",
      "Create mentorship opportunities for women",
      "Promote women's participation in church leadership",
    ],
    leaders: [
      { name: "Sister Grace Muthoni", position: "Sisters Fellowship Leader", email: "grace.muthoni@ksucu.org" },
      { name: "Sister Linda Cherop", position: "Assistant Leader", email: "linda.cherop@ksucu.org" },
      { name: "Sister Rose Wanjiku", position: "Secretary", email: "rose.wanjiku@ksucu.org" },
    ],
    members: [
      { name: "Hannah Njeri", role: "Prayer Coordinator" },
      { name: "Ruth Wambui", role: "Bible Study Leader" },
      { name: "Mercy Akinyi", role: "Outreach Coordinator" },
      { name: "Margaret Wairimu", role: "Counseling Coordinator" },
      { name: "Gladys Kemunto", role: "Activities Organizer" },
      { name: "Esther Nyambura", role: "Mentorship Coordinator" },
    ],
    meetingTime: "Every First Saturday 2:00 PM",
    location: "Women's Hall",
  },
  {
    id: "brothers-fellowship",
    name: "Brothers Fellowship",
    category: "CLASSES AND FELLOWSHIPS",
    mandate:
      "Brothers Fellowship brings together men in the church for spiritual growth, accountability, and men-specific ministry activities and discussions.",
    vision: "To develop godly men who are strong spiritual leaders in their families, church, and community.",
    objectives: [
      "Provide spiritual accountability for men",
      "Address men-specific issues and challenges",
      "Develop male leadership in the church",
      "Create mentorship opportunities for men",
      "Organize men's ministry activities and outreaches",
    ],
    leaders: [
      { name: "Elder Thomas Kiprotich", position: "Brothers Fellowship Leader", email: "thomas.kiprotich@ksucu.org" },
      { name: "Brother Kevin Wanjala", position: "Assistant Leader", email: "kevin.wanjala@ksucu.org" },
      { name: "Brother Francis Ouma", position: "Secretary", email: "francis.ouma@ksucu.org" },
    ],
    members: [
      { name: "Samuel Kiprotich", role: "Prayer Leader" },
      { name: "David Ochieng", role: "Bible Study Coordinator" },
      { name: "Peter Mwangi", role: "Outreach Leader" },
      { name: "Moses Wafula", role: "Accountability Partner Coordinator" },
      { name: "Andrew Maina", role: "Activities Organizer" },
      { name: "Isaac Rotich", role: "Mentorship Coordinator" },
    ],
    meetingTime: "Every Third Saturday 3:00 PM",
    location: "Men's Hall",
  },
  {
    id: "discipleship-classes",
    name: "Discipleship Classes",
    category: "CLASSES AND FELLOWSHIPS",
    mandate:
      "Discipleship Classes provide systematic biblical teaching and spiritual formation for new believers and those seeking to deepen their faith.",
    vision:
      "To make disciples who make disciples, building a strong foundation of biblical knowledge and Christian character.",
    objectives: [
      "Provide systematic biblical teaching",
      "Develop spiritual disciplines and practices",
      "Train new believers in Christian fundamentals",
      "Create pathways for spiritual growth",
      "Prepare members for ministry and leadership",
    ],
    leaders: [
      { name: "Pastor Mark Kiprotich", position: "Discipleship Director", email: "mark.kiprotich@ksucu.org" },
      { name: "Teacher Sarah Mutua", position: "Curriculum Coordinator", email: "sarah.mutua@ksucu.org" },
      { name: "Elder John Kiplagat", position: "Training Supervisor", email: "john.kiplagat@ksucu.org" },
    ],
    members: [
      { name: "Stephen Mutiso", role: "New Believers Class Teacher" },
      { name: "Catherine Wanjala", role: "Intermediate Class Teacher" },
      { name: "Emmanuel Kigen", role: "Advanced Class Teacher" },
      { name: "Beatrice Nyokabi", role: "Women's Discipleship Leader" },
      { name: "Joseph Mwangi", role: "Men's Discipleship Leader" },
      { name: "Winnie Achieng", role: "Youth Discipleship Coordinator" },
    ],
    meetingTime: "Every Sunday 11:00 AM",
    location: "Discipleship Center",
  },
]

export function getEntityById(id: string): Entity | undefined {
  return entitiesData.find((entity) => entity.id === id)
}

export function getEntitiesByCategory(category: string): Entity[] {
  return entitiesData.filter((entity) => entity.category === category)
}
