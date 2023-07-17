import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <div className="siDesc">
                <h1 className="siTitle">AbC</h1>
                <span className="siDistance">200m</span>
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
                    <span className="siPrice">Rs4000</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
