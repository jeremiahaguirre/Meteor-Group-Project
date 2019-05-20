import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Map as GMap, Marker, GoogleApiWrapper } from "google-maps-react";
import { withTracker } from "meteor/react-meteor-data";
import { applyToJob, getJobPosts } from "../../../ui/helpers/functions";

// array of random long/lat offsets for demo
const jazz = (() => new Array(20).fill(0).map(n => Math.random() * -0.0015))();

const MOCK_JOBS = [
  {
    title: "helo",
    description: "bldsfadfa bfdsadfdsafsdfsdala",
    date: "Tuesday 23:00",
    available: true,
    _id: "32h7shyujs"
  },
  {
    title: "blabla",
    description: "wohoikjahlkajshfkjsahdkfjsoo",
    date: "Tuesday 01:00",
    available: true,
    _id: "32dfsa3hyujs"
  },
  {
    title: "party",
    description: "excfdsadsafsadfsdafellent",
    date: "Wednesday 00:00",
    available: false,
    _id: "3339i9ddyujs"
  }
];

const RequestModal = ({ open, onClose, children }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    {children}
  </Dialog>
);

const MapContainer = ({ google, jobs, currentUserId }) => {
  const [coords, setCoords] = useState();
  const [activeMarker, setActiveMarker] = useState();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser");
    } else {
      navigator.geolocation.getCurrentPosition(({ coords }) =>
        setCoords(coords)
      );
    }
  }, []);

  if (!coords) return null;
  return (
    <GMap
      style={{
        width: "85%",
        height: "400px",
        margin: "auto"
      }}
      initialCenter={{
        lat: coords.latitude,
        lng: coords.longitude
      }}
      zoom={14}
      google={google}
    >
      {MOCK_JOBS &&
        // filter unavailable jobs
        MOCK_JOBS.filter(d => d.available).map(
          ({ title, description, date, _id }, i) => (
            <Marker
              key={title}
              title={title}
              name={description}
              date={date}
              id={_id}
              onClick={(props, marker, e) => setActiveMarker(marker)}
              position={{
                lat: coords.latitude + jazz[i],
                lng: coords.longitude + jazz[i]
              }}
            />
          )
        )}
      {activeMarker && (
        <RequestModal
          open={Boolean(activeMarker)}
          onClose={() => setActiveMarker(null)}
        >
          <DialogTitle id="alert-dialog-title">
            {activeMarker.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {activeMarker.name}({activeMarker.date})
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setActiveMarker(null)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                applyToJob(activeMarker.id, currentUserId);
                setActiveMarker(null);
              }}
              color="primary"
              autoFocus
            >
              Request
            </Button>
          </DialogActions>
        </RequestModal>
      )}
    </GMap>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDVeH1MZLc4kjzbFlgDeHRqAUtvsoUe2EI"
})(
  withTracker(() => {
    Meteor.subscribe("allJobs");

    return {
      jobs: getJobPosts(),
      currentUserId: Meteor.userId()
    };
  })(MapContainer)
);
