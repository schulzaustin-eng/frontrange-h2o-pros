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
- Home page content/behavior lives in src/site/ (body.html, site.js.txt, site.css) rendered raw by src/routes/index.tsx; styling overrides go at the end of site.css. Why: keeps the user's supplied page intact while applying the brand look.
