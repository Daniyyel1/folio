import React from "react";
import { WorkStationWrapper } from "../styles";
import { Link } from "react-router-dom";

const WorkStation = ({ item }) => {
  return (
    <WorkStationWrapper className="">
      <Link className="stationCard" to={item.hostedLink} target="_blank">
        <div className="workInfo">
          <img src={item.img} alt="work" />
          <h2>{item.name}</h2>
        </div>
        <div className="workLinks">
          <h3>{item.site}</h3>

          <Link to={item.hostedLink}>
            {item.hostedLink}
          </Link>

        </div>
      </Link>
    </WorkStationWrapper>
  );
};

export default WorkStation;
