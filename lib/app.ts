import webpack from 'webpack';

const compiler = webpack({});

/*
TypeScript allows using the method in our package as it's aware of the `types.d.ts` file (let's
assume that this package extends the Compiler to include it).
*/
compiler.extraMethod();

/*
Unfortunately, since the `declare module` declaration is not included anywhere in `dist/`,
TypeScript would complain if we were to try to use this method in another package that installs
this package. Because of this, the goal is to somehow include the `types.d.ts` file in the webpack
output in `dist/`.
*/
