// nftData.js

import dog from './assets/dog.png';
import newspaper from './assets/newspaper.png';
import event from './assets/event.png';
import hat from './assets/hat.png';
import first from './assets/first.png';
import second from './assets/second.png';
import third from './assets/third.png';
import fourth from './assets/fourth.png';
import fifth from './assets/fifth.png';
import sixth from './assets/sixth.png';
import seventh from './assets/seven.png';
import eight from './assets/eight.png';
import close from './assets/closenft.jpg';
import defaultnft from './assets/defaultnft.jpg';

const nftData = [
    {
        id: 1,
        name: "Dog",
        image: dog,
        nft: [
            {
                name: "META-TK #1", status: "open", unit: 2, image: first
            },
            {
                name: "META-TK #2", status: "open", unit: 2, image: second
            },
            {
                name: "META-TK #3", status: "open", unit: 2, image: third
            },
            {
                name: "META-TK #4", status: "open", unit: 2, image: fourth
            },
            {
                name: "META-TK #5", status: "open", unit: 2, image: fifth
            },
            {
                name: "META-TK #6", status: "open", unit: 2, image: sixth
            },
            {
                name: "META-TK #7", status: "open", unit: 2, image: seventh
            },
            {
                name: "META-TK #8", status: "open", unit: 2, image: eight
            },
            {
                name: "META-TK #9", status: "close", unit: 2, image: close
            }
        ]
    },
    {
        id: 2,
        name: "NearWeek Raffles",
        image: newspaper,
        nft: [
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
        ]
    },
    {
        id: 3,
        name: "Community Rafflest",
        image: event,
        nft: [
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
        ]
    },
    {
        id: 4,
        name: "El Café Cartel Raffles",
        image: hat,
        nft: [
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
            {
                name: "Default", status: "open", unit: 2, image: defaultnft
            },
        ]
    }
]
export default nftData;
