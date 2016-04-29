export default function() {
  this.namespace = 'api';
  this.urlPrefix = 'https://localhost:4200';



  this.get('/users', 'user');
  this.post('/users', 'user');
  this.get('/user/:id');

  /**
   **  long method  ==> the shit we're actually accomplishing using with the shorthand syntax above e.g. this.get('users')
   **  Ember-cli-mirage : http://www.ember-cli-mirage.com/docs/v0.1.x/quickstart/
   **  Ember Igniter Tutorial : http://emberigniter.com/mocking-data-with-ember-cli-mirage/
   **  Programming With Erik Example : http://www.programwitherik.com/ember-mirage-tutorial-and-examples/

   START PSUEDO-BACKEND CALLS NOT MADE USING EMBERS THIS.HTTPVERB SYNTAX (WHICH IS AWESOME)

  this.post('/users', function(store, request) {
    var attrs = JSON.parse(request.requestBody).user;
    var attrs = JSON.parse(request.requestBody);
       var user = store.users.insert(attrs);
       return { user: user };
  });


  this.get('/posts/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'posts',
        id: id,
        attributes: db.posts.find(id)
      }
    };
  });

  //collection of data
  this.get('/posts', function(db, request) {
    return {
      data: db.posts.map(attrs => ({
        type: 'posts',
        id: attrs.id,
        attributes: attrs
      }))
    };
  });

  this.post('/cars', (db, request) => {
    return JSON.parse(request.requestBody);
  });

  //collection of data

  //this.get('posts');
  //this.get('posts/:id');
  **/

}
//collection of data


// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
// this.namespace = '';    // make this `api`, for example, if your API is namespaced
// this.timing = 400;      // delay for each request, automatically set to 0 during testing

/*
  Route shorthand cheatsheet
*/
/*
  GET shorthands

  // Collections
  this.get('/contacts');
  this.get('/contacts', 'user');
  this.get('/contacts', ['contacts', 'addresses']);

  // Single objects
  this.get('/contacts/:id');
  this.get('/contacts/:id', 'user');
  this.get('/contacts/:id', ['contact', 'addresses']);
*/
/*
  POST shorthands

  this.post('/contacts');
  this.post('/contacts', 'user'); // specify the type of resource to be created
*/

/*
  PUT shorthands

  this.put('/contacts/:id');
  this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
*/

/*
  DELETE shorthands

  this.del('/contacts/:id');
  this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

  // Single object + related resources. Make sure parent resource is first.
  this.del('/contacts/:id', ['contact', 'addresses']);
*/

/*
  Function fallback. Manipulate data in the db via

    - db.{collection}
    - db.{collection}.find(id)
    - db.{collection}.where(query)
    - db.{collection}.update(target, attrs)
    - db.{collection}.remove(target)

  // Example: return a single object with related models
  this.get('/contacts/:id', function(db, request) {
    var contactId = +request.params.id;

    return {
      contact: db.contacts.find(contactId),
      addresses: db.addresses.where({contact_id: contactId})
    };
  });

*/


/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
