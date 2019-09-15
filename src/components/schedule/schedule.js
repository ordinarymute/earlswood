import React from 'react';

const Schedule = () => {
  return (
    <div className="inner-container">
      <h2>Schedule</h2>
      <p>Below is the stream schedule. All times are BST. Times are subject to change so the best way to stay up to date is to follow on 
        <a href="https://twitter.com/EarlswoodTwitch"> Twitter</a>
      </p>
      <div className="schedule-container">
        <div className="schedule-outer">
          <div className="schedule-inner">
            <h4>Monday</h4>
            <p>7PM - 2AM<br />&nbsp;</p>
          </div>
        </div>
        <div className="schedule-outer">
          <div className="schedule-inner">
            <h4>Tuesday</h4>
            <p>OFF/Supporting<br />&nbsp;</p>
          </div>
        </div>
        <div className="schedule-outer">
          <div className="schedule-inner">
            <h4>Wednesday</h4>
            <p>*OFF/YouTube Film Day<br />&nbsp;</p>
          </div>
        </div>
        <div className="schedule-outer">
          <div className="schedule-inner">
            <h4>Thursday</h4>
            <p>12PM - 5PM<br />7PM - 2AM</p>
          </div>
        </div>
        <div className="schedule-outer">
          <div className="schedule-inner">
            <h4>Friday</h4>
            <p>12PM - 5PM<br />7PM - 2AM</p>
          </div>
        </div>
        <div className="schedule-outer">
          <div className="schedule-inner">
            <h4>Saturday</h4>
            <p>12PM - 6PM<br />&nbsp;</p>
          </div>
        </div>
        <div className="schedule-outer">
          <div className="schedule-inner">
            <h4>Sunday</h4>
            <p>7PM - 2AM<br />&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule;