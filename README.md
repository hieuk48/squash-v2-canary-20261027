# Squash hardened/v2 release canary

This is a synthetic task for exercising Squash hosted settlement. It is not an upstream OSS bug fix.

`double(value)` must multiply a number by two. The initial implementation adds two.
Build with `npm ci --offline --ignore-scripts && npm run build`.
The frozen acceptance contract is `.squash/contract.json`.

Any bounty amount and claim eligibility come from the funded Squash issue. No award is created by this source repository alone.
