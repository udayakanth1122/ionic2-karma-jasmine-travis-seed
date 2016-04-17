## Ionic 2 + Angular 2 + Typescript + Karma-Jasmine + Travis Seed project
[![Build Status](https://travis-ci.org/udayakanth1122/ionic2-karma-jasmine-travis-seed.svg?branch=master)](https://travis-ci.org/udayakanth1122/ionic2-karma-jasmine-travis-seed) [![Coverage Status](https://coveralls.io/repos/udayakanth1122/ionic2-karma-jasmine-travis-seed/badge.svg?branch=master&service=github)](https://coveralls.io/github/udayakanth1122/ionic2-karma-jasmine-travis-seed?branch=master) [![codecov.io](https://codecov.io/github/udayakanth1122/ionic2-karma-jasmine-travis-seed/coverage.svg?branch=master)](https://codecov.io/github/udayakanth1122/ionic2-karma-jasmine-travis-seed?branch=master)

This project is a seed project that is referring to this [project](https://github.com/lathonez/clicker).

## Things Covered in this project:
1. Writing an app using Ionic2 framework which is based on Angular2.
2. Writing code using typescript. (Checkout the controllers, services etc)
3. Write unit test cases using Karma-Jasmine.
4. Build and deploy the app using Travis.

## Requirements
1. [Ionic2 framework](http://ionicframework.com/docs/v2/)
2. [nodeJS](https://nodejs.org/en/)
3. Wrting Angular2 using Typescript. Refer [this](https://angular.io/docs/ts/latest/quickstart.html).
4. [Travis](travis-ci.org)
5. Have access to [Ionic-view](https://apps.ionic.io). This is where the app gets deployed for you to test/share.


## How to start

**Note** that this project requires node v4.x.x or higher and npm 2.14.7.
```bash
git clone https://github.com/udayakanth1122/ionic2-karma-jasmine-travis-seed.git
cd clicker
npm install       # or `npm run reinstall` if you get an error
npm test          # run unit tests
npm start         # start the application
```

## How to deploy to ionic view through travis-ci

1. Generate an ssh key using the following command:

   ```bash
   $ ssh-keygen -f publish-key
    Generating public/private rsa key pair.
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in publish-key.
    Your public key has been saved in publish-key.pub.
   ```
   **Note** do not give any passphrase

2. Encrypt the key

   ```
   $ travis encrypt-file publish-key
    Detected repository as udayakanth1122/ionic2-karma-jasmine-travis-seed, is this correct? |yes|
    encrypting publish-key for udayakanth1122/ionic2-karma-jasmine-travis-seed
    storing result as publish-key.enc
    storing secure env variables for decryption

    Please add the following to your build script (before_install stage in your .travis.yml, for instance):

        openssl aes-256-cbc -K udayakanth1122@localhost$encrypted_87d9ccdaebfd_key -iv udayakanth1122@localhost$encrypted_87d9ccdaebfd_iv -in publish-key.enc -out publish-key -d

    Pro Tip: You can add it automatically by running with --add.

    Make sure to add publish-key.enc to the git repository.
    Make sure not to add publish-key to the git repository.
    Commit all changes to your .travis.yml.
  ```
  **Note** Make sure not to add publish-key to the git repository.

3. The unencrypted secret key should be removed

  ```
  rm public-key
  ```

4. Move the encrypted key file (.enc) to ".travis" folder.

  ```
  mv publish-key.enc .travis/
  ```
5. Add the following code in your .travis/push_built_tests.sh file. Make sure you change the openssl command and use the one that was generated in step 2.

  ```
  git checkout .
  git checkout master
  # decrypt private key that gives us push access and add it to ssh agent
  openssl aes-256-cbc -K $encrypted_c4563c0abb0a_key -iv $encrypted_c4563c0abb0a_iv -in .travis/publish-key.enc -out .travis/publish-key -d
  eval "$(ssh-agent -s)"
  chmod 600 .travis/publish-key
  ssh-add .travis/publish-key
  # using -f as www/build is in .gitignore for dev purposes
  git add -f www/build/test/app
  git remote rm origin                                       # originally cloned by travis on https
  git remote add origin git@github.com:username/project_name.git  # ditto
  # careful not to trigger another build
  git -c user.name='travis' -c user.email='travis@travis-ci.org' commit -m "updating compiled tests [ci skip]"
  git push origin master
  ```
6. In travis-ci, for your repository go to settings and add the following env variables and their values.
  IONIC_EMAIL, IONIC_PASSWORD, IONIC_APP_ID and IONIC_API_KEY. You can get the app id and app key (public key) from ionic-view console page.

7. In your deploy.sh file, add the following

  ```
  ionic upload --email $IONIC_EMAIL --password $IONIC_PASSWORD
  ```
  **Note** $IONIC_EMAIL, $IONIC_PASSWORD, IONIC_APP_ID and IONIC_API_KEY are environment variables in travis-ci. Make sure you provide them. 

8. Commit all your changes and push it into git.


## References
[Deploying to GitHub from Travis-CI](https://aniketpanse.in/2015/autodeploy-github-travis.html)

[Publishing to GitHub Pages from Travis CI](https://blog.ionelmc.ro/2015/07/11/publishing-to-github-pages-from-travis-ci/)

[travis-ci encrypted files](https://docs.travis-ci.com/user/encrypting-files/)

[Automated deploys with travis](http://scurker.com/automated-deploys-with-travis/)
