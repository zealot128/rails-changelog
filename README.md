# Rails Changelog to HTML page

This is a Bridgetown site which fetches latest Rails commits and displays as a website:

https://zealot128.github.io/rails-changelog


## After new Rails minor/major release:

check bin/fetch_merges for the next "main" target name. Rerun the old branch:

```
bin/fetch_merges 7-0-stable
bin/fetch_merges
```

### Commands

```sh
bin/fetch_merges

bin/fetch_merges 7-0-stable
bin/fetch_merges 6-1-stable

# running locally
bin/bridgetown start
```
