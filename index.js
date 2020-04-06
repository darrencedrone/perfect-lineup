const sumAll = (arr) => {
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }

  return total
}

const countPosition = (lineup, position) => lineup.filter((lineup) => lineup.position === position).length

const maxGameIds = (arr) => {
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2] && arr[i] === arr[i - 3]) {
      return false
    }
  }

  return true
}

const maxTeamIds = (arr) => {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2]) {
      return false
    }
  }

  return true
}

const validateLineup = (lineup) => {
  const salaries = lineup.map((lineup) => lineup.salary)
  const gameIds = lineup.map((lineup) => lineup.gameId).sort()
  const teamIds = lineup.map((lineup) => lineup.teamId).sort()
  const ofCount = countPosition(lineup, 'OF')

  const uniquePositions = ['P', 'C', '1B', '2B', '3B', 'SS'].every(pos => countPosition(lineup, pos) === 1)

  return sumAll(salaries) <= 45000 && maxGameIds(gameIds) && maxTeamIds(teamIds) && ofCount === 3 && uniquePositions
}

module.exports = validateLineup
