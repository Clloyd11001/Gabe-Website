import { counterItems } from "../constants";
// defensive import to handle different bundler interop shapes
import * as CountUpModule from "react-countup";

// Resolve a renderable component from the imported module. Some builds return
// the component as the default export, others as a nested .default.default, or
// even as a named export. Pick the first callable we find.
function resolveCountUp(mod) {
    if (!mod) return null;
    if (typeof mod === "function") return mod;
    if (mod.default && typeof mod.default === "function") return mod.default;
    if (mod.CountUp && typeof mod.CountUp === "function") return mod.CountUp;
    if (mod.default && mod.default.default && typeof mod.default.default === "function") return mod.default.default;
    return null;
}

const CountUp = resolveCountUp(CountUpModule);

const AnimatedCounter = () => {
    if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.log("AnimatedCounter: resolved CountUp ->", CountUp, "module keys:", Object.keys(CountUpModule));
    }

    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {/* {counterItems.map((item) => (
                    <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div className="counter-number text-white text-5xl font-bold mb-2">

                            <CountUp suffix={item.suffix} end={item.value} />

                        </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))} */}
            </div>

        </div>
    );
};

export default AnimatedCounter;