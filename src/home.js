import img from '../assets/restaurant.jpeg';

function home(){
    const container = document.getElementById('content');
    const divClasses = ['heading', 'image', 'schedule', 'location'];
    
    divClasses.forEach(cls => {
        const newDiv = document.createElement('div');
        newDiv.classList.add(cls);
        container.appendChild(newDiv);
    });
    
    const heading = document.querySelector('.heading')
    const image = document.querySelector('.image')
    const schedule = document.querySelector('.schedule')
    const location = document.querySelector('.location')
    
    if (heading) heading.innerHTML = "<h1>TOP Restaurant</h1>"
    if (image) image.innerHTML = `<img src="${img}" alt="Restaurant Image">`
    if (schedule) schedule.innerHTML = `
        <h2>Schedule</h2>
        <p>Weekends: 8am - 8pm</p>
        <p>Weekdays: 10am - 8pm</p>`;
    if (location) location.innerHTML = `
        <h2>Location</h2>
        <p>123 Anywhere St., Blabla City</p>`
}

export default home;