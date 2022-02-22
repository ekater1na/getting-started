import {ConvertToSpacesPipe} from "./convert-to-spaces.pipe";

describe('ConvertToSpacesPipe', () => {
  it('should display space instead of dash', () => {
    let pipe = new ConvertToSpacesPipe();
    let value = 'p-12'

    let val = pipe.transform(value, '-');

    expect(val).toEqual('p 12');
  })

})
