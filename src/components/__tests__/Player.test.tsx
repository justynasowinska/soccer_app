import * as React from 'react';
import { shallow } from 'enzyme';

import { Player } from '../Player';

describe('Player', () => {
    it('matches to the snapshot', () => {
        const component = shallow(
            <Player
                id={0}
                x={0.434}
                y={0.334}
            />
        );

        expect(component).toMatchSnapshot();
    });
});