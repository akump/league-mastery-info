# league-mastery-info

* `git clone https://github.com/akump/league-mastery-info.git`
* `cd league-mastery-info`
* `npm i`
* create `.env` file at root and set your api key `apiKey=mykeyhere`
* update index.js to use your summoner name
* `node .`

```
Total mastery points: 3,377,076
### Champ Mastery ###
Velkoz: 597,238
Thresh: 227,542
Fizz: 183,917
Ahri: 176,126
Ziggs: 130,958
Diana: 107,097
Sejuani: 83,379
TahmKench: 81,924
Braum: 81,239
Lissandra: 70,304
Janna: 62,160
Soraka: 61,818
Galio: 56,953
Blitzcrank: 56,482
Leona: 51,179
Jinx: 51,178
Kassadin: 50,561
Elise: 49,246
Syndra: 37,954
Ekko: 37,480
Zoe: 36,857
Rakan: 36,091
Ashe: 35,807
Poppy: 34,593
Jhin: 34,560
Nautilus: 33,109
DrMundo: 32,619
Morgana: 31,128
Ezreal: 30,701
LeeSin: 30,133
Zyra: 27,782
Lulu: 26,784
Trundle: 25,127
Nami: 24,646
Bard: 23,790
Orianna: 23,242
Anivia: 21,808
Veigar: 21,060
Vi: 19,895
Karma: 19,181
Xerath: 17,583
Zed: 17,203
Sylas: 16,659
Brand: 15,866
Neeko: 15,470
Warwick: 15,232
Lucian: 15,215
Pyke: 15,126
Malzahar: 15,058
Khazix: 14,943
Lux: 14,907
Vayne: 14,875
Katarina: 14,148
Garen: 13,390
Gnar: 13,122
Maokai: 12,680
Sona: 12,480
Chogath: 12,001
Kindred: 11,947
Malphite: 11,514
Graves: 11,307
Heimerdinger: 10,909
Kayle: 10,520
Swain: 9,929
AurelionSol: 9,826
MissFortune: 9,665
Cassiopeia: 9,532
Sivir: 9,442
Nasus: 9,362
Xayah: 8,865
Tristana: 8,201
Hecarim: 8,034
Kaisa: 7,858
Amumu: 7,702
Alistar: 7,537
Irelia: 7,087
Illaoi: 7,010
Nidalee: 6,693
KogMaw: 6,468
Jax: 6,116
Taric: 5,961
Singed: 5,881
Taliyah: 5,298
Yuumi: 5,227
Pantheon: 4,930
Sion: 4,845
Rammus: 4,500
Annie: 3,750
Senna: 3,748
Caitlyn: 3,292
Twitch: 3,235
Zilean: 3,192
Akali: 2,472
Tryndamere: 2,410
Quinn: 2,289
Zac: 2,283
Karthus: 2,283
Camille: 1,93
Yasuo: 1,704
Sett: 1,525
Seraphine: 1,516
Shaco: 1,489
Vladimir: 1,482
MasterYi: 1,370
Ryze: 1,144
XinZhao: 1,055
Varus: 981
Talon: 955
Darius: 952
Nunu: 929
Evelynn: 902
Fiddlesticks: 901
Shyvana: 787
Ornn: 746
Riven: 744
Yone: 715
Yorick: 692
Qiyana: 667
TwistedFate: 572
Teemo: 325
Kayn: 271
Mordekaiser: 269
Udyr: 260
Volibear: 258
Ivern: 171
Urgot: 143
Kalista: 141
Leblanc: 138
Aatrox: 133
Corki: 119
Skarner: 108
Kennen: 94
JarvanIV: 91
Viego: 70
```


*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
