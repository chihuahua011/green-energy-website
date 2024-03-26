import React, { useEffect, useRef } from "react";
import "./panel.scss";

function Panel({ header, content }) {
    const panelRef = useRef(null)
    
    useEffect(() => {
        const panel = panelRef.current;
        const handleClick = (e) => {
            console.log(e.target);

            panel.classList.toggle("closed");
        }

        panel.addEventListener("click", handleClick);

        //!cleanup function after component unmounts! crucial for complex applications for memory management
        return () => {
            panel.removeEventListener("click", handleClick);
        }
    }, [])

    return (
        <>
            <div ref={panelRef} className="panel-cont closed">
                <div className="flex panel-header px-3 justify-between">
                    {header}
                    <span className="panel-icon"></span>
                </div>
                <div className="panel-content px-3 py-1">{content}</div>
            </div>
        </>
    );
}

export default Panel;
