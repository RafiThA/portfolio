import { useState } from "react";
import Loading from "../components/Loading";

export default function Dev() {

    const [ready, setReady] = useState(false);

    setTimeout(() => {
        console.log("Dev page loaded");
        setReady(true);
    }, 8000);

    return (<Loading ready={ready} onFinished={() => console.log("Dev page loading finished")} />);
}