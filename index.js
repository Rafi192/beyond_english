console.log("i am jS")

const url = "https://openapi.programming-hero.com/api/levels/all"

const loadLessons = ()=>{

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        // console.log(data.data)
        displayLesson(data.data)
    })
}

const displayLesson = (lessons)=>{
    // 1.get the container
    const levelDiv = document.getElementById('level-container')
    levelDiv.innerHTML ="";

    // 2. get into every data
    for(let lesson of lessons){
         // 3. create element
         const btnDiv = document.createElement('div');
         btnDiv.innerHTML = `
         <button class="btn btn-outline btn-primary">
         
         <i class="fa-solid fa-book-open"></i>
         Lesson - ${lesson.level_no}

         </button>
         `;

          // 4. append into container
          // multiple items at once
          levelDiv.append(btnDiv)
// levelDiv.append(btnDiv, "Extra note!"); // ✅ Works
// levelDiv.appendChild(btnDiv, "Extra note!"); // ❌ Error


    }

   


    // console.log(lessons)

}

loadLessons()
// loadLessons()