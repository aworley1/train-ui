// __tests__/fetch.test.js
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Train from "../Train";

test('loads and displays properties', async () => {
    const {getByTestId} = render(
        <Train
            scheduledTime={'09:00'}
            expectedTime={'09:30'}
            status={'STATUS'}
        />
    )

    expect(getByTestId('scheduled-time')).toHaveTextContent('09:00');
    expect(getByTestId('expected-time')).toHaveTextContent('09:30');
    expect(getByTestId('status')).toHaveTextContent('STATUS');
});