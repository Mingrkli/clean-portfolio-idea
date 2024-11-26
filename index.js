import express from "express";
import chalk from "chalk";

const app = express();

app.use(express.static("./public"));

app.listen(4242, () => {
    console.log(chalk.cyan(`Server running on port 4242`));
});
