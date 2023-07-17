import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/287476409.webp?k=566be1be0d8e73c488de449e460bb7d9abdb19c84dfa30513c32dc6a9c764272&o="
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Hyatt palace Jaipur</h1>
                <span className="siDistance">500m from center</span>
                <span className="siSubtitle">Double Deluxe Room</span>
                <span className="siFeatures">Multiple Bed Types</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>9.4</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">Rs5000</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
