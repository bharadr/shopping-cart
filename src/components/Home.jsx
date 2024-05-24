import EcomImage from "../assets/ecom.jpg"


function HomeContents() {
    return (
        <div id="home-contents">
            <p className="home-title">Welcome to Retail Amazon!</p>
            <img id="home-image" src={EcomImage} alt="An Ecommerce Image"></img>
            <p className="home-title">Purchase Items from Our Online Market!</p>
        </div>
    )
}




export { HomeContents };