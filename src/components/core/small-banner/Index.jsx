import "./smallBanner.css";


const SmallBanner = ({bannerHeading, bannerText}) => {
    return(
        <>
            <div className="small-banner">
                <div className="container column-direction">
                    <h1>{bannerHeading}</h1>
                    <p>{bannerText}</p>
                    <form class="search-form">
                        <input type="text" placeholder="Search For An Event" />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SmallBanner