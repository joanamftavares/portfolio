export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/919966397524738091/1058022852600799312/4bf029229e9f4ec241117cd42c39aceb89c2c81839e99f001249a448.png",
      name: "investments 4 some",
      description: "app developed during first year of my master's degree. it aims to educate the user on how to invest and how to analyze usual technical indicators.",
      link: "https://investments4some-n1xe.onrender.com/",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/919966397524738091/1058025616886218843/index.png",
      name: "bi4all - dashboard",
      description: "using power bi, we developed a dashboard with the analysis of multiple departments in bi4all. we also used KPI's to help provide insights/solutions.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNGM3ZDAwZmMtNzhiNi00ZGUyLWJmN2QtZjg3MTA2ODc2ZjRkIiwidCI6ImU0YmQ2OWZmLWU2ZjctNGMyZS1iMjQ3LTQxYjU0YmEyNDkwZSIsImMiOjh9",
    },
     {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/919966397524738091/1059093526555672626/image.png",
      name: "spotify moods",
      description: "study of how music changes your mood and how certain features of a song change throughout the years.",
      link: "https://spotify-moods-dashboard.onrender.com/",
    }
  ];
  res.status(200).json(data);
};
