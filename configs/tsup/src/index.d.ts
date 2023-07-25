import { MaybePromise, Options } from 'tsup';

export type TSupOption = {
  [entry: string]: Options;
}

declare function defineConfig(targetOptions: TSupOption, basePath: string): Options | Options[] | ((overrideOptions: Options) => MaybePromise<Options | Options[]>);

export default defineConfig;
