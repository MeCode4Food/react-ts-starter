# A React Webapp written in TypeScript and Styled Components

## Why TypeScript
Because I prefer compile-time errors. 

## Why Torture Yourself
Because I prefer Fried Chicken over runtime errors

## Why Styled Components
Because I can't be bothered having to manage so many css/scss/sass/less/ass files per component

## Why is ./build in your commit
Because my VM instance doesn't have the memory to do the compilation ☹️
Bear with me while I compile locally and commit the build. You can compile it yourself if you'd like

## Why does bindActionCreators takes in `Dispatch<AnyAction>` instead of `Dispatch<CatActions>` as the generic?
Because when you use `connect()`, it leverages on the `dispatch()` from the store, which dispatches `AnyActions` instead of just cat actions

# Things to Work On/Fix
- Table component uses lambdas in the tags inside the returned jsx. This might lead to perf bottleneck issues
- Table component is functionally too tightly coupled. But maybe that's just because only one page uses it
- Add support for Redux Thunk (although I figure it would not be that troublesome, as a middleware)