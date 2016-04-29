// app/adapters/application.js
import DS from 'ember-data';

export default DS.RESTAdapter.extend({ namespace: 'api',
  host: 'https://localhost:4200', //going to be http://dev.cinemaloop.com

});
