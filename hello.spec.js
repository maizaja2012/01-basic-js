const hello = require('./hello')

test('hello', () => {
  //Arrange
  let name = 'Ball'

  //Act
  let result = hello(name)

  //Assert
  expect(result).toBe('Hello Ball')
})
