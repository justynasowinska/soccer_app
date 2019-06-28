import * as React from 'react';
import { shallow } from 'enzyme';

import { SoccerSlider } from '../SoccerSlider';

describe('SoccerSlider', () => {
    it('matches to the snapshot', () => {
        const component = shallow(
            <SoccerSlider
                currentTime={1434}
                totalTime={23454}
                value={1222}
                onValueChange={jest.fn()}
            />
        );

        expect(component).toMatchSnapshot();
    });
});