import menuSpaghetti from "../../../../assets/menu-spaghetti.png";
import menuGnocchi from "../../../../assets/menu-gnocchi.png";
import menuRoviolli from "../../../../assets/menu-rovioli.png";
import menuPenneAllVodak from "../../../../assets/menu-penne-alla-vodak.png";
import menuRisoto from "../../../../assets/menu-risoto.png";
import menuSplitza from "../../../../assets/menu-splitza.png";
import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";
import "./Menu.scss";

export const meals = [
    {
        name: "Spaghetti",
        image: menuSpaghetti,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$11.99"
    },
    {
        name: "Gnocchi",
        image: menuGnocchi,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$14.49"
    },
    {
        name: "Roviolli",
        image: menuRoviolli,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$8.99"
    },
    {
        name: "Penne-Alla-Vodak",
        image: menuPenneAllVodak,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 0, 0],
        price: "$6.99"
    },
    {
        name: "Risoto",
        image: menuRisoto,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.99"
    },
    {
        name: "Splitza Signature",
        image: menuSplitza,
        description:
            "Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$17.99"
    }
];
