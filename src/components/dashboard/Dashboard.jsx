import React, { Component } from "react";
import Notifcations from "./Notifications";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase"; // we want to use this as higher order componenet
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class DashBord extends Component {
  state = {};
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifcations notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(DashBord);

// offset m1 is to leave the gap btw the two divs
// firestore to sync data to our components
