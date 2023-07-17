import {
    faBed,
    faCalendarDays,
    faSnowflake,
    faCarSide,
    faPerson,
    faPlaneUp,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]:
                    operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };

    return (
        <div className="header">
            <div
                className={
                    type === "list"
                        ? "headerContainer listMode"
                        : "headerContainer"
                }
            >
                <div className="headerList">
                    <ul>
                        <div className="headerListItem active">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faBed} /> &nbsp;Stays
                            </li>
                        </div>
                        <div className="headerListItem ">
                            <li>
                                <FontAwesomeIcon icon={faPlaneUp} />
                                &nbsp; Flights
                            </li>
                        </div>
                        <div className="headerListItem ">
                            <li>
                                <FontAwesomeIcon icon={faPlaneUp} />
                                &nbsp; Flight+Hotel
                            </li>
                        </div>
                        <div className="headerListItem ">
                            <li>
                                <FontAwesomeIcon icon={faCarSide} />
                                &nbsp;Car rentals
                            </li>
                        </div>
                        <div className="headerListItem">
                            <li>
                                <FontAwesomeIcon icon={faSnowflake} />
                                &nbsp;Attractions
                            </li>
                        </div>
                        <div className="headerListItem">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faTaxi} />
                                &nbsp;Airport taxis
                            </li>
                        </div>
                    </ul>
                </div>

                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">Find your next stay</h1>
                        <p className="headerDesc">
                            Search deals on hotels, homes, and much more...
                        </p>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faBed}
                                    className="headerIcon"
                                />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className="headerIcon"
                                />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`Check-in Date - Check-out Date`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDate([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faPerson}
                                    className="headerIcon"
                                />
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className="headerSearchText"
                                >{`${options.adult} adults · ${options.children} children · ${options.room} room`}</span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Adult
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={
                                                        options.adult <= 1
                                                    }
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "adult",
                                                            "d"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.adult}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "adult",
                                                            "i"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Children
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={
                                                        options.children <= 0
                                                    }
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "children",
                                                            "d"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.children}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "children",
                                                            "i"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Room
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "room",
                                                            "d"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.room}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "room",
                                                            "i"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <button
                                    className="headerBtn"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
