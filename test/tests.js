import { records } from '../records-data.js';
import './example.test.js';

import renderRecord from '../records-data.js';

test('renderRecord function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="record"><h1>Led Zeppelin II is a rock album recorded by Led Zeppelin.</h1><img src="./assets/led-zep.png"></div>'
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderRecord(records[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.OuterHTML, expected);
});