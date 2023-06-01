
import path from 'path'
import getDeepestDir from './getDeepestDir/index.js';
import createFIle from './createFIle/index.js';

const deepestDirectory = await getDeepestDir("node_modules");

const filePath = path.join(deepestDirectory, "file.txt");

createFIle(filePath);

