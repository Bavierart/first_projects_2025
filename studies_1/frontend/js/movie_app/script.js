const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={APIKEY}&page=1"
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key={APIKEY}&query="

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

returnMovies(APILINK)

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results)
        data.results.forEach(element => {
            const div_card = document.createElement("div")
            div_card.setAttribute("class", "movie-card")

            const div_row = document.createElement("div")
            div_row.setAttribute("class", "row")

            const div_column = document.createElement("div")
            div_column.setAttribute("class", "column")

            const image = document.createElement("img")
            image.setAttribute("class", "thumbnail")
            image.setAttribute("id", "image")
            image.src = IMGPATH + element.poster_path

            const title = document.createElement("h3")
            title.setAttribute("id", "title")
            title.innerHTML = element.title

            div_card.appendChild(image)
            div_card.appendChild(title)
            div_column.appendChild(div_card)
            div_row.appendChild(div_column)

            main.appendChild(div_row)
        })
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main.innerHTML = ''

    const searchItem = search.value

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem)
        search.value = ""
    }
})