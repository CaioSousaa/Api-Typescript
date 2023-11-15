import * as csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);

        const parseFile = csvParse.parse();

        stream.pipe(parseFile);

        parseFile.on("date", async (line) => {
            console.log(line);
        });
    }
}

export { ImportCategoryUseCase };
