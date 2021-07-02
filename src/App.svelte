<script>
	export let apiKey = "";
	export let summoner = "";

	const getChampMastery = async function () {
		const { data } = await fetch(
			`http://ddragon.leagueoflegends.com/cdn/11.13.1/data/en_US/champion.json`
		).then((res) => res.json());
		const allChamps = {};
		for (const currChamp in data) {
			allChamps[data[currChamp].key] = data[currChamp];
		}

		const { id } = await fetch(
			`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}`,
			{
				headers: {
					"X-Riot-Token": apiKey,
					"Access-Control-Allow-Origin": "*",
				},
			}
		).then((res) => res.json());

		const champMasteryScores = await fetch(
			`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
			{
				headers: {
					"X-Riot-Token": apiKey,
					"Access-Control-Allow-Origin": "*",
				},
			}
		).then((res) => res.json());

		let ret = {};
		for (const champMastery of champMasteryScores) {
			ret[allChamps[champMastery.championId].id] =
				champMastery.championPoints.toLocaleString();
			console.log(
				`${
					allChamps[champMastery.championId].id
				}: ${champMastery.championPoints.toLocaleString()} `
			);
		}
		return ret;
	};
</script>

<main>
	<label for="apiKey">Api key</label>
	<input id="apiKey" bind:value={apiKey} />

	<label for="summoner">Summoner name</label>
	<input id="summoner" bind:value={summoner} />

	<form on:submit|preventDefault={getChampMastery}>
		<button type="submit"> Go </button>
	</form>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
	}
</style>
