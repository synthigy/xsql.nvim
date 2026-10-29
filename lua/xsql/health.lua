local M = {}

function M.check()
  local h = vim.health
  h.start('xsql')

  if vim.fn.has('nvim-0.11') == 1 then
    h.ok('Neovim ' .. tostring(vim.version()))
  else
    h.error('Neovim 0.11+ required (vim.lsp.config)')
    return
  end

  if vim.fn.executable('node') == 1 then
    h.ok('node: ' .. vim.trim(vim.fn.system({ 'node', '--version' })))
  else
    h.warn('node not found on PATH', { 'Install Node 18+, or put synthigy-lsp on PATH' })
  end

  local cmd, source = require('xsql').server_cmd()
  if cmd then
    h.ok('server (' .. source .. '): ' .. table.concat(cmd, ' '))
  else
    h.error('no language server found', { 'Set g:xsql_ls_server to a server.js path' })
  end

  local dir = vim.fn.getcwd()
  for _, b in ipairs(vim.api.nvim_list_bufs()) do
    if vim.bo[b].filetype == 'xsql' and vim.api.nvim_buf_get_name(b) ~= '' then
      dir = vim.fs.dirname(vim.api.nvim_buf_get_name(b))
      break
    end
  end
  local schema = vim.fs.find({ 'synthigy.schema.json', 'schema.json' }, { upward = true, path = dir })[1]
  if schema then
    h.ok('schema: ' .. schema)
  else
    h.info('no schema.json above ' .. dir .. ': syntax checks only (run `synthigy schema pull`)')
  end
end

return M
