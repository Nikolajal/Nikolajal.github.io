# nikolajal.github.io

Source for my personal site at [nikolajal.github.io](https://nikolajal.github.io).

Built with [Jekyll](https://jekyllrb.com/) on top of the [academic-pages](https://academicpages.github.io/) template, with a customised *mint* theme and a few additions of my own.

## What's here

- **About me** — personal page; the work side lives in the other sections
- **Software** — selected open-source projects (ePIC dRICH analysis framework, MIST utilities, etc.)
- **Publications** — selected papers; full list on [InspireHEP](https://inspirehep.net/authors/1890020) and [ORCID](https://orcid.org/0000-0001-9874-7249)
- **Talks** — conference contributions where I'm the speaker
- **CV** — a full, trilingual web CV mirroring the master source ([live](https://nikolajal.github.io/cv/))

## Layout

```
_pages/         pages keyed by permalink (about-me, cv, publications, …)
_publications/  one markdown file per publication
_talks/         one markdown file per talk
_teaching/      one markdown file per teaching role
_portfolio/     one markdown file per software project
_posts/         blog posts
_sass/          stylesheet partials; theme palette lives in _sass/theme/_mint_*.scss
_data/          navigation.yml + author profile
_plugins/       Ruby 3.2 compatibility patch for Liquid 4.0.3
```

## Licence

Site content © Nicola Rubini. Template based on [academic-pages](https://github.com/academicpages/academicpages.github.io), MIT-licensed.
