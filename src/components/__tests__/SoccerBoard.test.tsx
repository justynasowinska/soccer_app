import * as React from 'react';
import { shallow } from 'enzyme';

import { SoccerBoard } from '../SoccerBoard';

describe('SoccerBoard', () => {
    it('matches to the snapshot', () => {
        const component = shallow(
            <SoccerBoard
                currentTime={1434}
            />
        );

        expect(component).toMatchSnapshot();
    });
});