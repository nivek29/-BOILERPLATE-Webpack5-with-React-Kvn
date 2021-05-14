
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
// eslint-disable-next-line no-undef
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );