class Toggler {
    constructor() {
        this.init();
    }

    init() {
        this.itemsToToggle = document.querySelectorAll('[data-toggle]');

        this.addEvents(this.itemsToToggle);
    }

    addEvents(items) {
        items.forEach(item => {
            item.addEventListener('click', () => {
                const ids = item.dataset.toggle.split(" ");
                ids.forEach(id => {
                    const el = document.getElementById(id);
                    const classes = el.dataset.toggler.split(" ")
                    classes.forEach( className => {
                        el.classList.toggle(className)
                    })
                })
            })
        });
    }
}

export default Toggler;
