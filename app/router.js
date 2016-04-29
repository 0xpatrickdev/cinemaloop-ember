import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signup', function() {
    this.route('1');
    this.route('2');
    this.route('3');
    this.route('4');
    this.route('5');
    this.route('6');
  });
  this.route('login');
  this.route('example', function() {
    this.route('get');
  });
  this.route('wine');
  this.route('posts',{
    path: '/posts/:post_id'
  });
  this.route('home');
});

export default Router;
