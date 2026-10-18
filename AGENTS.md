<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Videos and posts hosted on LinkedIn (or any site that sends `X-Frame-Options` /
  `frame-ancestors`) are shown as a clickable card that opens the post in a new tab — never as an
  iframe, because the host refuses to be framed. Keep the item's link, picture and wording in
  `src/data/highlights.ts` so pages read them from one place.
