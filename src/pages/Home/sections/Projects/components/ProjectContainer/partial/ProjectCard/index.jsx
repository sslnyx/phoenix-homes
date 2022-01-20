import "./index.scss";

const ProjectCard = ({ name, img, index, status, city }) => {
  return (
    <div className="project-card">
      <div className="project-bg">
        {img?.default ? <img src={img.default} alt="" /> : ""}
      </div>

      <div className="back-drop"></div>

      <div className="project-content">
        <h6 className="project-title mb-5">
          <span>
            {index < 9 ? 0 : ""}
            {index + 1}
          </span>{" "}
          {name}
        </h6>

        {status ? <div className="project-status">{status}</div> : ""}

        {city ? <div>{city}</div> : ""}
      </div>
    </div>
  );
};

export default ProjectCard;
