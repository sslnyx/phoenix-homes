import { useRef, useEffect, useState } from "react";
import Marker from "./Marker";
import styles from "./style.json";

import "./index.scss";

const GoogleMap = ({ selectedProjects, setBounds, bounds, setMap, map }) => {
  const ref = useRef();

  const mapOtions = {
    center: {
      lat: 49.1866364,
      lng: -122.849229,
    },
    zoom: 10,
    styles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, mapOtions));

      setBounds(new google.maps.LatLngBounds());
    }
  }, [ref, map]);

  return (
    <div className="content">
      <div ref={ref} id="map" />

      {selectedProjects
        ? selectedProjects.map(({ coordinate, category, name, icon }, i) => (
            <Marker
              key={i}
              {...{ coordinate, category, map, name, bounds, icon }}
              timeout={100 * i}
            />
          ))
        : null}
    </div>
  );
};

export default GoogleMap;
