echo ">>> Building blog"
jekyll build -s blog/ -d lib/grana_web/templates/blog

echo ">>> Renaming things to match Phoenix templates"
mv lib/grana_web/templates/blog/feed.xml lib/grana_web/templates/blog/feed.xml.eex
for file in `ls lib/grana_web/templates/blog/*.html`; do mv $file $file.eex; done

echo ">>> Cleaning up cache"
rm -rf .sass-cache
