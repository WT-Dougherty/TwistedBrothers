# For Connor:

## Setup

Download [homebrew](https://brew.sh/), which is a package manager for mac & linux. Instructions for dong this are on homebrew's website. Once it's installed, use it to install brew and npm with the following two commands:

```bash
brew install git
brew install npm
```

Once these commands finish, run the following command in your terminal:

```bash
git clone https://github.com/WT-Dougherty/TwistedBrothers.git
```

This will copy the repo to your computer in a folder called "TwistedBrothers". Now run the following commands in the same terminal window:

```bash
cd TwistedBrothers
npm install
```

## Changing Images:

To change the images in the banner, go to /public/people/ and swap out the images in this folder. Make sure you always rename the images you're adding. Once you've set the images, go to the root directory in your terminal and type the following commands in this order:

```bash
npm run predeploy
npm run deploy
```

The website should update within 30 seconds or so.
