import React from 'react';
import { shallow } from 'enzyme';
import Title from '../src/components/title';

describe('<Title />', () => {
    it('renders the relevant title', () => {
      const title = 'Data / React Test';
      const titleComponent = shallow(<Title title={title} />);
      expect(titleComponent.find('h1').text()).toEqual(title);
    });
});
