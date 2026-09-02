class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);

        this.userSettings = new Map();
    }

    get settings() {
        const resultSettings = new Map(this.defaultSettings);
        for (const [key, value] of this.userSettings) {
            resultSettings.set(key, value);
        }
        return resultSettings;
    }
}

module.exports = { Settings };