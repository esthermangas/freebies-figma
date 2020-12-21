import viezhRobertProfileImg from '../assets/PartThree/viezhRobertProfileImg.png';
import yessicaChristyProfileImg from '../assets/PartThree/yessicaChristyProfileImg.png';
import kimYoungJouProfileImg from '../assets/PartThree/kimYoungJouProfileImg.png';

export const plans = [
    {
        id: "free",
        title: "Free Plan",
        features: [
            'Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'
        ],
        price: 'Free',
    },
    {
        id: "standard",
        title: "Standard Plan",
        features: [
            'Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anywhere'
        ],
        price: '$9',

    },
    {
        id: "premium",
        title: "Premium Plan",
        features: [
            'Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anywhere',
            'Get New Features'
        ],
        price: '$12',
    }
];

export const twitterUsers = [
    {
        name: 'Viezh Robert',
        location: 'Warsaw, Poland',
        profilePhoto: viezhRobertProfileImg,
        comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
        punctuation: 4.5
    },
    {
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        profilePhoto: yessicaChristyProfileImg,
        comment: '“I like it because I like to travel far and still can connect with high speed.”.',
        punctuation: 4.5
    },
    {
        name: 'Kim Young Jou',
        location: 'Seoul, South Korea',
        profilePhoto: kimYoungJouProfileImg,
        comment: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
        punctuation: 4.5
    }
];
