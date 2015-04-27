Tech task for DataRobot

Hello) To launch app please follow next steps (this instruction assumes, that you have Node engine installed to use NPM):

1) Open you terminal

2) Install Flask dependencies by running following command: `pip install -r dependencies.txt`

3) Bower is used as js dependency-manager, so if you don't have it, please install by running `npm install -g bower`

4) Install Angular dependencies by running: `bower install`. It will create `/project/static/bower_components` directory. You could change directory by editing `/.bowerrc`

5) Go to url `http://127.0.0.1:5000/#/game` and enjoy the game!

To launch tests you should follow next steps(this instrustion assumes, that you've launched the app): 

0) You must have Protractor installed, so if it's not run `npm install -g protractor`

1) To launch Selenium test server `webdriver-manager start`

2) To set config and run tests `protractor test/e2e/main-conf.js`

See all the green beatiful dots appear in case everything works just fine = )
