import { useState, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "./components/GoogleMap";
import ProjectContainer from "./components/ProjectContainer";

import allProjects from "./projectData";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const Projects = () => {
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedProjects, setSelectedProjects] = useState(allProjects);
  const [map, setMap] = useState();
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    
    if (bounds) {
      setBounds(new google.maps.LatLngBounds());
    }

    selectedCat !== "all"
      ? setSelectedProjects(
          allProjects.reduce((acc, project) => {
            project.category === selectedCat ? acc.push(project) : null;
            return acc;
          }, [])
        )
      : null;
  }, [selectedCat]);

  return (
    <section>
      <Wrapper apiKey={import.meta.env.VITE_APP_MAP_KEY} render={render}>
        <GoogleMap
          selectedProjects={selectedProjects}
          setBounds={setBounds}
          bounds={bounds}
          setMap={setMap}
          map={map}
        />
      </Wrapper>

      <div className="mb-5"></div>

      <ProjectContainer
        {...{
          allProjects,
          selectedCat,
          setSelectedCat,
          setBounds,
          setSelectedProjects,
        }}
      ></ProjectContainer>
    </section>
  );
};

export default Projects;
