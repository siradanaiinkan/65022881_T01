let randNum = Math.floor(Math.random() * 101);
total=0;

function GN() {
    const Guess_Number = document.getElementById('G_N').value; 
        if (Guess_Number == randNum) {
        alert("ถูกต้อง ค่าที่ถูกคือ:" + randNum + "คุณทายไปทั้งหมด" + total+"ครั้ง")
    }
    else if (Guess_Number < randNum) {
        alert("น้อยกว่า")
    }
    else if (Guess_Number > randNum) {
        alert("มากกว่า")
    }
    else{ 
        alert("ไม่มีค่า")
        
    
    } 
    total += 1
}
