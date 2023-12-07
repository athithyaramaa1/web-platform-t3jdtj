    // Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.

    console.log(document.getElementById('container'))

    // Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".
    
    const div = document.querySelector('#header');
    div.innerHTML = "These are the DOM Methods";
    
    
    // Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop
    const yay = document.getElementsByClassName('dom-methods')
    
    for(i=0; i < yay.length; i++){
      yay[i].style.color = 'red';
    }
    // Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop
    
    const wow = document.querySelectorAll('.dom-elements');
    
    for(i = 0; i < wow.length; i++){
      wow[i].style.fontSize = '20px';
    }
    
    // Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.
    
    const newdiv = document.createElement('div');
    newdiv.textContent = "Division";
    div.append(newdiv)
    
    // Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.
    
    newdiv.setAttribute('id', "main");
    console.log(newdiv.getAttribute('id'))
    
    // Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.
  
    const bruhh = document.getElementById('main');
    bruhh.innerHTML =  "This is a division"

    // Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.
    // Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.

    const xyz = document.getElementById('main');
    const zyx = document.createElement('p')
    zyx.innerHTML = "This is a paragraph tag"
    xyz.appendChild(zyx)

    // Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.
    
    const foot = document.querySelector(".footer")
    foot.classList.remove('footer')
    foot.classList.add('dom-method-footer')
    // Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.
    
    const color = document.querySelector('p')
    color.style.color = 'red'

  // Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.
  const remove = document.querySelector('.copyright')
  remove.removeAttribute('id')
  remove.remove();

