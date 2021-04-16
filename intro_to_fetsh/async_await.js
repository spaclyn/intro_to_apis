const baseURL = "https://ghibliapi.herokuapp.com"


const getFilms = () => {
    fetch(baseURL + "/films")
    .then(res => {
        console.log(res)
        return res.json()
    }) 
    .then(json => {
        console.log(json)
        let myArr =json.map(film =>{
            return{
                title: film.title,
                rt_score: Number(film.rt_score)
            }
        })
        myArr.sort((cur, prev) => prev.rt_score - cur.rt_score)
        displayResults(myArr)
    })
}

const getFilms = async () => {
        let res = await fetch (baseURL +"/films")
        console.log(res)

        let json = await res.json()
        console.log(json)

        let myArr = json.map (film => {
            return {
                title: film.title,
                rt_score: Number(film.rt_score)
            }
        })
        myArr.sort((cur, prev) => prev.rt_score - cur.rt_score)
        displayResults(myArr)
}