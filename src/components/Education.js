import React from "react";


const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">


<div className="row item">
  <div className="twelve columns">
    <h3>School of Cool Designers</h3>
    <p className="info">
      B.A. Degree in Graphic Design
      <span>&bull;</span>
      <em className="date">March 2003</em>
    </p>

    <p>
      This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
      velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
      auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
      Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
      Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
      ornare odio. Sed non mauris vitae erat
    </p>
  </div>
</div>


    </div>
  </div>
);


export default Education;

/*
function renderSchools(schools) {
    if (schools.length > 0) {
        return schools.map((school, index) => (
            <School key={index} school={school} />
        ));
    }
    else return [];
}

const School = ({ school }) => {
  return(
 <school key={school.id}>
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
</school>
    )
  }

const Education = (React.createClass({
    render() {
  const schools = renderSchools(this.props.schools);
  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">

                 { schools }

                 </div>
               </div>
             );

}
})
)
*/
