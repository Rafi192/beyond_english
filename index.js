// console.log("i am jS")

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

const loadLevelWord =(id)=>{
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url)
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then(data=>{

        removeActive()
        const clickedBtn = document.getElementById(`lesson-btn-${id}`)
        // console.log(clickedBtn)
        clickedBtn.classList.add("active")
        displayLevelWord(data.data);
        
    })

}



const displayLevelWord = (level)=>{
    // get the container
    const levelContainer = document.getElementById('word-container')
    levelContainer.innerHTML = "";

    if(level.length === 0){
        // alert("wor word detected");
        levelContainer.innerHTML = `
        <div class="text-center bg-gray-100 col-span-full ">
        <img class="mx-auto" src ="./assets/alert-error.png" />
        <p class="text-xl font-medium text-gray-400">
          এখনো কোন Lesson add kora hoyni!
        </p>
        <h2 class="font-bold text-4xl">Lesson er jonno wait korun।</h2>
      </div>
        `;
        return;
    }

    level.forEach(word => {
        const wordCard = document.createElement('div');
        wordCard.innerHTML = `
         <div id="card-container" class="bg-white text-center py-3 px-0">
        <h2>${word.word}</h2>
        <p>${word.meaning}</p>
        <p>${word.pronunciation}</p>


        <div class= "flex justify-between">
         <button class="btn">
<i class="fa-solid fa-circle-info"></i>
         </button>
          
         <button class="btn">
         <i class="fa-solid fa-volume-high"></i>

         </button>

        </div>
      </div>
        
        `
        levelContainer.append(wordCard)

        
    });

    
}

const removeActive = ()=>{
    const lessonButtons = document.querySelectorAll(".lessonBtn");
    // console.log(lessonButtons);
    lessonButtons.forEach( (btn) => {
        btn.classList.remove("active");
        
    });
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
         <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lessonBtn">
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
// loadLevelWord();