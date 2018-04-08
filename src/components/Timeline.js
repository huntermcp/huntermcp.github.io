import React from "react";
import { VerticalTimeline, VerticalTimelineElement, Bookmark }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';

import Profile from '../assets/Profile.js'

const Timeline = () => (
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 15 0, 243)', color: '#fff' }}
    icon = {<WorkIcon />}
  //  icon="<i class='fa fa-heart'></i>"
    >
  <h3 className="vertical-timeline-element-title">{Profile.work[0].position}</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 15 0, 243)', color: '#fff' }}
    icon = {<WorkIcon />}
  //  icon="<i class='fa fa-heart'></i>"
    >
  <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
);



export default Timeline;
