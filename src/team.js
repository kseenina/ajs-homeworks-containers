class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if(character) {
            if (this.members.has(character)) {
                throw new Error ('Этот персонаж уже в команде!');
            }
            this.members.add(character);
        }
    }

    addAll(...characters) {
        for (const character of characters) {
            if(!character) {
                continue;
            }
            if (!this.members.has(character)) {
                this.members.add(character)
            }
        }
    }

    toArray() {
        return [...this.members];
    }
}

module.exports = { Team }