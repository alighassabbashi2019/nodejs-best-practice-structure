import moduleAlias from 'module-alias';
import path from 'path';

const basePath = path.resolve(__dirname, '../');
console.log('this is base path', basePath);
moduleAlias.addAliases({
    '@globals': path.join(basePath, 'dist/global'),
    '@person': path.join(basePath, 'dist/modules/person'),
    '@shop': path.join(basePath, 'dist/modules/shop'),
});