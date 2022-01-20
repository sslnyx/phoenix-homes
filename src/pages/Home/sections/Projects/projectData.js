import currentIcon from "/src/assets/images/map/current.svg";
import pastIcon from "/src/assets/images/map/past.svg";
import upcomingIcon from "/src/assets/images/map/upcoming.svg";

const allProjects = [
  {
    name: "Phoenix Hill",
    city: "North Surrey",
    category: "Current Projects",
    status:"Now Selling",
    img: import("/src/assets/images/map/upcoming.svg"),
    coordinate: [49.2076056, -122.8545315],
  },
  {
    name: "Phoenix Craft",
    city: "Surrey",
    category: "Current Projects",
    status:"Now Selling",
    img: null,
    coordinate: [49.1483466, -122.7606001],
  },
  {
    name: "Phoenix Citylife",
    city: "Surrey city Centre",
    category: "Current Projects",
    status:"Now Selling",
    img: null,
    coordinate: [49.1872467, -122.8369168],
  },
  {
    name: "Phoenix Industrial Park",
    city: "Surrey",
    category: "Current Projects",
    status:"Now Renting",
    img: null,
    coordinate: [49.1229282, -122.7357014],
  },
  {
    name: "Phoenix City Walk",
    city: "North Surrey",
    category: "Current Projects",
    status:"Now Leasing",
    img: null,
    coordinate: [49.1220917, -122.7334228],
  },
  {
    name: "Phoenix Central",
    city: "North Surrey",
    img: "",
    category: "Upcoming Projects",
    status: null,
    img: null,
    coordinate: [49.1782368, -122.7826919],
  },
  {
    name: "Phoenix Green",
    city: "Surrey",
    category: "Upcoming Projects",
    status: null,
    img: null,
    coordinate: [49.1572805, -122.8002177],
  },
  {
    name: "Phoenix Height",
    city: "Surrey city Centre",
    category: "Upcoming Projects",
    status: null,
    img: null,
    coordinate: [49.1910424, -122.8431831],
  },
  {
    name: "947 Ash St",
    city: "North Surrey",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.0194074, -122.7931655],
  },
  {
    name: "Aura",
    city: "Surrey",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.1661851, -122.8983079],
  },
  {
    name: "Bluat Morgan Creek",
    city: "Surrey city Centre",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.0551732, -122.7971858],
  },
  {
    name: "Hazel",
    city: "Surrey city Centre",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.0552782, -122.8584701],
  },
  {
    name: "Kwantlen Village",
    city: "Surrey city Centre",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.0554608, -122.8584702],
  },
  {
    name: "Luna",
    city: "Surrey city Centre",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.0558261, -122.8584702],
  },
  {
    name: "Phoenix Lifestyle",
    city: "",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.0561913, -122.8584703],
  },
  {
    name: "Sullivan Gardens",
    city: "",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.1092816, -122.8041703],
  },
  {
    name: "Woodland Place",
    city: "",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.1819698, -122.8732233],
  },
  {
    name: "York",
    city: "",
    category: "Past Projects",
    status: null,
    img: null,
    coordinate: [49.1476332, -122.867881],
  },
];


allProjects.forEach(async (project, i) => {
  const { category, name } = project;
  const slug = convertToSlug(name);
  const path = `../../../../src/assets/images/projects/${convertToSlug(
    category
  )}`;

  category === "Current Projects"
    ? ((project.icon = currentIcon),
      (project.img = await import(`../${path}/${slug}.jpg`)))
    : category === "Upcoming Projects"
    ? ((project.icon = pastIcon),
      (project.img = await import(`../${path}/${slug}.jpg`)))
    : category === "Past Projects"
    ? ((project.icon = upcomingIcon),
      (project.img = await import(`../${path}/${slug}.jpg`)))
    : "";
});

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}


export default allProjects;
