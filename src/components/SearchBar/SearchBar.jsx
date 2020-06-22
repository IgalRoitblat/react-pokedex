import React, { Component } from "react";
import "./search-bar.scss";

class SearchBar extends Component {
    handleChange = (event) => {
        this.props.onSearch(event.target.value);
    }

    render() {
        const { placeholder } = this.props;

        return (
            <div className="search-bar">
                <input
                    type="search"
                    onChange={this.handleChange}
                    placeholder={placeholder}
                />
            </div>
        );
    }
}

export default SearchBar;
