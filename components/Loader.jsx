"use client";

import {TbLoader} from "react-icons/tb";

export default function Loader() {
    return (
        <div className="loader-container">
            <TbLoader className={"spinner"} />
        </div>
    );
}
