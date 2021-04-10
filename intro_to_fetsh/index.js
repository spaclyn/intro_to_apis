//console.log("Hello World")
let url ="https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

fetch(url)  // the fetch is a method is availabe to us in the broswer 
            // and we supply at least a url and it will kick off 
            // a "GET" request to that url .
    .then( res => res.json())  // .then() can be chained on a fetch to allow us to take the response and do something with it 
    .then(json => {  /// in this case i have used the json data to display in the console.
        console.log(json)
        console.log(json.title)  // these logs are unique to the json that we got back
        console.log(json.locations)  // and only work on this objects structure
        console.log(json.director)
    })

    /*
    BASIC FETCH USAGE

    fetch(<url>)
        .then(<cb to process the data>)
        .then(<cb to use the data>)
    */

        const baseURL = "https://ghibliapi.herokuapp.com"

        fetch(baseURL + "/films") // reaches out to the internet to get data 
        .then(res => res.json())  // returns on the json data.
        .then(json => {
            console.log(json);
            let myArr = json.map(film => {
                return {
                    title: film.title,
                    rt_score: Number(film.rt_score) || 0
                }
            }).sort((cur, prev) => prev.rt_score - cur.rt_score)

            //console.log(myArr)
            displayResults(myArr)
          }) 

//Display Results
function displayResults(films) {
    console.log("Hello from Display Results", films) //checks to prove i am passing my data
    let filmList = document.getElementById("film-list") // this is the first time we grab a dom element by id
    films.map(film =>{
        let filmLi = document.createElement('li')  // this is our first time making a new  tag from js
        filmLi.innerText = `${film.title } ${film.rt_score}`
        filmList.appendChild(filmLi)
    })
}

  