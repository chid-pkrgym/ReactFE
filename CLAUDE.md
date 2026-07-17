# pkr-fe-two

## Layout

Header (fixed height) → remaining space split into two rows:
- **77%** → `<Grid>` (`src/components/Grid.jsx`)
- **23%** → `<Navigation>` (`src/components/Navigation.jsx`)

## Resolving element references

When the user refers to a named div (e.g. "the board div", "the grid", "navigation"), find the element by its `id` attribute:

| Reference | `id` | File |
|---|---|---|
| "the grid" / "grid div" | `#grid` | `src/components/Grid.jsx` |
| "the board" / "board div" | `#board` | `src/components/Board.jsx` |
| "navigation" / "navigation div" | `#navigation` | `src/components/Navigation.jsx` |

Apply changes to the element with the matching `id`, not to a wrapper or parent.
