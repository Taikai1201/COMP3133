const fs = require('fs');
const csv = require('csv-parser');

function dataFiltrate(inputFileName, outputFileName, filterCountry) {
  const outputFilePath = `./${outputFileName}.txt`;

  if (fs.existsSync(outputFilePath)) {
    fs.unlinkSync(outputFilePath);
  }

  const writeStream = fs.createWriteStream(outputFilePath, { flags: 'a' });


  fs.createReadStream(inputFileName)
    .pipe(csv())
    .on('data', (row) => {
  if ('country' in row) {
            const countryName = row.country.toLowerCase();
            if (countryName === filterCountry.toLowerCase()) {
            writeStream.write(`${Object.values(row).join(',')}\n`);
            }
        }
    })
    .on('end', () => {
      console.log(`Filtered data for ${filterCountry} has been written to ${outputFileName}.txt`);
    });
}

['canada', 'usa'].forEach((country) => {
  const filePath = `./${country}.txt`;
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`${filePath} has been deleted.`);
  }
});

// write to canada.txt
dataFiltrate('input_countries.csv', 'canada', 'Canada');
// write to usa.txt
dataFiltrate('input_countries.csv', 'usa', 'United States');





// const fs = require('fs');
// const csv = require('csv-parser')

// function dataFiltrate(inputFile, newFile, filtrateObject){
//     const newFilePath = `./${newFile}.txt`

//     if(fs.existsSync(newFilePath)){
//         fs.unlinkSync(newFilePath)
//     }

//     const writeData = fs.createWriteStream(newFilePath, {flag: 'a'})


//     fs.createReadStream(inputFile)
//     .pipe(csv())
//     .on('data', (row) => {
//         if ('country' in row){
//             const countryName = filtrateObject.toLowerCase()
//             if(countryName === newFile.toLowerCase){
//                 writeData.write(`${Object.values(row).join(',')}\n`)
//         }
//     }
//     }).on('end', () => {
//         console.log(`Filtered data for ${filterCountry} has been written to ${outputFileName}.txt`);
//     })


//     ['canada','usa'].forEach((country) => {
//         const filePath = `${country}.txt`
//         if (fs.existsSync(filePath)){
//             fs.unlinkSync(filePath)
//             console.log(`File name ${filePath} has been deleted`)
//         }
//     })
// }

// // write to canada.txt
// dataFiltrate('input_countries.csv', 'canada', 'Canada');
// // write to usa.txt
// dataFiltrate('input_countries.csv', 'usa', 'United States');