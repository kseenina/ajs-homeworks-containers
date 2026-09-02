const { ErrorRepository } = require('../src/error-repository.js');

test('Возвращает текст ошибки по ее коду', () => {
    const repo = new ErrorRepository();
    repo.errors.set(404, 'Not Found');
    const result = repo.translate(404);
    expect(result).toBe('Not Found');
});

test('Возвращает строку "Unknown error" в случае отсутсвия в репозитории искомого кода', () => {
    const repo = new ErrorRepository();
    const result = repo.translate(404);
    expect(result).toBe('Unknown error');
});