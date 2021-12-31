const DailyInformations = document.getElementById('DailyInformations')
const WeeklyInformations = document.getElementById('WeeklyInformations')
const MonthlyInformations = document.getElementById('MonthlyInformations')
const test1 = document.getElementsByName('daily')
const test2 = document.getElementsByName('weekly')
const test3 = document.getElementsByName('monthly')


const cardChange = (e, f, g) => {
    for (let i = 0; i < e.length; i++) {
        e[i].classList.remove('hidden')
    }
    for (let i = 0; i < f.length; i++) {
        f[i].classList.add('hidden')
    }
    for (let i = 0; i < g.length; i++) {
        g[i].classList.add('hidden')
    }
}


DailyInformations.addEventListener('click', function() {
    cardChange(test1, test2, test3)
})

WeeklyInformations.addEventListener('click', function() {
    cardChange(test2, test1, test3)
})
MonthlyInformations.addEventListener('click', function() {
    cardChange(test3, test1, test2)
})


/////////////////////////////////////////////////////////////////////
/////////////////  po najechaniu na element myszką zmienia tło
const testMouseOver = document.getElementsByClassName('dots')
for (let i = 0; i < testMouseOver.length; i++) {
    testMouseOver[i].onmouseover = e => {
        e.stopPropagation()   // usuwa hierarchie - focus tylko na tym elemencie
        testMouseOver[i].style.backgroundColor = "hsl(235, 46%, 20%)"
    }
    testMouseOver[i].onmouseout = e => {
        testMouseOver[i].style.backgroundColor = "hsl(235, 46%, 20%)"
    }
}

