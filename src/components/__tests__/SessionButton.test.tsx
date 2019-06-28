import * as React from 'react';
import { shallow } from 'enzyme';

import { SessionButton } from '../SessionButton';

describe('SessionButton', () => {
    it('matches to the snapshot', () => {
        const component = shallow(
            <SessionButton
                isPaused={true}
                onPress={jest.fn()}
            />
        );

        expect(component).toMatchSnapshot();

        component.setProps({ isPaused: false });
        expect(component).toMatchSnapshot();
    });
});