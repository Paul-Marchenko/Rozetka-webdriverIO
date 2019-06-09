class Base {
    constructor(config, driver, timeoutsConfig = {implicit: 5000, pageLoad: 30000}, selfInit = true) {
        this.config = config;
        this.driver = driver;
        this.timeOutsConfig = timeoutsConfig;
        if (selfInit) {
            this.init()
        }
    }

    init() {
        this.driver.manage().setTimeouts(this.timeOutsConfig)
    }
}

module.exports = Base;