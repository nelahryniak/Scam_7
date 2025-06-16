  appId: "1:687137609047:web:1b186a62144c3e9b969a12",
    databaseURL:"https://scam-2b8b2-default-rtdb.europe-west1.firebasedatabase.app/"
};

  firebase.initializeApp(firebaseConfig);
 database = firebase.database();
}

function draw() {
  background(255);
  database.ref("mojaLiczba").on("value", function(snapshot) {
    liczba = snapshot.val();
    print("Otrzymano: " + liczba);
  });
    database.ref("mojaLiczba2").on("value", function(snapshot) {
    liczba2 = snapshot.val();
    print("Otrzymano: " + liczba2);
  });

  fill(0, 0); 
  stroke(0); 

  let rectWidth = 30;
  let rectHeight = 50;
  let spacing = 10; 
  let startX = (windowWidth - (11 * rectWidth + 10 * spacing)) / 2; 

  



  let centerX = windowWidth / 2
  let centerY = windowHeight / 2

  image(img,centerX,centerY+25,200,312);
  

  
  textSize(40);
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text('Czy to twój pesel?', windowWidth / 2, windowHeight / 5);
text(String(liczba)+String(liczba2),width/2,height/3);

}
