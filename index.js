function arrangeShiritori(words) {
  const result = [words[0]]

  words.forEach(currentWord => {
    let wordsWithoutCurrentWord = words.filter(word => word !== currentWord && !result.includes(word))

    result.forEach(resultWord => {
      const resultWordSyllabel = getSyllabel(resultWord)

      for (let index = resultWordSyllabel.length; index >= 2; index--) {
        const matchWord = wordsWithoutCurrentWord.find(word => {
          return word.slice(0, index) === resultWordSyllabel.slice(index * -1)
        })

        if (matchWord) {
          result.push(matchWord)
        }
      }
    })
  })

  return result
}

function getSyllabel(word) {
  if (word.length >= 4) {
    return word.slice((word.length - 2) * -1)
  } else {
    return word.slice(-2)
  }
}

console.log(arrangeShiritori(['make', 'nelson', 'take', 'kernel', 'sonata']))
console.log(
  arrangeShiritori([
    'some',
    'onair',
    'antler',
    'education',
    'mean',
    'certain',
    'wicked',
    'lerwick',
    'necklace',
    'airplane'
  ])
)
