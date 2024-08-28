setInterval(time,1000);

function time(){
    let time = new Date();

    let hr = time.getHours();

    let min = time.getMinutes();

    let sec = time.getSeconds();

    let meridiem = "AM";

    if(hr >=12)
    {
        if(hr > 12){
            hr = hr-12;

            meridiem = "PM"
        }
    }    
    else if(hr == 0 )
    {
                hr = 12;

                meridiem = "AM"
    }
    
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hr +" : "+ min + " : "+ sec +" "+meridiem ;

    document.getElementById("Myclock").innerHTML= currentTime;
}

time();