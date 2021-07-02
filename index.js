require('dotenv').config()
const fetch = require('node-fetch');

// * make a .env file at the root with apiKey=mykeyhere
const apiKey = process.env.apiKey;

const getChampMastery = async function () {
    const { data } = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.13.1/data/en_US/champion.json`).then(res => res.json());
    const allChamps = {};
    for (const currChamp in data) {
        allChamps[data[currChamp].key] = data[currChamp];
    }

    // * Change me to your summoner
    const { id } = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/private ttocs`, {
        headers: {
            'X-Riot-Token': apiKey
        }
    }).then(res => res.json());

    const champMasteryScores = await fetch(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`, {
        headers: {
            'X-Riot-Token': apiKey
        }
    }).then(res => res.json());

    let ret = {};
    for (const champMastery of champMasteryScores) {
        ret[allChamps[champMastery.championId].id] = champMastery.championPoints.toLocaleString();
        console.log(`${allChamps[champMastery.championId].id}: ${champMastery.championPoints.toLocaleString()} `);
    }
    return ret;
};

getChampMastery();