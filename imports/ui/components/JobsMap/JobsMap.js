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
  console.log(jobs);
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
    <Marker
        key={0}
        position={{
          lat: coords.latitude ,
          lng: coords.longitude 
        }}
      />
      {jobs &&
        jobs.map(
          ({ title, description, time, _id ,location}) => (
            <Marker
              key={_id}
              title={title}
              name={description}
              date={time}
              id={_id}
              onClick={(props, marker, e) => setActiveMarker(marker)}
              position={{
                lat: location.latitude ,
                lng: location.longitude 
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
    Meteor.subscribe("openJobs");
    Meteor.subscribe("userProfiles");
    return {
      jobs: getJobPosts(),
      currentUserId: Meteor.userId()
    };
  })(MapContainer)
);
