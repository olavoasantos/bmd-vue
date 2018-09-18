/* eslint-disable */
const fs = require('fs');
const nodePath = require('path');
const { plural, singular } = require('pluralize');
const { BaseCommand } = require('node-assistant');

class CreateComponent extends BaseCommand {
  appendToFile(path, content) {
    fs.appendFileSync(path, content);
  }

  run() {
    if (!this.silent) this.$info('- Parsing info...');
    const name = {
      lower: singular(this.name.toLowerCase()),
      upper: singular(this.name.replace(/^\w/, c => c.toUpperCase())),
    };
    const type = {
      lower: plural(this.type.toLowerCase()),
    };
    const variables = {
      name: name.upper,
      nameLowerCase: name.lower,
      type: type.lower,
    };

    if (!this.silent) this.$info('- Creating core component...');
    this.createFile(
      `./src/core/${type.lower}/${name.upper}/index.js`,
      './scripts/stubs/CoreComponent.stub',
      variables,
    );

    if (!this.silent) this.$info('- Registering core component export...');
    let contentExport = this.loadContentsFrom(`./src/core/index.js`);
    let componentExportLine = `export { default as ${name.upper} } from '@/core/${type.lower}/${name.upper}';\n`;
    if (!contentExport.includes(componentExportLine)) this.appendToFile(`./src/core/index.js`, componentExportLine);

    if (!this.silent) this.$info('- Creating component...');
    this.createFile(
      `./src/components/${type.lower}/${name.upper}/${name.upper}.vue`,
      './scripts/stubs/MainComponent.stub',
      variables,
    );

    if (!this.silent) this.$info('- Registering component export...');
    contentExport = this.loadContentsFrom(`./src/components/index.js`);
    componentExportLine = `export { default as ${name.upper} } from '@/components/${type.lower}/${name.upper}/${name.upper}.vue';\n`;
    if (!contentExport.includes(componentExportLine)) this.appendToFile(`./src/components/index.js`, componentExportLine);

    if (!this.silent) this.$info('- Creating stylesheet file...');
    this.createFile(
      `./src/components/${type.lower}/${name.upper}/${name.upper}.scss`,
      './scripts/stubs/Stylesheet.stub',
      variables,
    );

    if (!this.silent) this.$info('- Creating test file...');
    this.createFile(
      `./src/components/${type.lower}/${name.upper}/${name.upper}.tests.js`,
      './scripts/stubs/Test.stub',
      variables,
    );

    if (!this.silent) this.$success(`✓ Core '${name}' created! ./src/core/${type.lower}/${name.upper}/index.js`);
    if (!this.silent) this.$success(`✓ Component '${name}' created! ./src/components/${type.lower}/${name.upper}/${name.upper}.vue`);

    return this;
  }
}

CreateComponent.COMMAND = 'create:component';
CreateComponent.DESCRIPTION = 'Creates a new component.';

CreateComponent.OPTIONS = [
  {
    name: 'type',
    description: 'The type of the component (atom, molecule, organelle, cell or tissue',
  },
  { name: 'name', description: 'The name of the component' },
];
CreateComponent.FLAGS = [];

module.exports = CreateComponent;
