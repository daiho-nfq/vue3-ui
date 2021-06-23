export default {
    data: () => ({
        scrollPosition: 0,
    }),
    methods: {
        onClosingPopup() {
            document.body.classList.remove("no-scroll");
            window.scroll({
                top: this.scrollPosition,
                left: 0,
            });
        },
        onOpeningPopup() {
            this.scrollPosition = window.pageYOffset;
            document.body.classList.add("no-scroll");
        },
    },
};
