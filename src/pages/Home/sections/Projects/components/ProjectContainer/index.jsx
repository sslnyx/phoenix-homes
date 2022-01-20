import Accordion from "react-bootstrap/Accordion";
import { Row, Col } from "react-bootstrap";
import CustomToggle from "./partial/CutomToggle";
import ProjectCard from "./partial/ProjectCard";

import currentIcon from "/src/assets/images/map/currentProjects_icon_Blue.png";
import pastIcon from "/src/assets/images/map/PastProjects_icon_Yellow.png";
import upComingIcon from "/src/assets/images/map/UpcomingProjects_icon_Red.png";

import "./index.scss";

const ProjectContainer = ({
  selectedCat,
  allProjects,
  setSelectedCat,
  setSelectedProjects,
}) => {
  const projectByCats = allProjects.reduce((acc, project) => {
    const category = project?.category;
    !acc[category] ? (acc[category] = []) : "";
    acc[category].push(project);
    return acc;
  }, {});

  const projectIcons = {
    "Current Projects": currentIcon,
    "Past Projects": pastIcon,
    "Upcoming Projects": upComingIcon,
  };

  const handleClick = (cat) => {
    selectedCat !== cat ? (setSelectedProjects(null), setSelectedCat(cat)) : "";
  };

  return (
    <div className="content-w">
      <Accordion defaultActiveKey={0}>
        {Object.keys(projectByCats).map((cat, i) => (
          <div key={cat}>
            <CustomToggle eventKey={i} cat={cat} handleClick={handleClick}>
              <>
                <img src={projectIcons[cat]} alt="" />
                <h3 className="text-uppercase">{cat}</h3>
              </>
            </CustomToggle>

            <Accordion.Collapse eventKey={i}>
              <Row className="project-wrapper">
                {projectByCats[cat].map((project, j) => (
                  <Col key={j} xs={12} md={3}>
                    <ProjectCard {...project} index={j}></ProjectCard>
                  </Col>
                ))}
              </Row>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default ProjectContainer;
