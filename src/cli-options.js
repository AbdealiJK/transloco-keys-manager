const actionsDefinitions = [
  { name: 'extract', alias: 'e', type: Boolean, },
  { name: 'find-missing', alias: 'f', type: Boolean }
];

const optionDefinitions = [
  { name: 'input', alias: 'i', type: String, description: 'Paths you would like to extract strings from' },
  { name: 'translationsPath', alias: 'p', type: String, description: 'Where are the main translation files' },
  { name: 'langs', alias: 'l', type: Array, description: 'Which languages files to generate' },
  { name: 'default-value', alias: 'd', type: String, description: `What's the default value for a generated key` },
  {
    name       : 'replace',
    alias      : 'r',
    type       : Boolean,
    description: 'Replace the contents of output file if it exists (Merges by default)'
  },
  {
    name       : 'add-missing-keys',
    alias      : 'm',
    type       : Boolean,
    description: 'Whether to add missing keys that were found by the detective'
  },
  { name: 'help', alias: 'h', type: Boolean, description: 'Help me please!' },
];

const sections = [
  {
    header : '🔥 Transloco Keys Manager',
    content: 'Extract and find missing keys easily'
  },
  {
    header : 'Actions',
    content: [
      '$ transloco-keys-manager --extract',
      '$ transloco-keys-manager --find-missing',
    ],
  }, {
    header    : 'Options',
    optionList: optionDefinitions
  },
];

module.exports = {
  sections,
  optionDefinitions,
  actionsDefinitions
};
