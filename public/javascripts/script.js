window.addEventListener('DOMContentLoaded', () => {
    // const config = {
    //     errorThresh: 0.05,
    //     iterations: 1500,
    //     hiddenLayers: [3],
    //     activation: 'sigmoid',
    //     log: true
    // }

    const btn = document.querySelector('button'),
          input = document.querySelector('.input')

    const phrases = [
        {
            'weather': {
                'example': 'какая погода в москве',
                'answer': ['Хорошая']
            },
            'hello': {
                'example': 'привет',
                'answer': ['Привет']
            },
            'do': {
                'example': 'как дела',
                'answer': ['Хорошо']
            },
        }
    ]

    const getVector =() => {
        const botDict = [];
        const userDict = input.value.toLowerCase().split(' ');
        const vector = []
        phrases.forEach(item => {
            for (let key in item) {
                botDict.push(item[key].example.split(' '))
            }
        })
        for (let i = 0; i < botDict.length; i++) {
            botDict[i].forEach(bot => {
                userDict.forEach(user => {
                    if (bot === user ) {
                        for (let j = 0; j < botDict[i].length; j++) {
                            botDict[i][j] = 1
                        }
                    }
                })
            })
        }
        console.log(botDict)
    }

    btn.addEventListener('click', getVector)
})