import { Heading, Text } from '../Elements/Text';
import Button from '../Elements/Button';

const Resistance = () => {
  return (
    <div className="flex flex-col text-center w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
      <div className="space-y-1">
        <Heading>Login dulu bre</Heading>
        <Text>Sebelum memulai permainan</Text>
      </div>
      <Button link={'/login'}>Login</Button>
    </div>
  );
};

export default Resistance;
