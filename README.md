# 🐶 Einstein

> Einstein is a project starter structure based on ITCSS. Einstein doesn't contain any styled components, as I think, each site is different and so the styled components should be treated differently. There's no 101 for how to style components, in my POV.

## Structure

    scss
    ├── components            # UI components from the design team, e.g. footer
    ├── elements              # Styles that go directly on HTML elements, no classes or id are specified yet
    ├── generics              # High level rules, think normalize.css – nothing project design specific
    ├── objects               # So called “cosmetic free design patterns” such as a grid system
    ├── settings              # Contains the variables used across your project, e.g. color defaults, grid settings etc
    ├── tools                 # All your mixins/functions used across the project
    ├── trumps                # Overrides and helpers
    └── main.scss

## License

[The MIT License](LICENSE)
