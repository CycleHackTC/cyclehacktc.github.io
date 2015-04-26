# Cycle Hack Twin Cities website

Main website for the Cycle Hack Twin Cities

## Development

Set up your environment.

1. Install [Git](http://git-scm.com/).
    * On a Mac, install [Homebrew](http://brew.sh/) and run: `brew install git`
    * On common Linux systems: `apt-get install git-core`
1. Install Ruby.  This is probably already on your system and should be Ruby 2.x.  You can check with `ruby --version`.  If not:
    * [Install RVM](https://rvm.io/rvm/install)
    * `rvm install 2.2`
    * `rvm use --default 2.2`
    * `gem install bundler`
1. Get the code: `git clone https://github.com/CycleHackTC/cyclehacktc.github.io.git && cd cyclehacktc.github.io`
1. Install Ruby dependencies: `bundle install`

Run locally with Jekyll.  This will run a local web server at `http://localhost:4000` and should watch for any changes you make to the site and reload Jekyll each time.

    jekyll serve --baseurl ''
