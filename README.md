# Minimal Typescript CLI Boilerplate

Requirements: NodeJS >= v16 (ships with npm)

## Commands

First, run `yarn` to add dependencies. If `yarn` is not available on your PATH, install it using `npm i -g yarn`

### Development

- **`yarn watch`** In development, rebuild on file save and re-run the main script. Update `nodemon.json` to change the script executed on save.
- **`yarn start`** Runs the main script once and `yarn build` to only build without executing the script.

### Testing

- **`yarn test`** Runs to run unit tests.
- **`yarn coverage`** Runs unit tests and opens up coverage page in the default browser (MacOS only).
- **`yarn type-check`** Runs type check.

### Publishing

- **`yarn build`** Builds index.ts to NodeJS platform JS and outputs result to the `dist` directory.
- **`yarn publish`** Runs build and publishes output to public registry. Add a .yarnignore / .npmignore to configure which files end up in the published package.
