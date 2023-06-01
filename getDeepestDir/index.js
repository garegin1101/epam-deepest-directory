import fs from 'fs/promises';
import path from 'path';

export default async (folder) => {

    let dep = 1;
    let deepestDirectory = '';
    
    const deep = async (dir, depth) => {
    
        if(depth > dep) {
            dep = depth;
            deepestDirectory = dir
        }
    
        try {
    
            const files = await fs.readdir(dir, { withFileTypes: true });
    
            for (const file of files) if(file.isDirectory()) {

                const deeperDirectory = path.join(dir, file.name);

                await deep(deeperDirectory, depth + 1);
            }

        } catch (err) {
    
            console.log(err.message);
    
        }
    }
    
    await deep(folder, dep);

    return deepestDirectory;
}


