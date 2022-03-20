const studentMenu = [
  {
    text: "Dashboard",
    path: "/",
  },
  {
    text: "Schedule",
    path: "/schedule",
  },
  {
    text: "Grades",
    path: "/grades",
  },
  {
    text: "Ledger",
    path: "/ledger",
  },
];

const instructorMenu = [
  {
    text: "Dashboard",
    path: "/",
  },
  {
    text: "Schedule",
    path: "/schedule",
  },
  {
    text: "Subjects",
    path: "/subjects",
  },
  {
    text: "Resources",
    path: "/resources",
  },
];

const registrarMenu = [
  {
    text: "Dashboard",
    path: "/",
  },
  {
    text: "Students",
    path: "/students",
  },
  {
    text: "Instructors",
    path: "/instructors",
  },
  {
    text: "Subjects",
    path: "/subjects",
  },
];

const administratorMenu = [
  {
    text: "Dashboard",
    path: "/",
  },
  {
    text: "Accounts",
    path: "/accounts",
  },
  {
    text: "Subjects",
    path: "/subjects",
  },
  {
    text: "Students",
    path: "/students",
  },
  {
    text: "Employees",
    path: "/employees",
  },
];

const accountantMenu = [
  {
    text: "Dashboard",
    path: "/",
  },
  {
    text: "Students",
    path: "/students",
  },
  {
    text: "Fees",
    path: "/fees",
  },
];

const guestMenu = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];

const getMenu = (role, isLoggedIn) => {
  if (isLoggedIn) {
    if (role === "STUDENT") return studentMenu;
    else if (role === "INSTRUCTOR") return instructorMenu;
    else if (role === "REGISTRAR") return registrarMenu;
    else if (role === "ADMINISTRATOR") return administratorMenu;
    else if (role === "ACCOUNTANT") return accountantMenu;
    else return [];
  } else return guestMenu;
};

export default getMenu;
