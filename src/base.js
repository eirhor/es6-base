class Base {
    constructor() {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            return this.init();
        }

        document.addEventListener('DOMContentLoaded', () => { this.init(); }, false);
    }

    init() {
        console.warn('Override the init function when extending this class.') // eslint-disable-line
    }
}

export default Base;