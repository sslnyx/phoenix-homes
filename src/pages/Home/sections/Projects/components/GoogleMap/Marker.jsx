import { useEffect, useState } from "react";

const Marker = ({ coordinate, map, timeout, name, bounds, icon }) => {
  // console.log(map);
  const [marker, setMarker] = useState();
  const [infowindow, setInfowindow] = useState();

  const image = {
    url: icon,
    scaledSize: new google.maps.Size(35, 35),
  };

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    if (!infowindow) {
      setInfowindow(
        new google.maps.InfoWindow({
          content: name,
        })
      );
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        if (infowindow) {
          setInfowindow(null);
        }
        google.maps.event.clearInstanceListeners(marker);
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      const LatLng = {
        lat: coordinate[0],
        lng: coordinate[1],
      };

      bounds.extend(LatLng);
      map.fitBounds(bounds, 100);
      // console.log(name);

      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
        // marker.setIcon(activeIcon);
      });

      const timerId = setTimeout(() => {
        marker.setOptions({
          position: LatLng,
          map,
          icon: image,
          animation: google.maps.Animation.DROP,
        });
      }, timeout);

      return () => {
        if (timerId) {
          clearTimeout(timerId);
        }
      };
    }
  }, [marker, name]);

  return null;
};

export default Marker;
