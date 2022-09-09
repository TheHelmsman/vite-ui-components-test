# vite-ui-components-test

This repository represents Vite, TypeScript, SASS, Vue3, ESLint, Prettier configuration to create and distribute UI library component files.

## To start project:

1. Clone repository:

```
$ git clone git@github.com:TheHelmsman/vite-ui-components-test.git
```

2. Go to project folder and run

```
$ yarn install
```

to install `node_modules`

You're ready to use project, check instractions below to run local webserver and see components working or build components library for distribution

## To build components files:

1. Edit code of desired component in `src` folder

2. Edit `package.json` to update `name, description` fields

3. Build UI component files for distribution:

```
$ yarn run build
```

4. Publish UI component library to NPM

Make sure you have added the `GIT_TOKEN` and `NPM_TOKEN` encrypted secrets

```bash
# tag git history
$ git tag v0.0.1 -m 'v0.0.1'

# push tag to git
$ git push origin --tags
```

## To check components on local webserver

```
$ yarn run dev
```

Open your browser and go to `http://localhost:3000/` to see working components
