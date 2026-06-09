import img1 from '../assets/444660163245946499.jpg'
import img2 from '../assets/download (12).jpg'
import img3 from '../assets/download (14).jpg'

function Banner() {
    return (
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="Fashion Collection" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>FASHION COLLECTION 2026</h3>
                        <p>discover the latest fashion trends for 2026</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="Summer Sale" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>SUMMER SALE UP TO 50%</h3>
                        <p>Enjoy special discounts on selected products</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="New Arrivals" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>NEW ARRIVALS</h3>
                        <p>Check out our latest additions</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner