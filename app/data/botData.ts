export const BOT_DATA = {
  start: {
    type: 'bot',
    message: "Hi there! I'm Atha Bot. How can I help you today?",
    options: [
      { text: "Leave a Testimony ", nextStep: "testimoni" },
      { text: "View Project Archives ", nextStep: "archive" },
      { text: "Inquire About Availability ", nextStep: "status" }
    ]
  },
  testimoni: {
    message: "That's very kind of you! Please feel free to leave your thoughts on my testimony page. All testimonies might appear in hero section.",
    options: [
      { text: "Open Testimony Page", nextStep: "/testimoni", isLink: true },
      { text: "Back to start", nextStep: "start" }
    ]
  },
  archive: {
    message: "You can explore my previous works and source codes here:",
    options: [
      { text: "View Work Gallery", nextStep: "/work", isLink: true },
      { text: "GitHub Profile", nextStep: "https://github.com/athazayyan", isLink: true },
      { text: "Back to start", nextStep: "start" }
    ]
  },
  status: {
    message: "I am currently open for freelance projects in 2026! How would you like to connect?",
    options: [
      { text: "WhatsApp (Fast Response)", nextStep: "https://wa.me/6287881743293", isLink: true },
      { text: "Send an Email", nextStep: "mailto:atha.al.khand@gmail.com", isLink: true },
      { text: "Back to start", nextStep: "start" }
    ]
  }
};