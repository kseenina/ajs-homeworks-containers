const { Team } = require('../src/team.js')

test('Успешное добавление персонажа методом add', () => {
    const team = new Team();
    const character = { name: 'Archer', level: 1};
    team.add(character);
    expect(team.members.has(character)).toBe(true); 
});

test('add выбрасывает ошибку при попытке дублирования', () => {
    const team = new Team();
    const character = { name: 'Archer', level: 1};
    team.add(character);
    expect(() => team.add(character)).toThrow();
});

test('addAll успешно добавляет нескольких персонажей', () => {
    const team = new Team();
    const archer = { name: 'Archer', level: 1 };
    const wizard = { name: 'Wizard', level: 2 };
    team.addAll(archer, wizard);
    expect(team.members.size).toBe(2);
});

test('addAll игнорирует дубли', () => {
    const team = new Team();
    const archer = { name: 'Archer', level: 1 };
    const wizard = { name: 'Wizard', level: 2 };
    team.addAll(archer, archer, wizard);
    expect(team.members.size).toBe(2);
});

test('addAll не выбрасывает ошибку', () => {
    const team = new Team();
    const archer = { name: 'Archer', level: 1 };
    const wizard = { name: 'Wizard', level: 2 };
    expect(() => team.addAll(archer, archer, wizard)).not.toThrow();
});

test('addAll не добавляет null и undefined', () => {
    const team = new Team();
    team.addAll(null, undefined);
    expect(team.members.size).toBe(0);
});

test('add не добавляет ничего, если не было передано ни одного аргумента', () => {
    const team = new Team();
    team.add();
    expect(team.members.size).toBe(0);
});

test('addAll не добавляет ничего, если не было передано ни одного аргумента', () => {
    const team = new Team();
    team.addAll();
    expect(team.members.size).toBe(0);
});

test('toArray возвращает пустой массив, если команда не содержит ни одного персонажа', () => {
    const team = new Team();
    expect(team.toArray()).toEqual([]);
});

test('toArray возвращает массив с персонажами', () => {
    const team = new Team();
    const character = { name: 'Archer', level: 1};
    team.add(character);
    const arr = team.toArray();
    expect(arr).toContain(character);
});