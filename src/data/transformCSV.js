import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

const DATA_PATH = `${path.dirname(__filename)}`;
const CSV_PATH = `${DATA_PATH}/csv`;

const parseCSVOptions = {
  delimiter: ",",
  endofline: "\n",
};

const getCSVFiles = async () => {
  const files = await fs.readdir(CSV_PATH);
  return files.filter((file) => file.endsWith(".csv"));
};

const parseCSV = async () => {
  const [csvFilename] = await getCSVFiles();

  const fileFullPath = `${CSV_PATH}/${csvFilename}`;

  const csv = await fs.readFile(fileFullPath, "utf-8");

  const lines = csv.split(parseCSVOptions.endofline);

  const headers = lines[0].split(parseCSVOptions.delimiter);

  const data = lines.slice(1).map((line) => {
    const values = line.split(parseCSVOptions.delimiter);

    const coin = {};

    headers.forEach((header, index) => {
      switch (header.trim()) {
        case "id":
          const id = values[index];
          coin.id = id;
          coin.images = {
            front: `/coin-collection/coin-images/moneda${id}_A.jpg`,
            back: `/coin-collection/coin-images/moneda${id}_B.jpg`,
          };
          break;

        case "pais":
          coin.country = values[index];
          break;
        case "nombre":
          coin.name = values[index];
          break;
        case "año":
          coin.year = values[index];
          break;
        case "cantidad":
          coin.value = parseInt(values[index], 10);
        case "otros":
          coin.other = values[index];
        default:
          //coin[header] = values[index];
          break;
      }
    });

    if (!coin.id) return;

    return coin;
  });

  return data.filter((d) => d);
};

async function writeJSON(filename, data) {
  await fs.writeFile(
    filename,
    JSON.stringify(data, null, 2),
    "utf-8",
    (err) => {
      if (err) throw err;
      console.log("Archivo JSON creado correctamente");
    }
  );
}

const data = await parseCSV();

const countries = [...new Set(data.map((coin) => coin.country))];
const years = [...new Set(data.map((coin) => coin.year))];

await writeJSON(`${DATA_PATH}/coins.json`, data);
await writeJSON(`${DATA_PATH}/countries.json`, countries);
await writeJSON(`${DATA_PATH}/years.json`, years);
