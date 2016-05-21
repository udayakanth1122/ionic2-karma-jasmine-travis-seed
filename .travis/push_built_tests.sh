#! /usr/bin/env sh
#
# Helper script run from travis that pushes compiled tests to github so they can be referenced by coverage providers
#
# travis clones in a weird way and the head gets detached, so checkout master again
git checkout .
git checkout master
# decrypt private key that gives us push access and add it to ssh agent
openssl aes-256-cbc -K $encrypted_bef1462fa324_key -iv $encrypted_bef1462fa324_iv -in .travis/publish-key.enc -out .travis/publish-key.pem -d
eval "$(ssh-agent -s)"
echo "running chmod command"
chmod 600 .travis/publish-key.pem
echo "adding encryption file to ssh"
ssh-add .travis/publish-key.pem
# using -f as www/build is in .gitignore for dev purposes
git add -f www/build/test
git remote rm origin                                       # originally cloned by travis on https
git remote add origin git@github.com:udayakanth1122/ionic2-karma-jasmine-travis-seed.git  # ditto
# careful not to trigger another build
git -c user.name='travis' -c user.email='travis@travis-ci.org' commit -m "updating compiled tests [ci skip]"
git push origin master
