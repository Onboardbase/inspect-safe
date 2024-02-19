import { makeDefaultHeadersObj } from '../helpers/header-factory';
import  NudgeerSafe from '../helpers/nudgeer-safe';


describe('NudgeerSafe.nuxt', () => {  
  it('should return default headers if no config is set', () => {
    const result = new NudgeerSafe().nuxt();
    expect(result).toEqual(makeDefaultHeadersObj());
  });
});

describe('NudgeerSafe.astro', () => {  
  it('should return default headers if no config is set', () => {
    const result = new NudgeerSafe().nuxt();
    expect(result).toEqual(makeDefaultHeadersObj());
  });
});
