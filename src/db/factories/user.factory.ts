import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../user/user.entity';

export default setSeederFactory(User, (faker) => {
  const user = new User();
  user.fullName = faker.name.fullName();
  user.email = faker.internet.email(user.fullName);
  user.password = faker.internet.password();
  user.phone = faker.phone.number();
  user.idNumber = faker.random.numeric(10);

  return user;
});
