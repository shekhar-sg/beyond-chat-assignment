import { User } from "@/components/UserList";

export const users: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    status: "online",
    unreadCount: 2,
    conversation: [
      { from: "Alice Johnson", message: "Hey, how are you?", time: "09:15 AM" },
      { from: "Me", message: "I'm good, Alice! How about you?", time: "09:16 AM" },
      { from: "Alice Johnson", message: "Doing well, thanks!", time: "09:17 AM" },
    ],
  },
  {
    id: "2",
    name: "Bob Smith",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Me", message: "Are you joining the meeting?", time: "08:40 AM" },
      { from: "Bob Smith", message: "Yes, see you at the meeting.", time: "08:45 AM" },
    ],
  },
  {
    id: "3",
    name: "Charlie Group",
    isGroup: true,
    groupMembers: ["Alice Johnson", "Bob Smith", "Diana Prince"],
    unreadCount: 5,
    conversation: [
      { from: "Diana Prince", message: "Let's finalize the project.", time: "Yesterday" },
      { from: "Alice Johnson", message: "I agree!", time: "Yesterday" },
      { from: "Me", message: "Ready when you are.", time: "Yesterday" },
    ],
  },
  {
    id: "4",
    name: "Diana Prince",
    status: "typing...",
    unreadCount: 1,
    conversation: [
      { from: "Diana Prince", message: "Typing...", time: "07:30 AM" },
    ],
  },
  {
    id: "5",
    name: "Eve Group",
    isGroup: true,
    groupMembers: ["Eve Adams", "Frank Lee"],
    unreadCount: 0,
    conversation: [
      { from: "Eve Adams", message: "Welcome to the group!", time: "Monday" },
      { from: "Frank Lee", message: "Glad to be here!", time: "Monday" },
    ],
  },
  {
    id: "6",
    name: "Frank Lee",
    status: "online",
    unreadCount: 0,
    conversation: [
      { from: "Me", message: "Hey Frank, are you free this weekend?", time: "08:05 AM" },
      { from: "Frank Lee", message: "Let's catch up soon!", time: "08:10 AM" },
    ],
  },
  {
    id: "7",
    name: "Grace Hopper",
    status: "offline",
    unreadCount: 1,
    conversation: [
      { from: "Grace Hopper", message: "I'll send the report.", time: "Yesterday" },
      { from: "Me", message: "Thank you!", time: "Yesterday" },
    ],
  },
  {
    id: "8",
    name: "Henry Ford",
    status: "online",
    unreadCount: 0,
    conversation: [
      { from: "Henry Ford", message: "Meeting at 3pm.", time: "Yesterday" },
      { from: "Me", message: "I'll be there.", time: "Yesterday" },
    ],
  },
  {
    id: "9",
    name: "Ivy Group",
    isGroup: true,
    groupMembers: ["Grace Hopper", "Frank Lee", "Henry Ford"],
    unreadCount: 2,
    conversation: [
      { from: "Grace Hopper", message: "Shared the document.", time: "Monday" },
      { from: "Frank Lee", message: "Received, thanks!", time: "Monday" },
      { from: "Henry Ford", message: "Looks good!", time: "Monday" },
    ],
  },
  {
    id: "10",
    name: "Jack Ma",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Me", message: "Great job on the project!", time: "Sunday" },
      { from: "Jack Ma", message: "Thanks!", time: "Sunday" },
    ],
  },
  {
    id: "11",
    name: "Karen Page",
    status: "online",
    unreadCount: 3,
    conversation: [
      { from: "Karen Page", message: "See you tomorrow.", time: "Sunday" },
      { from: "Me", message: "See you!", time: "Sunday" },
    ],
  },
  {
    id: "12",
    name: "Leo Messi",
    status: "online",
    unreadCount: 0,
    conversation: [
      { from: "Leo Messi", message: "Goal!", time: "Saturday" },
      { from: "Me", message: "Amazing shot!", time: "Saturday" },
    ],
  },
  {
    id: "13",
    name: "Mona Lisa",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Me", message: "Nice to meet you!", time: "Saturday" },
      { from: "Mona Lisa", message: "Likewise!", time: "Saturday" },
    ],
  },
  {
    id: "14",
    name: "Nina Simone",
    status: "online",
    unreadCount: 1,
    conversation: [
      { from: "Nina Simone", message: "Let's sing together.", time: "Friday" },
      { from: "Me", message: "Absolutely!", time: "Friday" },
    ],
  },
  {
    id: "15",
    name: "Oscar Wilde",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Oscar Wilde", message: "Witty as always!", time: "Friday" },
      { from: "Me", message: "Thank you!", time: "Friday" },
    ],
  },
  {
    id: "16",
    name: "Penny Group",
    isGroup: true,
    groupMembers: ["Oscar Wilde", "Nina Simone", "Mona Lisa"],
    unreadCount: 4,
    conversation: [
      { from: "Oscar Wilde", message: "Welcome Penny!", time: "Thursday" },
      { from: "Nina Simone", message: "Welcome!", time: "Thursday" },
      { from: "Mona Lisa", message: "Glad to have you!", time: "Thursday" },
    ],
  },
  {
    id: "17",
    name: "Quentin Tarantino",
    status: "online",
    unreadCount: 0,
    conversation: [
      { from: "Quentin Tarantino", message: "Movie night?", time: "Thursday" },
      { from: "Me", message: "Count me in!", time: "Thursday" },
    ],
  },
  {
    id: "18",
    name: "Rachel Green",
    status: "offline",
    unreadCount: 2,
    conversation: [
      { from: "Rachel Green", message: "Coffee at Central Perk?", time: "Wednesday" },
      { from: "Me", message: "See you there!", time: "Wednesday" },
    ],
  },
  {
    id: "19",
    name: "Steve Jobs",
    status: "online",
    unreadCount: 0,
    conversation: [
      { from: "Steve Jobs", message: "Innovation!", time: "Wednesday" },
      { from: "Me", message: "Always inspiring!", time: "Wednesday" },
    ],
  },
  {
    id: "20",
    name: "Tina Fey",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Tina Fey", message: "Let's write!", time: "Tuesday" },
      { from: "Me", message: "Ready when you are!", time: "Tuesday" },
    ],
  },
  {
    id: "21",
    name: "Uma Thurman",
    status: "online",
    unreadCount: 1,
    conversation: [
      { from: "Uma Thurman", message: "Ready for action!", time: "Tuesday" },
      { from: "Me", message: "Let's go!", time: "Tuesday" },
    ],
  },
  {
    id: "22",
    name: "Victor Hugo",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Victor Hugo", message: "Reading Les Misérables.", time: "Monday" },
      { from: "Me", message: "A masterpiece!", time: "Monday" },
    ],
  },
  {
    id: "23",
    name: "Wendy Darling",
    status: "online",
    unreadCount: 0,
    conversation: [
      { from: "Wendy Darling", message: "Neverland awaits!", time: "Monday" },
      { from: "Me", message: "Let's fly!", time: "Monday" },
    ],
  },
  {
    id: "24",
    name: "Xander Cage",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Xander Cage", message: "Extreme sports!", time: "Sunday" },
      { from: "Me", message: "Count me in!", time: "Sunday" },
    ],
  },
  {
    id: "25",
    name: "Yara Shahidi",
    status: "online",
    unreadCount: 2,
    conversation: [
      { from: "Yara Shahidi", message: "See you at the event.", time: "Sunday" },
      { from: "Me", message: "Looking forward to it!", time: "Sunday" },
    ],
  },
  {
    id: "26",
    name: "Zane Malik",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "Zane Malik", message: "Singing now!", time: "Saturday" },
      { from: "Me", message: "Can't wait to hear!", time: "Saturday" },
    ],
  },
  {
    id: "27",
    name: "Alpha Group",
    isGroup: true,
    groupMembers: ["Zane Malik", "Yara Shahidi", "Xander Cage"],
    unreadCount: 3,
    conversation: [
      { from: "Zane Malik", message: "Alpha team assembled.", time: "Friday" },
      { from: "Yara Shahidi", message: "Ready for action!", time: "Friday" },
      { from: "Xander Cage", message: "Let's do this!", time: "Friday" },
    ],
  },
  {
    id: "28",
    name: "Beta Group",
    isGroup: true,
    groupMembers: ["Wendy Darling", "Victor Hugo", "Uma Thurman"],
    unreadCount: 0,
    conversation: [
      { from: "Wendy Darling", message: "Beta test complete.", time: "Thursday" },
      { from: "Victor Hugo", message: "Great work!", time: "Thursday" },
      { from: "Uma Thurman", message: "On to the next!", time: "Thursday" },
    ],
  },
  {
    id: "29",
    name: "Gamma Group",
    isGroup: true,
    groupMembers: ["Tina Fey", "Steve Jobs", "Rachel Green"],
    unreadCount: 1,
    conversation: [
      { from: "Tina Fey", message: "Gamma rays detected!", time: "Wednesday" },
      { from: "Steve Jobs", message: "Fascinating!", time: "Wednesday" },
      { from: "Rachel Green", message: "Stay safe!", time: "Wednesday" },
    ],
  },
  {
    id: "30",
    name: "Delta Group",
    isGroup: true,
    groupMembers: ["Quentin Tarantino", "Penny Group", "Oscar Wilde"],
    unreadCount: 0,
    conversation: [
      { from: "Quentin Tarantino", message: "Delta update released.", time: "Tuesday" },
      { from: "Penny Group", message: "Update received!", time: "Tuesday" },
      { from: "Oscar Wilde", message: "Excellent!", time: "Tuesday" },
    ],
  },
  {
    id: "31",
    name: "Epsilon Group",
    isGroup: true,
    groupMembers: ["Nina Simone", "Mona Lisa", "Leo Messi"],
    unreadCount: 2,
    conversation: [
      { from: "Nina Simone", message: "Epsilon is live!", time: "Monday" },
      { from: "Mona Lisa", message: "Congrats!", time: "Monday" },
      { from: "Leo Messi", message: "Well done!", time: "Monday" },
    ],
  },
  {
    id: "32",
    name: "Fiona Apple",
    status: "online",
    unreadCount: 0,
    conversation: [
      { from: "Fiona Apple", message: "Music session?", time: "Sunday" },
      { from: "Me", message: "Let's jam!", time: "Sunday" },
    ],
  },
  {
    id: "33",
    name: "George Clooney",
    status: "offline",
    unreadCount: 0,
    conversation: [
      { from: "George Clooney", message: "Coffee break!", time: "Saturday" },
      { from: "Me", message: "I'm in!", time: "Saturday" },
    ],
  },
  {
    id: "34",
    name: "Hannah Montana",
    status: "online",
    unreadCount: 1,
    conversation: [
      { from: "Hannah Montana", message: "Best of both worlds!", time: "Friday" },
      { from: "Me", message: "You rock!", time: "Friday" },
    ],
  },
  {
    id: "35",
    name: "Ian McKellen",
    status: "online",
    unreadCount: 1,
    conversation: [
      { from: "Ian McKellen", message: "You shall not pass!", time: "Friday" },
      { from: "Me", message: "Legendary line!", time: "Friday" },
    ],
  },
];

