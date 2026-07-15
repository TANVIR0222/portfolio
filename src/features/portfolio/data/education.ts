import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "diu",
    school: "dhaka International University - DIU",
    degree: "Bachelor’s degree",
    fieldOfStudy: "Artificial Intelligence (AI)",
    period: {
      start: "08.2025",
      //   end: "08.2026",
    },
    description: `- Currently studying for a Bachelor’s degree in Artificial Intelligence.
- Language Proficiency: B1 level in English (CEFR).
- Achieved several awards, including`,
    skills: [
      "C",
      "Java",
      "Python",
      "DSA",
      "Advanced Databases",
      "Systems Design",
      "Distributed Systems",
      "Software Engineering",
    ],
  },
  {
    id: "cpi",
    school: "CPI Management & Technology",
    fieldOfStudy: "Diploma in Computer Science & Technology",
    period: {
      start: "01.2020",
      end: "01.2024",
    },
    description: `- Completed a four-year Diploma in Computer Science & Technology with a strong foundation in software development and computer engineering.
- Studied core computer science subjects including Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL/MySQL), Operating Systems, Computer Networks, Software Engineering, and Computer Architecture.
- Gained practical experience in Web Design & Development using HTML, CSS, JavaScript, PHP, and Laravel.
- Built academic projects using Java, C, C++, Python, PHP, and MySQL while following software development best practices.
- Developed problem-solving, debugging, database design, and object-oriented programming skills through hands-on laboratory work and team projects.
- Completed industrial training and project work focused on real-world software development practices.`,
    skills: ["Java", "C", "C++", "Python", "PHP", "Laravel", "MySQL", "SQL"],
  },
]
