import './../../App.css'

const Header = () => {
    return (
        <div className='header'>
            <div>M o v i e  B o o m</div>
            <div className='logo'> <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.6287 18.5568L41.4677 30.7424L55.1097 32.272L42.5108 36.8418L51.5584 47.3812L38.902 41.6584L38.0551 55.0337L32.7551 42.3706L22.5099 50.7468L27.6709 38.5612L14.0288 37.0316L26.6277 32.4617L17.5801 21.9224L30.2366 27.6452L31.0834 14.2699L36.3835 26.933L46.6287 18.5568Z" fill="white"/>
                <path d="M26.4884 18.0831L34.226 27.8969L47.3325 23.5635L39.0082 33.9622L46.7458 43.776L33.8634 40.389L25.539 50.7876L25.9016 38.2956L13.0193 34.9085L26.1258 30.5751L26.4884 18.0831Z" fill="white"/>
            </svg>
            </div>
            <div className='search'>
                <input type="search" placeholder="Search..."/>
                <div className='user'>
                <img src={`http://promin.cv.ua/uploads/posts/2017-02/1487260797_16583951_172813146542834_1953993391335276544_n.jpg`} alt=''/>
                </div>
            </div>
        </div>
    )
}

export {Header};