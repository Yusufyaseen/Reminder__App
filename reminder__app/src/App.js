import React, { Component } from "react";
import {
  add_reminder,
  remove_reminder,
  clear_reminder,
} from "./Actions/action";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import logo from "./Images/reminder.png";
import moment from "moment";
class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  render_reminders = () => {
    const reminders = this.props.reminder;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>
                <h5 className="rname">{reminder.text}</h5>
              </div>
              <div>
                <p className="prg">
                  <span className="creating btn btn-success">
                    Date Of Creating :
                  </span>
                  {moment(new Date()).calendar()}
                </p>
                <p className="prg">
                  <span className="ending btn btn-danger">
                    Date Of Ending :
                  </span>
                  {moment(new Date(reminder.date)).calendar()}
                </p>
                <p className="moment">
                  {moment(new Date(reminder.date)).fromNow()}
                </p>
              </div>
              <div
                className="closeicon btn btn-danger"
                onClick={() => {
                  this.props.remove_reminder(reminder.id);
                }}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div className="App">
        <img src={logo} alt="Nothing" />
        <div className="reminder-title">
          <h2>What’s Your Plan..?</h2>
          <hr />
        </div>
        <input
          type="text"
          className="form-control"
          value={this.state.text}
          placeholder="Enter What Do You Think About..!!"
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        />

        <DatePicker
          placeholderText="Enter Your Specialized Date"
          className="form-control"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => {
            this.setState({ date });
          }}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
        />
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            this.props.add_reminder(this.state.text, this.state.date);
            this.setState({ text: "", date: "" });
          }}
        >
          Add Reminder
        </button>
        {this.render_reminders()}
        <button
          className="btn btn-danger btn-block"
          onClick={() => {
            this.props.clear_reminder();
          }}
        >
          Clear All Reminders
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reminder: state,
  };
};
// const mapDispatchToMap = dispatch => {
//   return {
//     add_Reminder: () => dispatch(add_reminder())
//   }
// }
export default connect(mapStateToProps, {
  add_reminder,
  remove_reminder,
  clear_reminder,
})(App);
