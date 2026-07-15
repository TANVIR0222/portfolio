import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "sparktech.agency",
    companyName: "SparkTech Agency",
    companyLogo: "https://www.sparktech.agency/assets/logo.png",
    companyWebsite: "https://www.sparktech.agency",
    positions: [
      {
        id: "1",
        title: "Mobile App Developer",
        employmentPeriod: {
          start: "05.2025",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Develop and maintain cross-platform mobile applications using React Native and Expo.
- Implemented an analytics infrastructure that allows understanding of user behavior with high accuracy and stays confidential for users.
- Set up Detox E2E testing and integrated it with CI/CD and Genymotion. Set up E2E, linting, and a types check on pull request builds and daily pipelines.
- Migrated CI/CD from GitHub Actions to Expo EAS Workflows for automated builds and OTA updates.
- Monitored app performance with Sentry, Crashlytucs, and Shortcut.io.
- Developed push notifications and Deeplink testing strategies for E2E and manual testing.
- Defined automated and standardized app release procedures for app stores and over-the-air updates (CodePush).
- Upgraded and refactored the app's basic mechanism, such as Redux store navigation, push notifications, and deep linking.
`,
        skills: [
          "React Native",
          "Expo",
          "TypeScript",
          "Tailwind CSS",
          "Native UI",
          "Redux Toolkit",
          "RTK Query",
          "Figma",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  //   {
  //     id: "quaric",
  //     companyName: "Quaric",
  //     companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
  //     companyWebsite: "https://quaric.com",
  //     positions: [
  //       {
  //         id: "2",
  //         title: "Design Engineer",
  //         employmentPeriod: {
  //           start: "03.2024",
  //         },
  //         employmentType: "Part-time",
  //         icon: <CodeXmlIcon />,
  //         description: `- Created Quaric Brand Identity.
  // - Created the Quaric Design System to standardize design practices and accelerate development.

  // In-house Project: [Quaric Website](https://quaric.com)
  // - Designed the UI/UX for Quaric Website, delivering a seamless experience.
  // - Developed online ordering to streamline purchases.
  // - Integrated VNPAY-QR for secure transactions.
  // - Registered the e-commerce site with [online.gov.vn](http://online.gov.vn/website/chi-tiet-115855) for compliance.

  // In-house Project: [ZaDark](https://zadark.com)
  // - Build and maintain ZaDark.com with Docusaurus, integrating AdSense.
  // - Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox — with 20k+ active users via Chrome Web Store (as of Sep 2025).`,
  //         skills: [
  //           "Next.js",
  //           "Strapi",
  //           "Auth0",
  //           "VNPAY-QR",
  //           "Docker",
  //           "NGINX",
  //           "Google Cloud",
  //           "Docusaurus",
  //           "Extension",
  //           "UI/UX Design",
  //           "UX Writing",
  //           "Design System",
  //           "Brand Design",
  //           "Figma",
  //           "Research",
  //         ],
  //       },
  //       {
  //         id: "1",
  //         title: "Founder",
  //         employmentPeriod: {
  //           start: "03.2024",
  //         },
  //         employmentType: "Part-time",
  //         icon: <LightbulbIcon />,
  //         skills: ["Business Ownership", "Business Law", "Business Tax"],
  //       },
  //     ],
  //     isCurrentEmployer: true,
  //   },
  {
    id: "softvence-agency",
    companyName: "Softvence Agency",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5F_-X1-Zjj2aZBRglKPE_JZRBNkBRmmABaeZNp3jt0aBi_Z29rCN9y8&s=10",
    positions: [
      {
        id: "2",
        title: "Intern Frontend Developer",
        employmentPeriod: {
          start: "03.2025",
          end: "05.2025",
        },
        employmentType: "Intern",
        icon: <CodeXmlIcon />,
        description: `- Built Tree & Gantt views features to improve goal organization, visibility, and progress tracking.
  - Developed [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
  - Developed [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
  - Built and maintained the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
  - Developed interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
  - Developed and maintained core features to enhance functionality and user experience.
  - Ensured UI/UX consistency and adherence to standards.
  - Implemented robust frontend solutions for web and mobile platforms.
  - Analyzed technical capabilities and provided optimal solutions.`,
        skills: [
          "JavaScript",
          "HTML",
          "CSS",
          "React",
          "webFlow",
          "Web Design",
          "Web Development",

          "Problem-solving",
        ],
      },
    ],
  },
]
