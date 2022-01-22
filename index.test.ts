it('logs hello world', () => {
  jest.spyOn(console, 'log');
  require('./');
  expect(console.log).toHaveBeenCalledWith('hello world');
});
