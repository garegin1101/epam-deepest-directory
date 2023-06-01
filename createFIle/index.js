import fs from "fs/promises";

export default async (path, content = "hello world") => {

    try {

        await fs.writeFile(path, content);

        console.log("File created successfuly!");

    } catch(err) {

        console.log(err.message);
        
    }

}