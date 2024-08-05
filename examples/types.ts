#!/usr/bin/env -S npx ts-node --transpileOnly

class Foo<F extends (...args: any[]) => any> {
  f: F;

  constructor(f: F) {
    this.f = f;
  }

  run(...args: Parameters<F>): ReturnType<F> {
    return this.f(...args);
  }
}

// (a: number, b: number) => number
const add = (a: number, b: number) => a + b;

const foo = new Foo(add);
// run(a: number, b: number): ReturnType<(a: number, b: number) => number>
const res = foo.run(1, 2);
