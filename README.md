# xsql.nvim

Neovim support for **XSQL**, the query language of [Synthigy](https://synthigy.com):
filetype, indentation, highlighting, and the XSQL language server with
diagnostics, completion, hover and document symbols, checked against your own
data model.

Requires Neovim 0.11+ and Node 18+. The language server ships in this repo;
there is nothing else to install and nothing to configure.

## Install

[lazy.nvim](https://github.com/folke/lazy.nvim)

```lua
{ "synthigy/xsql.nvim" }
```

Neovim 0.12 built-in `vim.pack`

```lua
vim.pack.add({ "https://github.com/synthigy/xsql.nvim" })
```

[vim-plug](https://github.com/junegunn/vim-plug)

```vim
Plug 'synthigy/xsql.nvim'
```

Native packages

```bash
git clone https://github.com/synthigy/xsql.nvim \
  ~/.local/share/nvim/site/pack/synthigy/start/xsql.nvim
```

## Schema

Put a `schema.json` beside your `.xsql` files:

```bash
synthigy schema pull            # writes xsql/schema.json
```

The server looks for `synthigy.schema.json` or `schema.json` in the file's
folder and its parents, and picks up changes without a restart. Without one you
still get syntax errors and highlighting.

```xsql
@search-tree folder_tree
folder (active = true, on parent)
  name
  ->owner
    name
```

## Configuration

None needed. The server is registered as `xsql_ls`, so the usual overrides apply:

```lua
vim.lsp.config('xsql_ls', { root_markers = { 'schema.json' } })
vim.g.xsql_ls_server = '/path/to/server.js'   -- run another server build
```

`:checkhealth xsql` shows Node, the server in use and the schema found.
`:help xsql` has the rest.

## Learn more

- [XSQL reference](https://github.com/synthigy/synthigy/blob/main/docs/XSQL.md)
- [Synthigy CLI](https://github.com/synthigy/synthigy/blob/main/docs/CLI.md)

## License

MIT
