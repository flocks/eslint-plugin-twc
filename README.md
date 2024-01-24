### Eslint-plugin-twc

Eslint rule that suggests to use a specific prefix when creating component with react-twc.

## Rationale 

Tailwindcss is a great library, but it brings a lot of noise in the
code. React-twc solves this issue by offering the ability to create
react styled component with tailwind. 

Despite the noise introduced by Tailwind, one nice side effect is it
serves as a visual indicator that a component is purely styled,
without any side effects or states management. So you can move the
code freely without thinking about it.

The aim of this ESLint plugin
is to reinforce a coding convention: requiring developers to prefix
their React-twc components. This ensures that components leveraging
Tailwind styling are easily identifiable in the codebase.

