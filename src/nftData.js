// nftData.js

import dog from './assets/dog.png';
import newspaper from './assets/newspaper.png';
import event from './assets/event.png';
import hat from './assets/hat.png';
import first from './assets/first.jpeg';
import second from './assets/second.jpeg';
import third from './assets/third.jpeg';
import fourth from './assets/fourth.jpeg';
import fifth from './assets/fifth.jpeg';
import sixth from './assets/sixth.jpeg';
import seventh from './assets/seven.jpeg';
import eight from './assets/eight.jpeg';
import close from './assets/closenft.jpg';
import defaultnft from './assets/defaultnft.jpg';

const nftData = [
    {
        id: 1,
        name: "SharDog Raffles",
        image: dog,
        nft: [
            {
                title: "SharDog Raffle", name: "META-TK #1", status: "open", unit: 2, image: first
            },
            {
                title: "SharDog Raffle", name: "META-TK #2", status: "open", unit: 2, image: second
            },
            {
                title: "SharDog Raffle", name: "META-TK #3", status: "open", unit: 2, image: third
            },
            {
                title: "SharDog Raffle", name: "META-TK #4", status: "open", unit: 2, image: fourth
            },
            {
                title: "SharDog Raffle", name: "META-TK #5", status: "open", unit: 2, image: fifth
            },
            {
                title: "SharDog Raffle", name: "META-TK #6", status: "open", unit: 2, image: sixth
            },
            {
                title: "SharDog Raffle", name: "META-TK #7", status: "open", unit: 2, image: seventh
            },
            {
                title: "SharDog Raffle", name: "META-TK #8", status: "open", unit: 2, image: eight
            },
            {
                title: "SharDog Raffle", name: "META-TK #9", status: "close", unit: 2, image: close
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
