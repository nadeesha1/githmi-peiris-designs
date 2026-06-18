// Global Mock Database array objects for Category Tab Photo Gallery Launches
const categoryGalleries = {
    residential: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800",
        "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=800",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800"
    ],
    hotels: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800"
    ],
    restaurant: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800"
    ],
    commercial: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800"
    ]
};

// 1. Dynamic Open New Tab Interactive Photo Gallery Functional Logic
function openGallery(categoryKey) {
    const images = categoryGalleries[categoryKey] || [];
    
    // Capitalize Title Text
    const titleDisplay = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1) + " Space Gallery";

    // Generate HTML code content stream dynamically into the new targeted view frame window tab
    const galleryHtmlContent = `
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <title>${titleDisplay} | Githmi Peiris Designs Portfolio</title>
            <style>
                body {
                    margin: 0;
                    padding: 40px;
                    background-color: #1C1C1C;
                    font-family: 'Montserrat', sans-serif;
                    color: #FFFFFF;
                    text-align: center;
                }
                h1 {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 3rem;
                    color: #D4AF37;
                    margin-bottom: 10px;
                    font-weight: 400;
                }
                p { font-size: 0.9rem; opacity: 0.6; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px; }
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 25px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .gallery-item {
                    width: 100%;
                    height: 450px;
                    object-fit: cover;
                    border: 1px solid rgba(255,255,255,0.1);
                    transition: transform 0.4s ease;
                }
                .gallery-item:hover { transform: scale(1.02); }
            </style>
            <link href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:wght@300&display=swap' rel='stylesheet'>
        </head>
        <body>
            <h1>${titleDisplay} Masterspaces</h1>
            <p>Githmi Peiris Designs &bull; Architectural Vision Portfolio</p>
            <div class='gallery-grid'>
                ${images.map(imgUrl => `<img src='${imgUrl}' class='gallery-item' alt='Interior Layout Project View'>`).join('')}
            </div>
        </body>
        </html>
    `;

    // Open blank tab asset frame and dump document stream
    const newTabWindow = window.open();
    newTabWindow.document.open();
    newTabWindow.document.write(galleryHtmlContent);
    newTabWindow.document.close();
}

// 2. Client Reviews Slideshow Interactive Functional Logic
let dynamicCurrentSlideIndex = 0;
const feedbackSlidesCollection = document.querySelectorAll('.feedback-slide');

function showSlide(index) {
    if (index >= feedbackSlidesCollection.length) { dynamicCurrentSlideIndex = 0; }
    else if (index < 0) { dynamicCurrentSlideIndex = feedbackSlidesCollection.length - 1; }
    else { dynamicCurrentSlideIndex = index; }

    feedbackSlidesCollection.forEach(slide => slide.classList.remove('active'));
    feedbackSlidesCollection[dynamicCurrentSlideIndex].classList.add('active');
}

function moveSlide(directionSteps) {
    showSlide(dynamicCurrentSlideIndex + directionSteps);
}

// Auto transition slideshow frame interval logic track loop
setInterval(() => {
    moveSlide(1);
}, 8000);

// 3. Mobile Navigation Interactive Menu Trigger toggle controller
const mobileMenuButton = document.getElementById('mobile-menu');
const navLinksMenuArea = document.querySelector('.nav-menu');

mobileMenuButton.addEventListener('click', () => {
    navLinksMenuArea.classList.toggle('active');
});

// Close Mobile Menu automatically upon targeting item anchors
document.querySelectorAll('.nav-menu a').forEach(linkItem => {
    linkItem.addEventListener('click', () => {
        navLinksMenuArea.classList.remove('active');
    });
});

// 4. Form Submission Intercept Handler Feedback
function handleInquiry(event) {
    event.preventDefault();
    const clientNameInput = document.getElementById('name').value;
    alert(`Thank you ${clientNameInput}! Your design inquiry has been submitted successfully to Githmi Peiris Designs.`);
    document.getElementById('inquiryForm').reset();
}