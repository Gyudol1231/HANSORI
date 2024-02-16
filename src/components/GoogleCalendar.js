import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

// const API_KEY = "AIzaSyDcnoFRHVqc-Hn9jSIp2fWgXJi2bxLuhpM";
const API_KEY = process.env.REACT_APP_API_KEY;
let calendars = [
  {
    calendarId: "sbbp3lj7128ajkcs362lvi76vg@group.calendar.google.com",
    color: "#E9D1B8",
  }, //add a color field to specify the color of a calendar
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "0px", //make outer edge of calendar thicker
    color: "black",
  },

  //you can also use emotion's string styles
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: #005b4a;
    border: 3px solid #005b4a;
    font-size: 15px;
    font-weight: bold;
  `,

  day: css`
    background-color: #f3f3f3;
    border: none;
    margin: 2px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
  `,
};

const language = "EN";

class GoogleCalendar extends React.Component {
  render() {
    return (
      <div
        style={{
          borderRight: "10px solid white",
          borderLeft: "10px solid white",
          height: "100vh",
        }}
      >
        <Calendar
          apiKey={API_KEY}
          calendars={calendars}
          styles={styles}
          language={language}
        />
      </div>
    );
  }
}

export default GoogleCalendar;
