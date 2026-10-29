if vim.g.loaded_xsql or vim.fn.has('nvim-0.11') == 0 then return end
vim.g.loaded_xsql = true

local cmd = require('xsql').server_cmd()
if not cmd then return end

vim.lsp.config('xsql_ls', {
  cmd = cmd,
  filetypes = { 'xsql' },
  root_markers = { 'synthigy.schema.json', 'schema.json', '.git' },
})
vim.lsp.enable('xsql_ls')
