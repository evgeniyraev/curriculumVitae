import React from "react";
import './index.scss';

export default function Tooltip({tip, children}) {
    return (
        <span className="Tooltip">
            <span >{ children }</span>
            <div className="info">
                { tip }
            </div>
        </span>
    )
}
