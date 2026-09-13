import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Tech from "./Components/Tech-Stack/Tech";
import type { ITechType } from "./Type/TechType";
import Footer from "./Components/Footer";

// Loading State
const LoadingFallback = () => (
    <div className="py-24 flex flex-col items-center justify-center gap-4 bg-slate-50">
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
        <p className="text-slate-500 font-medium text-sm animate-pulse">
            Loading Dev Stack Data...
        </p>
    </div>
);

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
            <Suspense fallback={<LoadingFallback />}>
                <Tech techPromise={techPromise} />
            </Suspense>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default App;
