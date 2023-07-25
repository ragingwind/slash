import defineConfig from '@toss/tsup-config';
import pkgJson from './package.json';

const external = [
  ...Object.keys((pkgJson as any).peerDependencies || {}),
  ...Object.keys((pkgJson as any).dependencies || {}),
];

export default defineConfig({
  source: {
    external,
  },
  entry: {
    external,
  },
}, __dirname);