import Mirage, {
  faker
} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() {
    return faker.name.firstName();
  },
  email() {
    return faker.internet.email();
  },
  gender : faker.list.cycle('Male', 'Female', 'Transgender'),
  sexuality : faker.list.cycle('Straight','Bisexual','Gay')
  ,
  userName() {
    return faker.internet.userName();
  },
  avatar() {
    return faker.internet.avatar();
  },
  password() {
    return faker.name.lastName();
  },
  age : faker.list.cycle(22,25,29,35,21,19,20,32,40)// .list method added by Mirage
});
