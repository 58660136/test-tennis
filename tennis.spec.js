
function TennisGame(){
  const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
  this.playerAScore = 0
  this.playerBScore = 0
  this.reset = () => {
      this.playerAScore = 0
      this.playerBScore = 0
  }
  this.playAGetScore = () =>{
      this.playerAScore++
  }
  this.echo = () => { // this.echo = function{ } (javascript verson 5)
      return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
  }
}
/*
test('try success test case',() => {
  expect(true).toBe(true)
})
*/
test('Echo "Love - Love" when game starts',() => {
  // Arrange
  let app = new TennisGame()

  // Act
  app.reset()
  let result = app.echo()

  // Assert
  expect(result).toBe('Love - Love')

})

test('Echo "Fifteen - Love" when player button[A] get first score',() => {
  // Arrange
  let app = new TennisGame()
  app.playAGetScore();
  
  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Fifteen - Love')

})
