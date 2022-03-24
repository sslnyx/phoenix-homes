const getSectionTopBOttom = (acc, section) => {
  const sectName = section.id;
  acc[sectName] ? (acc[sectName] = {}) : "";
  acc[sectName] = {
    top: section?.offsetTop,
    bottom: section?.offsetTop + section?.offsetHeight,
  };
  return acc;
};

export default getSectionTopBOttom;
