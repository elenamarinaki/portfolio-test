# Sample Portfolio website with `React` & `Sanity.io` 🐚

In this project I am trying to build a website using `React`, `Sanity.io` and `Tailwind CSS`. My main goal is to learn `Sanity.io` and explore more the **Headless CMS** concept, as well as practice more the rest of the technologies.

<img src='https://media.giphy.com/media/l2JeaBhNoapQTW5PO/giphy.gif' width=350>

## `Sanity` installation 💡

- `npm install -g @sanity/cli`
- `sanity login`
- default dataset configuration
- confirming project output path
- project template -> blog

- install the sanity client package
  `npm install @sanity/client`

### Adding `client.js` in `src` folder

- this is how `React` communicates with `Sanity`

### Adding new `CORS origin`

- how `Sanity` 'trusts' and communicates with `React`
- https://www.sanity.io/manage/personal/project/rq4e9768/api
- add `http://localhost:3000`

⚠️ we will add the **hosted url** in the above settings, once our site is deployed

### Learnings 📚
- If the we haven't uploaded an image file in the `Sanity`, the `imageUrlBuilder` won't work!
- The page won't render at all without and the `fetch` query (with `groq`) will keep returning nothing 🤔
- Had to `.then(() => {console.log(data)})` every time after a `groq` request. Sometimes we need access to the object itself (`data`), sometimes to the first index of the array (`data[0]`).
- Deployment to `Netlify`:
  - the deployment was not successful initially
  - after research the solution is: 
    1. in the project's page we go to `Site settings`
    2. Under `Build & deploy` (left side panel), we go to `Continuous Deployment`
    3. Under `Build settings`, we choose `Edit settings`
    4. `Build command`: **`CI= npm run build`**
