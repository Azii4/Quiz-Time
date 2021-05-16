import axios from "axios"

const token = (async () => {
    let response = await axios.get('https://opentdb.com/api_token.php?command=request')
    return response.data.token
})()

const categories = (async () => {
    let response = await axios.get('https://opentdb.com/api_category.php')
    let list = {}
    response.data.trivia_categories.forEach(item => {
        list = {...list, [item.name]:item.id}
    })
    return list
})()

export function getQuestions(amount, category) {
    return axios.get('https://opentdb.com/api.php', {
        params: {
            amount: amount,
            category: category,
            difficulty: 'medium',
            type: 'multiple'
        }
    })
}