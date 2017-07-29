import { expect } from 'chai';
import Base from '../index.js';
import DataStore from 'eirhor-data-store';
const jsdom = require('jsdom-global');

describe('given an instance of Base', () => {
    jsdom();
    let cl;
    before(() => {
        cl = new Base();
    });
    describe('when I check the type of the dataStore property', () => {
        it('it should be of type DataStore', () => {
            expect(checkDsType(cl.dataStore)).to.be.equal(true);
        });
    });
    describe('when I run the init method', () => {
        it('it should return false, since it\'s not overridden', () => {
            expect(cl.init()).to.be.equal(false);
        })
    })
})

function checkDsType(ds)  {
    if (ds instanceof DataStore) {
        return true;
    }

    return false;
}