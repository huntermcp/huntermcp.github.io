import React from "react";

const School = ({ school }) => (

<div className="row item">
        <div className="twelve columns">

          <h3>school.institution</h3>
          <p className="info">
            school.degree
            <span>&bull;</span>
            <em className="date">school.startDate</em>
          </p>

          <p>
            school.summary
          </p>
        </div>
      </div>

    )

    export default School;
