import DataStore from 'eirhor-data-store';

class Base {
    constructor() {
        this.dataStore = new DataStore();

        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            return this.init();
        }

        document.addEventListener('DOMContentLoaded', () => { this.init(); }, false);
    }

    init() {
        return false;
    }
}

export default Base;