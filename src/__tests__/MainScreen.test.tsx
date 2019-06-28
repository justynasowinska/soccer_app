import * as React from 'react';
import { shallow } from 'enzyme';

import { MainScreen } from '../MainScreen';

describe('MainScreen', () => {
    it('matches to the snapshot', () => {
        const component = shallow(
            <MainScreen />
        );

        expect(component).toMatchSnapshot();
    });

    // TODO: Add more tests
});