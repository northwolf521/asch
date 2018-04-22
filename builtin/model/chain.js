module.exports = {
  table: 'chains',
  tableFields: [
    { name: 'tid', type: 'String', length: 64, not_null: true, primary_key: true },
    { name: 'name', type: 'String', length: 32, index: true },
    { name: 'desc', type: 'String', length: 160 },
    { name: 'link', type: 'Text' },
    { name: 'icon', type: 'Text' },
    { name: 'unlockNumber', type: 'Number' }
  ]
}