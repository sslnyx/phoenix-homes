import { useState } from "react";
import { getGalleryArr } from "../../../../projectData";
import "./index.scss";

const ProjectCard = ({
  name,
  img,
  index,
  status,
  city,
  gallery,
  completeDate,
  handleShow,
  des,
  getGA,
  setLoadingGallery,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="project-card">
      <div className="project-bg">
        {img ? <img src={img} alt="" /> : ""}
      </div>

      <div className="back-drop"></div>

      <div className="project-content">
        <h6 className="project-title mb-5 text-uppercase">
          <span>
            {index < 9 ? 0 : ""}
            {index + 1}
          </span>{" "}
          {name}
        </h6>

        <div className="project-card-body">
          <div>
            {des ? <div className="project-des d-inline-block">{des}</div> : ""}
          </div>
          {status ? <div className="project-status">{status}</div> : ""}
          {city ? <div>{city}</div> : ""}
        </div>

        <div className="project-card-footer">
          {gallery?.imgCount ? (
            <button
              className="btn-submit"
              onClick={async () => (
                handleShow(),
                setLoadingGallery(true),
                getGA(await getGalleryArr(name)),
                setLoadingGallery(false)
              )}
            >
              VIEW GALLERY
            </button>
          ) : (
            ""
          )}

          {completeDate ? <span>Completed in {completeDate}</span> : ""}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
