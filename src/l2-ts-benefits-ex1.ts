// Define a type for the data parameter
type Visit = { page: { caption: string } };
type User = { name: string };
type LogData = { visits: Visit[]; user: User };

function logVisitsEx1(data: LogData) {
    data.visits.forEach((visit: { page: { caption: string; }; }) => console.log(visit.page.caption, data.user.name));
  }
  
  logVisitsEx1({
    visits: [{ page: { caption: "Page1" } }, { page: { caption: "Page2-renamed" } }],
    user: { name: "Bob" },
  });