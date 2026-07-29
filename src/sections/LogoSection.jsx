import { logoIconsList } from "../constants";
const img = (path) => `${import.meta.env.BASE_URL}${path}`;

const LogoIcon = ({ icon }) => {
    const altText = icon.name || icon.imgPath?.split("/").pop()?.split(".")[0] || "logo";

    return (
        <div className="flex-none marquee-item w-full h-40 md:h-48 overflow-hidden rounded-lg">
            <img
                src={icon.imgPath}
                alt={altText}
                onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/images/fav.png";
                }}
                className="h-full w-full object-cover object-center rounded-lg"
            />
        </div>
    );
};

const LogoSection = () => {
    const column1 = logoIconsList.slice(0, 3);
    const column2 = logoIconsList.slice(3, 6);
    const column3 = [
         { imgPath: img("images/wings.jpg"), name: "Wings" },
  {
    imgPath: img("images/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food.jpg"),
    name: "Sour Curry",
  },
  { imgPath: img("images/burger.jpg"), name: "Burger" },
    ];

    const renderColumn = (items, reverse = false) => (
        <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
            {[...items, ...items].map((icon, idx) => (
                <LogoIcon key={`${icon.imgPath}-${idx}`} icon={icon} />
            ))}
        </div>
    );

    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-[56rem]">
                <div className="marquee-grid h-full">
                    <div className="marquee-column">{renderColumn(column1)}</div>
                    <div className="marquee-column">{renderColumn(column2, true)}</div>
                    <div className="marquee-column">{renderColumn(column3)}</div>
                </div>
            </div>
        </div>
    );
};

export default LogoSection;