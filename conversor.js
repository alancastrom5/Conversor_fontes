// Consersor de fontes
// By: Alan Castro Moura :)
const fs = require('fs');
const path = require('path');
const ttf2woff = require('ttf2woff');

function convertFolderToWoff(inputFolder, outputFolder) {
    // Resolvendo caminhos relativos para absolutos
    const inputFolderPath = path.resolve(__dirname, inputFolder);
    const outputFolderPath = path.resolve(__dirname, outputFolder);

    // Ler os arquivos na pasta de entrada
    fs.readdirSync(inputFolderPath).forEach(file => {
        const ttfFilePath = path.join(inputFolderPath, file);

        // Substituir '-' por '_' e converter para minúsculas
        const fileNameWithoutExt = file.replace('.ttf', '').replace(/-/g, '_').toLowerCase();
        
        const woffFilePath = path.join(outputFolderPath, `${fileNameWithoutExt}.woff`);

        // Ler o arquivo TTF
        const ttfBuffer = fs.readFileSync(ttfFilePath);

        // Converter para WOFF
        const woffBuffer = ttf2woff(ttfBuffer);

        // Salvar o arquivo WOFF
        fs.writeFileSync(woffFilePath, woffBuffer);

        console.log(`Conversão concluída: ${ttfFilePath} -> ${woffFilePath}`);
    });
}

// Exemplo de uso com caminhos relativos
convertFolderToWoff('FONTE', 'FONTE_WOFF');

