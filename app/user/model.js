import Model from 'ember-data/model';

export default Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string'),
    age: DS.attr('string'),
    gender : DS.attr('string'),
    sexuality: DS.attr('string'),
    username: DS.attr('string'),
    password: DS.attr('string'),
});
