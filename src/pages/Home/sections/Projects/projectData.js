import currentIcon from "/assets/images/map/current.svg";
import pastIcon from "/assets/images/map/past.svg";
import upcomingIcon from "/assets/images/map/upcoming.svg";

const allProjects = [
  {
    name: "Phoenix Hill",
    city: "North Surrey",
    category: "Current Projects",
    status: "Now Selling",
    img: import("/assets/images/map/upcoming.svg"),
    gallery: {
      imgCount: 34,
    },
    coordinate: [49.2076056, -122.8545315],
  },
  {
    name: "Phoenix Craft",
    city: "Surrey",
    category: "Current Projects",
    status: "Now Selling",
    img: null,
    gallery: {
      imgCount: 49,
    },
    coordinate: [49.1483466, -122.7606001],
  },
  {
    name: "Phoenix Citylife",
    city: "Surrey city Centre",
    category: "Current Projects",
    status: "Now Selling",
    img: null,
    gallery: {
      imgCount: 22,
    },
    coordinate: [49.1872467, -122.8369168],
  },
  {
    name: "Phoenix Industrial Park",
    city: "Surrey",
    category: "Current Projects",
    status: "Now Renting",
    img: null,
    coordinate: [49.1229282, -122.7357014],
  },
  {
    name: "Phoenix City Walk",
    city: "North Surrey",
    category: "Current Projects",
    status: "Now Leasing",
    img: null,
    coordinate: [49.182929, -122.836666],
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
    name: "Phoenix Lifestyle",
    des: "9 elegant family townhomes",
    city: "East Clayton, Surrey",
    category: "Past Projects",
    status: null,
    img: null,
    completeDate: 2017,
    gallery: {
      imgCount: 18,
    },
    coordinate: [49.1357847, -122.6824041],
  },
  {
    name: "York",
    des: "62 craftsman-styled townhomes",
    city: "Langley",
    category: "Past Projects",
    status: null,
    img: null,
    completeDate: 2014,
    gallery: {
      imgCount: 2,
    },
    coordinate: [49.1347048, -122.672073],
  },
  {
    name: "Belcroft",
    des: "41 duplex homes",
    city: "South Surrey",
    category: "Past Projects",
    status: null,
    img: null,
    completeDate: 2014,
    gallery: {
      imgCount: 5,
    },
    coordinate: [49.0493814, -122.7821492],
  },
  {
    name: "Blu At Morgan Creek",
    des: "62 duplex-style and single-family homes",
    city: "South Surrey",
    category: "Past Projects",
    status: null,
    img: null,
    completeDate: 2014,
    gallery: {
      imgCount: 7,
    },
    coordinate: [49.0597351, -122.7825969],
  },
  {
    name: "Hazel",
    des: "34 Condos in Coquitlam's enchanting Maillardville neighbourhood",
    city: "Coquitlam",
    category: "Past Projects",
    status: null,
    img: null,
    gallery: {
      imgCount: 8,
    },
    completeDate: 2013,
    coordinate: [49.2380589, -122.8766544],
  },
  {
    name: "Luna",
    des: "51 townhomes and single-family home development",
    city: "Abbotsford",
    category: "Past Projects",
    status: null,
    img: null,
    gallery: {
      imgCount: 40,
    },
    completeDate: 2011,
    coordinate: [49.055938, -122.3725522],
  },
  {
    name: "Aura",
    des: "41 duplex-style and single-family homes",
    city: "Delta",
    category: "Past Projects",
    status: null,
    img: null,
    gallery: {
      imgCount: 30,
    },
    completeDate: null,
    coordinate: [49.1661851, -122.8983079],
  },
  {
    name: "947 Ash St",
    des: "5000 sq ft single family home",
    city: "White Rock",
    category: "Past Projects",
    status: null,
    img: null,
    gallery: {
      imgCount: 6,
    },
    completeDate: 2009,
    coordinate: [49.0194074, -122.7931655],
  },
  {
    name: "Sullivan Gardens",
    des: "35 townhomes",
    city: "Panorama, Surrey",
    category: "Past Projects",
    status: null,
    img: null,
    completeDate: 2008,
    coordinate: [49.1092816, -122.8041703],
  },
  {
    name: "Woodland Place",
    des: "9 three-bedroom townhomes",
    city: "Port Coquitlam",
    category: "Past Projects",
    status: null,
    img: null,
    gallery: {
      imgCount: 6,
    },
    completeDate: 2008,
    coordinate: [49.2781615, -122.7908388],
  },
  {
    name: "North Fraser Estates",
    des: "18 townhomes",
    city: "Maple Ridge",
    category: "Past Projects",
    status: null,
    img: null,
    completeDate: 2005,
    coordinate: [49.215592, -122.6020053],
  },
  {
    name: "Kwantlen Village",
    des: "55 townhomes",
    city: "Surrey",
    category: "Past Projects",
    status: null,
    img: null,
    completeDate: 2005,
    coordinate: [49.1332755, -122.8763487],
  },
];

const getGalleryArr = async (projectName) => {
  const project = allProjects.find(({ name }) => name === projectName);
  const { name, category } = project;
  const slug = convertToSlug(name);
  const cat = convertToSlug(category);
  !project.gallery.imgArr ? (project.gallery.imgArr = []) : "";

  if (project.gallery.imgArr < 1) {
    for (let i = 1; i <= project.gallery.imgCount; i++) {
      const img = `/assets/images/projects/${cat}/${slug}/${i}.jpg`;
      project.gallery.imgArr.push(img);
    }
  }

  return project.gallery.imgArr;
};

allProjects.forEach(async (project, i) => {
  const { category, name } = project;
  const slug = convertToSlug(name);
  const cat = convertToSlug(category);
  // const path = `../../../../src/assets/images/projects/${cat}`;

  category === "Current Projects"
    ? ((project.icon = currentIcon),
      (project.img = `/assets/images/projects/${cat}/${slug}.jpg`))
    : category === "Upcoming Projects"
    ? ((project.icon = pastIcon),
      (project.img = `/assets/images/projects/${cat}/${slug}.jpg`))
    : category === "Past Projects"
    ? ((project.icon = upcomingIcon),
      (project.img = `/assets/images/projects/${cat}/${slug}.jpg`))
    : "";
});

// project?.gallery?.imgCount
//   ? gallery(project, project.gallery.imgCount, cat, slug)
//   : "";

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export { allProjects, getGalleryArr };
