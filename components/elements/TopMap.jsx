import React from "react";
import Map from "react-map-gl";
import Coupon from "../../pages/assets/Coupon";
import Locals from "./Locals";
import Tag from "./Tag";

const TopMap = () => {
  const [viewState, setViewState] = React.useState({
    latitude: 34.706542021068344,
    longitude: 135.50324831854138,
    zoom: 15,
  });

  return (
    <div className="z-0 w-full h-[90vh] relative">
      <div className="z-0 w-full h-full absolute">
        <Map
          mapStyle="mapbox://styles/tonyleung/cl4s4ijtr000114rm48hycx66"
          mapboxAccessToken="pk.eyJ1IjoidG9ueWxldW5nIiwiYSI6ImNsNHMxZ21qYTBicmQza251NXphNnNudHcifQ.2qstDbOcdkwxjtw3XMPhfg"
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
        ></Map>
        ;
      </div>

      <div className="z-50 absolute bottom-[20%] left-[5%]">
        <Coupon />
        <Tag />
        <Locals />
      </div>
    </div>
  );
};

export default TopMap;
