# Optimizer ownership and versions

Run `apx optimizer` before changing an optimizer installation. It is read-only
and reports source, configured command/spec, ownership, and available local
version information.

- **external**: installed or configured by the user. apx never upgrades,
  removes, reinstalls, or rewrites it.
- **apx-managed**: an apx manifest recorded the installation. It may become
  eligible for an explicit user-approved reconcile flow.
- **configured-default**: pxpipe uses the default npx command; this is not an
  apx-owned global npm package.
- **apx-managed-helper**: apx owns the Squeezr launcher helper, not npm's
  package cache.

The only current reconcile operation is planning for managed Headroom:

```bash
apx optimizer reconcile headroom 1.2.3 --dry-run
```

It prints a proposed official PyPI package change and never mutates state.
pxpipe and Squeezr reconciliation are intentionally unavailable. apx never
automatically updates an optimizer.
