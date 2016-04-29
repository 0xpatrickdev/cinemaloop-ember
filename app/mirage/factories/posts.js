import Mirage, {
  faker
} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title() {
    return faker.hacker.phrase();
  },
  text() {
    return faker.lorem.sentence();
  }

});
