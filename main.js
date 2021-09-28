const yaml = require("js-yaml");
const fs = require("fs");

// TODO: run `packwiz utils markdown` on build?

let mkdocsConfig = yaml.load(fs.readFileSync("mkdocs-base.yml", "utf8"));
Promise.all(mkdocsConfig.nav.map(async el => {
	if (el.Reference != null) {
		await Promise.all(el.Reference.map(async el => {
			if (el.Commands != null) {
				el.Commands = [];

				const files = await fs.promises.readdir("./docs/reference/commands/");
				for (const file of files) {
					let ref = {};
					let name = file.slice(0, -3).replace(/_/g, " ");
					if (name == "overview") {
						name = "Overview";
					}
					ref[name] = "reference/commands/" + file;
					el.Commands.push(ref);
				}
			}
		}));
	}
	return el;
})).then(nav => {
	mkdocsConfig.nav = nav;
	fs.writeFileSync("mkdocs.yml", yaml.dump(mkdocsConfig));
});