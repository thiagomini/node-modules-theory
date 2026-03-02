import { createJsWithTsPreset } from 'ts-jest';

const tsJestTransformCfg = createJsWithTsPreset({
  tsconfig: {
    isolatedModules: true,
  },
}).transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
};
