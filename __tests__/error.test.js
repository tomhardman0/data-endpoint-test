import React from 'react';
import { shallow } from 'enzyme';
import ErrorMsg from '../src/components/error';

describe('<ErrorMsg />', () => {
    it('has the correct class', () => {
      const expectedClass = 'plot-cont__error';
      const errorMsg = shallow(<ErrorMsg />);
      expect(errorMsg.find('h2').hasClass(expectedClass)).toBeDefined();
    });
});
