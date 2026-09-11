import { use } from "react";
import type { ITechType } from "../../Type/TechType";

interface TechProps {
    techPromise: Promise<ITechType[]>;
}

const Tech = ({ techPromise }: TechProps) => {
    const tech = use(techPromise);
    console.log(tech);
    return <div></div>;
};

export default Tech;
