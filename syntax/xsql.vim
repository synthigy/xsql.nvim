" Vim syntax file
" Language: XSQL (Synthigy)

if exists("b:current_syntax")
  finish
endif

syn match   xsqlComment     "#.*$"
syn region  xsqlString      start=+"+ skip=+\\.+ end=+"+

" Op-header directives, then verbs — verbs defined last so they win the
" same-length tie against the directive pattern.
syn match   xsqlDirective   "^\s*@\(description\|namespace\|workspace\|returns\|watch\)\>"
syn match   xsqlVerb        "^@\(search-tree\|get-tree\|sql-template\|search\|slice\|purge\|batch\|sync\|stack\|delete\|get\)\>"

" ?name?:type(enum)=default
syn match   xsqlParam       "?[a-z_][a-z0-9_]*?\=\(:[a-z]\+\(([^)]*)\)\=\)\="

" {entity.attr} / {entity->relation.attr} placeholders in @sql-template bodies
syn region  xsqlPlaceholder start="{" end="}" contains=xsqlJoin,xsqlField
syn match   xsqlJoin        "->" contained
syn match   xsqlField       "\.[a-z_][a-z0-9_]*" contained

syn match   xsqlMeta        "\<_[a-z_]\+\>"
syn match   xsqlOperator    "->\|!=\|>=\|<=\|[=<>]"
syn match   xsqlNumber      "\<\d\+\(\.\d\+\)\=\>"
syn keyword xsqlKeyword     select from where group having order by limit offset
syn keyword xsqlKeyword     asc desc distinct filter over as on and or not null true false
syn keyword xsqlOperator    ilike like in is between

hi def link xsqlComment     Comment
hi def link xsqlString      String
hi def link xsqlDirective   PreProc
hi def link xsqlVerb        Statement
hi def link xsqlParam       Identifier
hi def link xsqlPlaceholder Special
hi def link xsqlJoin        Operator
hi def link xsqlField       Type
hi def link xsqlMeta        Keyword
hi def link xsqlOperator    Operator
hi def link xsqlKeyword     Keyword
hi def link xsqlNumber      Number

let b:current_syntax = "xsql"
