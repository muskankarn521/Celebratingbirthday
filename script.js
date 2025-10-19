/* ---------------- PAGE 1 ---------------- */
const balloon = document.getElementById('balloon');
if(balloon){
  balloon.addEventListener('click', () => {
    balloon.classList.add('pop');
    setTimeout(() => {
      window.location.href = 'index1.html';
    }, 500);
  });
}

/* ---------------- PAGE 2 ---------------- */
const nameElement = document.getElementById('name');
const openLink = document.getElementById('openLink');
if(nameElement){
  const nameText = "✨RAUNAK THAKUR✨"; // Replace with actual name
  let i = 0;

  function typeName(){
    if(i < nameText.length){
      nameElement.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeName, 150);
    } else {
      setTimeout(() => {
        openLink.style.opacity = 1;
      }, 2000);
    }
  }

  typeName();
}

if(openLink){
  openLink.addEventListener('click', () => {
    alert("You can link to the next page here."); 
    // Replace with: window.location.href = 'index2.html';
  });
}


