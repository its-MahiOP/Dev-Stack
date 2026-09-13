import { use, useState } from "react";
import type { ITechType } from "../../Type/TechType";

interface TechProps {
    techPromise: Promise<ITechType[]>;
}

const Tech = ({ techPromise }: TechProps) => {
    const technologies = use(techPromise);
    const [selectedStack, setSelectedStack] = useState<ITechType[]>([]);

    const handleAddToStack = (item: ITechType) => {
        const exists = selectedStack.some((tech) => tech.id === item.id);
        if (exists) {
            alert(`${item.name} is already in your stack!`);
            return;
        }
        setSelectedStack((prev) => [...prev, item]);
    };

    const handleRemoveFromStack = (id: string) => {
        setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearStack = () => {
        setSelectedStack([]);
    };

    return (
        <section className="py-12 bg-slate-50 min-h-screen" id="technologies">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-4xl font-extrabold text-slate-900">
                        Explore the{" "}
                        <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-slate-500 mt-2 text-base">
                        Pick one technology per category to build your ideal
                        stack.
                    </p>
                </div>

                {/* 3-Column Cards Grid + Right Sidebar */}
                <div className="grid grid-cols-4 gap-8 items-start">
                    {/* Left Side: 3-Column Technology Cards Grid */}
                    <div className="col-span-3 grid grid-cols-3 gap-6">
                        {technologies.map((item) => {
                            const isAdded = selectedStack.some(
                                (tech) => tech.id === item.id,
                            );

                            return (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                                >
                                    {/* Top Row: Icon + Badge */}
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 p-2 border border-slate-100">
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100">
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* Card Title & Description */}
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom Meta & Action Button */}
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-4 border-t border-slate-100">
                                            <span className="bg-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700">
                                                {item.category}
                                            </span>
                                            <span className="font-medium text-slate-600">
                                                {item.difficulty}
                                            </span>
                                            <span className="flex items-center gap-1 font-bold text-slate-800">
                                                <span className="text-amber-400">
                                                    ★
                                                </span>{" "}
                                                {item.rating}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() =>
                                                handleAddToStack(item)
                                            }
                                            disabled={isAdded}
                                            className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                                                isAdded
                                                    ? "bg-emerald-500 text-white cursor-not-allowed opacity-90"
                                                    : "bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
                                            }`}
                                        >
                                            {isAdded
                                                ? "✓ Added to Stack"
                                                : "Add to Stack"}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side: Your Stack Sidebar) */}
                    <div className="col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-xs sticky top-24">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900">
                                Your Stack
                            </h3>
                        </div>

                        <p className="text-xs text-slate-400 mb-6">
                            {selectedStack.length === 0
                                ? "No technologies selected yet."
                                : `${selectedStack.length} ${
                                      selectedStack.length === 1
                                          ? "Technology"
                                          : "Technologies"
                                  } Selected`}
                        </p>

                        {/* Stack Items List / Empty State */}
                        {selectedStack.length === 0 ? (
                            <div className="border-2 border-dashed border-slate-100 rounded-xl p-8 text-center">
                                <p className="text-slate-400 text-xs font-medium">
                                    Your stack is empty.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
                                {selectedStack.map((stackItem) => (
                                    <div
                                        key={stackItem.id}
                                        className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={stackItem.icon}
                                                alt={stackItem.name}
                                                className="w-6 h-6 object-contain"
                                            />
                                            <div>
                                                <p className="text-xs font-bold text-slate-800">
                                                    {stackItem.name}
                                                </p>
                                                <p className="text-[10px] text-slate-400">
                                                    {stackItem.category}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() =>
                                                handleRemoveFromStack(
                                                    stackItem.id,
                                                )
                                            }
                                            className="w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors text-xs cursor-pointer"
                                            title="Remove item"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Remove All Button */}
                        {selectedStack.length > 0 && (
                            <div className="mt-6">
                                <button
                                    onClick={handleClearStack}
                                    className="w-full py-3 rounded-2xl border border-red-300 text-red-600 font-semibold hover:bg-red-50 transition-colors cursor-pointer text-center"
                                >
                                    Remove All
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tech;
