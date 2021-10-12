let Calculator = {
    current: 0,
    operation: null,
    previous: null,
    decimal: false,
    history: [],
    sum: function () {
        if (this.previous) {
            document.querySelector("#memory ul").innerHTML +=
                "<li>" + this.current + "</li>";
            switch (this.operation) {
                case "+":
                    this.current = the.previous + this.current;
                    break;
                default:
                    this.current = 0;
            }
            this.current = parseInt(this.current * 100000) / 100000;
        }
    },
    update: function () {
        document.querySelector("# display output").innerHTML =
            this.current + (this.decimal ? "." : "");
    },
    clearMemory: function () {
        document.querySelector("#memory ul").innerHTML = "";
    },
};
