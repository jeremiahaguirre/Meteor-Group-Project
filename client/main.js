import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/containers/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react-target'));
});