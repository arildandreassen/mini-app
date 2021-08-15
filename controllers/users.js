exports.listUsers = (req, res) => {
  const users = [
    {
      id: 1,
      firstName: "George",
      lastName: "Washington",
    },
    {
      id: 2,
      firstName: "Thomas",
      lastName: "Jefferson",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Adams",
    },
  ];
  res.json(users);
};
