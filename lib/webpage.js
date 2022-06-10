import { writeFile as _writeFile } from 'fs'
import axios from 'axios';

function getWebpage (url) {
  return axios.get(url)
}

function writeFile (fileContent) {
  let filePath = 'page'
  return _writeFile(filePath, fileContent);
}

export async function saveWebpage (url) {
  const fileContent = await getWebpage(url)
  await writeFile(fileContent)
  return true;
}
