# Vendored font subsets

`latin` subsets of the two Google Fonts the site itself uses, pulled from
`fonts.gstatic.com` via `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&family=Roboto:wght@700`.

They exist only so that `design/og-image.html` renders identically every time, with no
network access and no webfont-loading race — the site itself still loads these fonts from
the Google Fonts CDN (see `src/app.html`). Nothing here is served to visitors.

Both families are licensed Apache-2.0.
