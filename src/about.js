function about() {
    const container = document.getElementById('content');
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');
    container.appendChild(aboutDiv);

    const aboutContent = document.querySelector('.about');
    if (aboutContent) aboutContent.innerHTML = `
    <h2>About Us</h2>
    <p>
      Welcome to <strong>TOP Restaurant</strong> — where flavor meets comfort. 
      Since 2010, we’ve been serving freshly made dishes that bring people together 
      and celebrate the joy of good food.
    </p>
    <p>
      Our chefs blend traditional recipes with a modern twist, using the finest 
      locally sourced ingredients to create meals you’ll never forget.
    </p>

    <h2>Contact Us</h2>
    <ul class="contact">
      <li>📞 (02) 9123-4567</li>
      <li>📧 hello@toprestaurant.ph</li>
    </ul>
    `;
}

export default about;