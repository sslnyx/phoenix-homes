const newsData = [
  {
    title: "Hazel - Set your Sights",
    slides: ["hazel"],
    date: "November 25, 2019",
    content: "news content",
  },
  {
    title: "Westminster Savings - Feature Insert",
    slides: ["westminster-saving-1", "westminster-saving-2"],
    date: "April 16, 2018",
    content: "news content",
  },
  {
    title: "Sullivan Gargdens - West Cost Inspired",
    slides: ["sullivan-gardens"],
    date: "January 18, 2018",
    content: "news content",
  },
  {
    title: "YORK - The Tradition of Good Living",
    slides: ["york"],
    date: "November 5, 2017",
    content: "news content",
  },  {
    title: "YORK - The Tradition of Good Living",
    slides: ["york"],
    date: "November 5, 2017",
    content: "news content",
  },  {
    title: "YORK - The Tradition of Good Living",
    slides: ["york"],
    date: "November 5, 2017",
    content: "news content",
  },  {
    title: "YORK - The Tradition of Good Living",
    slides: ["york"],
    date: "November 5, 2017",
    content: "news content",
  },  {
    title: "YORK - The Tradition of Good Living",
    slides: ["york"],
    date: "November 5, 2017",
    content: "news content",
  },  {
    title: "END YORK - The Tradition of Good Living",
    slides: ["york"],
    date: "November 5, 2017",
    content: "news content",
  },
];

newsData.forEach((n) => {
  !n.slidesUrl ? (n.slidesUrl = []) : "";
  n.slides.forEach(async (slide) => {
    const url = await import(
      `../../../../../../../../src/assets/images/news/${slide}.jpg`
    );
    n.slidesUrl.push(url.default);
  });
});


export default newsData;
