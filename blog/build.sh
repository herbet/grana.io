if [ "$NODE_ENV" == "production" ]; then
  yum install -y readline-devel openssl-devel zlib-devel

  git clone git://github.com/rbenv/rbenv.git ~/.rbenv
  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
  echo 'eval "$(rbenv init -)"' >> ~/.bashrc
  source ~/.bashrc

  git clone git://github.com/rbenv/ruby-build.git /tmp/ruby-build
  pushd /tmp/ruby-build
  ./install.sh
  popd

  rbenv install 2.5.5 && rbenv global 2.5.5

  gem install jekyll bundler:1.16.3

  bundle install

  bundle exec jekyll build
else
  bundle exec jekyll serve
fi
