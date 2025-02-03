# @types/html-escaper 3.0.3 bug repro

I believe the `exports` field added to `@types/html-escaper` in [fix(html-escaper): fix FalseCJS by introducing export map for cjs & esm](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/71746) is causing a resolution issue.

[Repository](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/html-escaper).

## Steps

1. Clone this repo
2. `pnpm install`
3. `pnpm run typecheck`

Expected: Successful typecheck.

Actual:

```
> html-escaper-bug@1.0.0 typecheck /home/ndc/projects/html-escaper-bug
> tsc --noEmit

src.ts:1:38 - error TS7016: Could not find a declaration file for module 'html-escaper'. '/home/ndc/projects/html-escaper-bug/node_modules/.pnpm/html-escaper@3.0.3/node_modules/html-escaper/cjs/index.js' implicitly has an 'any' type.
  If the 'html-escaper' package actually exposes this module, consider sending a pull request to amend 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/html-escaper'

1 import { escape } from "html-escaper";
                         ~~~~~~~~~~~~~~


Found 1 error in src.ts:1
```

To check with @types/html-escaper@3.0.2:

1. `git switch 3.0.2`
2. `pnpm install`
3. `pnpm typecheck`
