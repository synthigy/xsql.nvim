local M = {}

function M.root()
  local here = debug.getinfo(1, 'S').source:sub(2)
  return vim.fs.normalize(vim.fs.joinpath(vim.fs.dirname(here), '..', '..'))
end

function M.node_script(path)
  return vim.fn.executable('node') == 1 and vim.uv.fs_stat(path) ~= nil
end

function M.server_cmd()
  local explicit = vim.g.xsql_ls_server
  if explicit and vim.uv.fs_stat(explicit) then return { 'node', explicit }, 'g:xsql_ls_server' end
  local bundled = vim.fs.joinpath(M.root(), 'dist', 'server.js')
  if M.node_script(bundled) then return { 'node', bundled }, 'bundled' end
  if vim.fn.executable('synthigy-lsp') == 1 then return { 'synthigy-lsp' }, 'synthigy-lsp on PATH' end
  local repo = vim.fs.normalize(vim.fs.joinpath(M.root(), '..', '..', 'dist', 'server.js'))
  if M.node_script(repo) then return { 'node', repo }, 'monorepo build' end
  return nil
end

return M
