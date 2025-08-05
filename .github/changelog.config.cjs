// Only output the latest "release" block (i.e., changes since last stable),
// with Conventional Commit groups, and no dates/compare links/headers.
module.exports = {
  releaseCount: 1, // <- just the latest block
  writerOpts: {
    mainTemplate: `{{#each commitGroups}}
### {{title}}
{{#each commits}}- {{header}}
{{/each}}
{{/each}}`,
    headerPartial: "",
    footerPartial: "",
    linkCompare: false,
    linkReferences: false,
  },
};
