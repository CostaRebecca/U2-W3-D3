fetch("https://striveschool-api.herokuapp.com/books")

    .then(responseObj => responseObj.json())

    .then(books => {
        const grid = document.getElementById("booksContainer")
        grid.innerHTML = ""

        for (let i = 0; i < books.length; i++) {
            
            if (i % 4 === 0) {
                const row = document.createElement("div")
                row.className = "row"
                grid.appendChild(row)
            }

            
            const col = document.createElement("div")
            col.className = "col-md-3"
            col.innerHTML = `
             <div class="card mx-2 my-2">
                <img src="${books[i].img}" class="card-img-top" alt="Copertina">
                <div class="card-body">
                    <h5 class="card-title">${books[i].title}</h5>
                    <p class="card-text">Price: ${books[i].price}</p>
                    <button type="button" class="btn btn-primary" id="btn">Delete</button>
                </div>
            </div>
            `
            
          /* const discard = col.querySelector("#btn")
           discard.onclick = () => {
            col.remove()
           }  */

           
            const currentRow = grid.lastChild
            currentRow.appendChild(col)
        }
    })
    .catch(error => console.log("CATCH", error))

   
