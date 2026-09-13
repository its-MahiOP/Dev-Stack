import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Tech from "./Components/Tech-Stack/Tech";
import type { ITechType } from "./Type/TechType";

const techFetch = async (): Promise<ITechType[]> => {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
};

function App() {
    const techPromise = techFetch();
    return (
        <>
            <Nav />
            <Banner />
            <Suspense fallback={<p>Loading.....</p>}>
                <Tech techPromise={techPromise} />
            </Suspense>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default App;
