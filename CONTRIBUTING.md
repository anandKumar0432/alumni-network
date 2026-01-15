
Prerequisites node version >= 22
Typescript installed globally
prisma version == 7.0

------------------------Step wise command-------------------------
fork the repo
clone the repo:
     git clone https://github.com/<your user name>/alumni-network.git

upstream this with original repo:
    git remote add upstream https://github.com/anandKumar0432/alumni-network.git

rebase:
    git fetch upstream
merge with your local:
    git merge upstream/main

push to your local and open a PR

configure BACKEND
    cd /backend
        npm install
        prisma generate
        tsc -b
        node dist/src/index.js   // backend will start at PORT 8000
    cd /frontend
        npm install
        npm run dev

You are all set to contribute 
Be sure and tested all the routes and changes you'll do

