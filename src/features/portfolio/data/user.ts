import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Tamvir",
  lastName: "Islam",
  displayName: "Tanvir Islam",
  username: "tanvir",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Developer",
    "Open Source Contributor",
  ],
  address: "Dhaka City, Bangladesh",
  phoneNumberB64: "Kzg4MDE2MzkxMjUwMTI=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "dGFudmlyaXNsYW0zOTEyQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://chanhdai.com",
  jobTitle: "Mobile App Developer",
  jobs: [
    {
      title: "Mobile App Developer",
      company: "SparkTech",
      website: "https://www.sparktech.agency",
      experienceId: "sparktech",
    },
    {
      title: "Founder",
      company: "Quaric",
      website: "https://quaric.com",
      experienceId: "quaric",
    },
  ],
  about: `I’m Tanvir Islam (call me Tanvir) — a Mobile App Developer with 1+ years of experience, known for pixel-perfect execution and an obsessive attention to detail.

  Passionate about building intuitive, high-performance mobile apps with clean, maintainable code and seamless cross-platform experiences.
  
Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.


`,
  avatar:
    "https://res.cloudinary.com/y6xkwixl/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_1_2026_02_51_35_PM_nsqomm",
  avatarVariants: {
    lightOff:
      "https://res.cloudinary.com/y6xkwixl/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_1_2026_02_51_35_PM_nsqomm",
    lightOn:
      "https://res.cloudinary.com/y6xkwixl/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_1_2026_02_51_35_PM_nsqomm",
    darkOff:
      "https://res.cloudinary.com/y6xkwixl/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_1_2026_02_51_35_PM_nsqomm",
    darkOn:
      "https://res.cloudinary.com/y6xkwixl/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_1_2026_02_51_35_PM_nsqomm",
  },
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "Asia/Dhaka",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2026-07-01", // YYYY-MM-DD
}
