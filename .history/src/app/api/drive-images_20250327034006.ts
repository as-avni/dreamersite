

import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = "YOUR_GOOGLE_DRIVE_API_KEY";  // Replace with your actual API Key
const FOLDER_ID = "YOUR_GOOGLE_DRIVE_FOLDER_ID";  // Replace with your actual Google Drive Folder ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name)`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images from Google Drive");
    }

    const data = await response.json();

    const images = data.files.map((file: { id: string }) => ({
      url: `https://drive.google.com/uc?id=${file.id}`,
    }));

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images", details: error.message });
  }
}