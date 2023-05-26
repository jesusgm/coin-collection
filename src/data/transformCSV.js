import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

const CSV_FILENAME = "inventario_monedas.csv";
const DATA_PATH = `${path.dirname(__filename)}`;
const CSV_PATH = `${DATA_PATH}/csv`;

const parseCSVOptions = {
  delimiter: ",",
  endofline: "\n",
};

const parseCSV = async () => {
  const csv = await fs.readFile(`${CSV_PATH}/${CSV_FILENAME}`, "utf-8");

  const lines = csv.split(parseCSVOptions.endofline);

  const headers = lines[0].split(parseCSVOptions.delimiter);

  const data = lines.slice(1).map((line) => {
    const values = line.split(parseCSVOptions.delimiter);

    const coin = {};

    headers.forEach((header, index) => {
      switch (header) {
        case "id":
          const id = values[index];
          coin.id = id;
          coin.images = {
            front: `/coin-images/moneda${id}_A.jpg`,
            back: `/coin-images/moneda${id}_B.jpg`,
          };
          break;
        case "Foto Anverso":
        case "Foto reverso":
          break;
        case "País/Origen":
          coin.country = values[index];
          break;
        case "nombre moneda":
          coin.name = values[index];
          break;
        case "año":
          coin.year = values[index];
          break;
        case "cantidad":
          coin.value = values[index];
        default:
          coin[header] = values[index];
          break;
      }
    });

    return coin;

    // return headers.reduce((obj, header, index) => {
    //   console.log({ header, value: values[index], obj });
    //   switch (header) {
    //     case "id":
    //       const id = values[index];
    //       obj.id = values[index];
    //       // obj.images = {
    //       // front: `moneda${id}_A.jpg`,
    //       // back: `moneda${id}_B.jpg`,
    //       // };
    //       break;
    //     case "Foto Anverso":
    //     case "Foto reverso":
    //       break;
    //     case "País/Origen":
    //       obj.country = values[index];
    //       break;
    //     case "nombre moneda":
    //       obj.name = values[index];
    //       break;
    //     case "año":
    //       obj.year = values[index];
    //       break;
    //     default:
    //       obj[header] = values[index];
    //       break;
    //   }
    // }, {});
  });

  return data;
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

console.log("Leyendo archivo CSV...");

const data = await parseCSV();

const countries = [...new Set(data.map((coin) => coin.country))];
const years = [...new Set(data.map((coin) => coin.year))];

await writeJSON(`${DATA_PATH}/coins.json`, data);
await writeJSON(`${DATA_PATH}/countries.json`, countries);
await writeJSON(`${DATA_PATH}/years.json`, years);
