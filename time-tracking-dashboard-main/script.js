const DailyInformations = document.getElementById('DailyInformations')
const WeeklyInformations = document.getElementById('WeeklyInformations')
const MonthlyInformations = document.getElementById('MonthlyInformations')
const dailyCards = document.getElementsByName('daily')
const weeklyCards = document.getElementsByName('weekly')
const monthlyCards = document.getElementsByName('monthly')

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
    cardChange(dailyCards, weeklyCards, monthlyCards)
})
WeeklyInformations.addEventListener('click', function() {
    cardChange(weeklyCards, dailyCards, monthlyCards)
})
MonthlyInformations.addEventListener('click', function() {
    cardChange(monthlyCards, dailyCards, weeklyCards)
})
const testMouseOver = document.getElementsByClassName('dots')
for (let i = 0; i < testMouseOver.length; i++) {
    testMouseOver[i].onmouseover = e => {
        e.stopPropagation()  
        testMouseOver[i].style.backgroundColor = "hsl(235, 46%, 20%)"
    }
    testMouseOver[i].onmouseout = e => {
        testMouseOver[i].style.backgroundColor = "hsl(235, 46%, 20%)"
    }
}
