"use server";

import fs from "node:fs/promises";

export async function uploadFile(file:File, folder:string,  filename: string) {

    folder = folder.trim().replaceAll(" ", "_")
    const uploadDir = `./public/uploads/${folder}`;

    // Créer le dossier s'il n'existe pas
    await fs.mkdir(uploadDir, { recursive: true });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`${uploadDir}/${filename}`, buffer);

    return true


}