
     let days =document.getElementById('days')   
     let hours =document.getElementById('hours')   
     let minutes =document.getElementById('minutes')   
     let seconds =document.getElementById('seconds')   

     const currentYear = new Date().getFullYear()
     const currentYearTime = new Date("Jan 01 ${currentYear + 1} 00:00:00")

     function updateCountdown(){
        const currentTime = new Date()
        const diff = newYearTime - currentTime

        const d =Math.floor(diff / 1000 / 60 /60 /24)
        const h =Math.floor(diff / 1000 / 60 /60) % 24
        const m =Math.floor(diff / 1000 / 60) %60
        const s =Math.floor(diff / 1000 )%60
     
        
            days.innerHTML = d;
            hours.innerHTML = h < 10 ?'0'+ h: h;
            minutes.innerHTML = m < 10 ?'0'+ h: h;
            seconds.innerHTML = s < 10 ?'0'+ s: s;
        }
        setInterval(updateCountdown,1000)
