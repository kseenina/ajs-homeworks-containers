const { Settings } = require('../src/settings.js');

test('Возвращает дефолтные настройки, если пользователь ничего не менял', () => {
    const setting = new Settings();
    const result = setting.settings;
    expect(result).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('Пользовательская настройка заменяет дефолтную', () => {
    const setting = new Settings();
    setting.userSettings.set('music', 'rock');
    const result = setting.settings;
    expect(result).toEqual(new Map([['theme', 'dark'], ['music', 'rock'], ['difficulty', 'easy']]));
});

test('Несколько пользовательских настроет заменяют дефолтные', () => {
    const setting = new Settings();
    setting.userSettings.set('theme', 'light');
    setting.userSettings.set('music', 'rock');
    setting.userSettings.set('difficulty', 'nightmare');
    const result = setting.settings;
    expect(result).toEqual(new Map([['theme', 'light'], ['music', 'rock'], ['difficulty', 'nightmare']]));
});