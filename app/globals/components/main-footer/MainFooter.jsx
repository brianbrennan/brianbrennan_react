import React from 'react';
import { Link } from 'react-router-dom';
import pageMap from '../../utils/page-map';

class MainFooter extends React.Component {
    render() {
        let listItems = Object.keys(pageMap).map((listItem) => {
            return (
                <li key="{listItem.name}">{listItem.name}</li>
            );
        });

        return (
            <footer className="main-footer diagonal-left-section bg-black">
                <div className="container">
                    <div className="row">
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

module.exports = MainFooter;