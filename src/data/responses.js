// data brain


// All bot responses live here.
// To update content later → just edit this file.
// No need to touch any React component. 

export const responses = {

  //  Sent automatically on page load 
  intro: {
    text: `Hello there 👋\nMy name is *Nandini Goyal*.\nI'm a Full Stack Developer & B.Tech CSE student at GJUST, Hisar.\nI love building real-world web apps and solving DSA problems 🚀\n\nClick any option below to know more about me!`,
    chips: ["About Me", "Skills", "Projects", "Resume", "Contact"],
  },

  //  About 
  "about me": {
    text: `I'm a 3rd year B.Tech CSE student at Guru Jambheshwar University of Science & Technology, Hisar (CGPA: 8.00/10) 🎓\n\nCurrently interning as a *Junior Software Developer* at Code Scaler, working on *AuraDial* — a multi-tenant AI Voice Lead Management CRM SaaS used in Real Estate, EdTech & Healthcare.\n\nI'm passionate about full-stack development and actively seeking opportunities to contribute to production-grade systems 🎯`,
    chips: ["Skills", "Projects", "Contact"],
  },

  //  Skills 
  skills: {
    text: `Here's my tech stack 🛠️\n\n*Languages:* Java, Python, SQL\n*Frontend:* React.js, Tailwind CSS, HTML5, CSS3, Javascript\n*Backend:* Node.js, Express.js, REST APIs, JWT, OAuth 2.0, Passport.js\n*Databases:* MongoDB, PostgreSQL, Prisma ORM\n*Tools:* Git, Github, Postman, VS Code, UNIX Command Line, Cloudinary, Vercel, Render, Cloudinary, MongoDB Atlas`,
    chips: ["Projects", "Resume", "Contact"],
  },

  //  Projects list 
  projects: {
    text: "Here are my projects 🚀 Click one to know more!",
    chips: ["ClaimIt", "LearnFinder", "MindNest", "Back to Menu"],
  },

  //  ClaimIt 
  claimit: {
    text: `📦 *ClaimIt* — Campus Lost & Found Platform\n\nA full-stack inventory management system where items are tracked through a state-driven lifecycle (posted → claimed → resolved).\n\n*Stack:* React, Node.js, Express, MongoDB, JWT, Cloudinary, Tailwind CSS\n\n✅ Role-based auth (seller/buyer access)\n✅ Cloudinary image uploads via Multer\n✅ Debounced search API\n✅ Deployed on Vercel + Render`,
    chips: ["LearnFinder", "MindNest", "Resume", "Contact"],
    links: [
      { label: "Live Demo ↗", url: "https://claimit-campus.vercel.app/" },
      { label: "GitHub ↗", url: "https://github.com/goyal-nandini/claimit" },
    ],
  },

  //  LearnFinder 
  learnfinder: {
    text: `🧠 *LearnFinder* — AI-Powered Learning Resource Platform\n\nSearch any topic → get 8 AI-curated resources + a 4-week auto-generated learning path using Groq AI (Llama 3.3 70B).\n\n*Stack:* React, Node.js, Express, MongoDB, Groq AI, JWT, Tailwind CSS\n\n✅ Prompt-engineered Groq for structured JSON responses\n✅ Reusable AI endpoints (search, summarize, learning path)\n✅ JWT auth with bcrypt + user-specific data isolation`,
    chips: ["ClaimIt", "MindNest", "Resume", "Contact"],
    links: [
      { label: "Live Demo ↗", url: "https://learnfinder.vercel.app/" },
      { label: "GitHub ↗", url: "https://github.com/goyal-nandini/learnfinder" },
    ],
  },

  //  MindNest 
  mindnest: {
    text: `📓 *MindNest* — Private Journaling App\n\nA secure multi-user journaling app with Google OAuth 2.0 + local auth via Passport.js, with strict session-based data isolation.\n\n*Stack:* Node.js, Express, PostgreSQL, EJS, Passport.js, Google OAuth 2.0\n\n✅ Relational data in PostgreSQL (Neon.tech)\n✅ Parameterized SQL queries (no ORM)\n✅ Deployed on Render`,
    chips: ["ClaimIt", "LearnFinder", "Resume", "Contact"],
    links: [
      { label: "Live Demo ↗", url: "https://mindnest-d9jn.onrender.com/" },
      { label: "GitHub ↗", url: "https://github.com/goyal-nandini/mindnest" },
    ],
  },

  //  Resume 
  resume: {
    text: "Here's my resume! 📄",
    chips: ["Projects", "Contact"],
    file: {
      name: "Nandini_Goyal_Resume.pdf",
      size: "312 KB",
      url: "https://drive.google.com/file/d/1e3de2T79aRUYd3lOrAFrOJYuJjwfNnD_/view?usp=sharing", 
    },
  },

  //  Contact 
  // contact: {
  //   text: `Let's connect! 🤝\n\n📧 nandinikartik1981@gmail.com\n💼 linkedin.com/in/nandini-goyal\n🐙 github.com/nandini-goyal\n🌐 nandini-portfolio.vercel.app\n⚡ leetcode.com/nandini-goyal`,
  //   chips: ["Resume", "Projects", "About Me"],
  // },
//   contact: {
//   text: `Let's connect! 🤝`,
//   contacts: [
//     {
//       icon: "📧",
//       label: "Email",
//       text: "nandinikartik1981@gmail.com",
//       url: "mailto:nandinikartik1981@gmail.com",
//     },
//     {
//       icon: "💼",
//       label: "LinkedIn",
//       text: "nandini-goyal29",
//       url: "https://www.linkedin.com/in/nandini-goyal29/",
//     },
//     {
//       icon: "🐙",
//       label: "GitHub",
//       text: "goyal-nandini",
//       url: "https://github.com/goyal-nandini",
//     },
//     {
//       icon: "🌐",
//       label: "Portfolio",
//       text: "nandini-goyal-chatfolio",
//       url: "https://nandini-goyal-chatfolio.vercel.app/",
//     },
//     {
//       icon: "⚡",
//       label: "LeetCode",
//       text: "nandini-goyal",
//       url: "https://leetcode.com/u/nandini-goyal",
//     },
//   ],
//   chips: ["Resume", "Projects", "About Me"],
// },

//   //  Fallback 
//   default: {
//     text: "Hmm, I didn't get that 😅 Try one of these:",
//     chips: ["About Me", "Skills", "Projects", "Resume", "Contact"],
//   },

    contact: {
  text: `Let's connect! 🤝

Feel free to connect with me through any of these:`,

  links: [
    {
      label: "📧 Email",
      url: "mailto:nandinikartik1981@gmail.com",
    },
    {
      label: "💼 LinkedIn",
      url: "https://linkedin.com/in/nandini-goyal29",
    },
    {
      label: "🐙 GitHub",
      url: "https://github.com/goyal-nandini",
    },
    {
      label: "🌐 Portfolio",
      url: "https://nandini-goyal-chatfolio.vercel.app",
    },
    {
      label: "⚡ LeetCode",
      url: "https://leetcode.com/u/nandini-goyal",
    },
  ],

  chips: ["Resume", "Projects", "About Me"],
}
};

// 
// Maps what user types OR which chip they click
// → to a key in the responses object above
//
// All lowercase — we'll .toLowerCase() the input
// before looking it up in useChat.js
// 
export const keywordMap = {
  "about me": "about me",
  about: "about me",
  skills: "skills",
  "my skills": "skills",
  projects: "projects",
  "my projects": "projects",
  claimit: "claimit",
  learnfinder: "learnfinder",
  mindnest: "mindnest",
  resume: "resume",
  "see resume": "resume",
  contact: "contact",
  "contact me": "contact",
  "back to menu": "default",
};