const container = document.querySelector('.container')
const heart = document.querySelector('.heart')
const notLiked = document.querySelector('.not-liked')
const liked = document.querySelector('.liked')

if (localStorage.getItem('isLiked') == 'true') {
    liked.style.display = 'block';
    notLiked.style.display = 'none'
}
liked.addEventListener('click', () => {
    liked.style.display = 'none';
    notLiked.style.display = 'block'
    localStorage.setItem('isLiked', 'false')
})

const handleLiked = (e) => {
    heart.classList.add('active')
    const bounder = container.getBoundingClientRect()
    const x = e.clientX - bounder.left;
    const y = e.clientY - bounder.top;
    console.log(x, y);
    heart.style.left = `${x - 20}px`;
    heart.style.top = `${y - 20}px`
    // update liked 
    liked.style.display = 'block';
    notLiked.style.display = 'none'
    setTimeout(() => {
        heart.classList.remove('active')
        const isLiked = localStorage.getItem('isLiked')
        localStorage.setItem('isLiked', 'true')
    }, 700);

}

container.addEventListener('dblclick', handleLiked)

container.addEventListener('touchstart', (e) => {
    const currentTime = new Date().getTime();
    const timeSinceLastTouch = currentTime - lastTouchTime;

    if (timeSinceLastTouch < 300 && timeSinceLastTouch > 0) {
        e.preventDefault();
        handleLiked(e);
        e.preventDefault(); 
    }

    lastTouchTime = currentTime;
});
