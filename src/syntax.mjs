export default [
   {
      "scope": [
         "comment",
         "comment keyword",
         "comment markup.underline.link",
         "comment string",
         "comment punctuation.definition",
         "comment punctuation",
         "comment text"
      ],
      "settings": {
         "name": "Comments and overrides inside comments",
         "fontStyle": "italic",
         "foreground": "#69676c"
      }
   },
   {
      "scope": "comment storage.type",
      "settings": {
         "name": "JSDoc storage type",
         "foreground": "#69676c"
      }
   },
   {
      "scope": "comment entity.name.type",
      "settings": {
         "name": "JSDoc entity name",
         "foreground": "#bab6c0"
      }
   },
   {
      "scope": [
         "comment variable",
         "comment variable.other"
      ],
      "settings": {
         "name": "JSDoc variable",
         "foreground": "#bab6c0"
      }
   },
   {
      "scope": "comment keyword.codetag.notation",
      "settings": {
         "name": "Comment TODO / FIXME (at least in VSCode Python)",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "comment.git-status.header.remote",
      "settings": {
         "name": "git status remote",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "comment.git-status.header.local",
      "settings": {
         "name": "git status local",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "comment.other.git-status.head",
      "settings": {
         "name": "git status remote",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "constant",
      "settings": {
         "name": "Constant",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.other",
      "settings": {
         "name": "Constant",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "constant.other.php",
      "settings": {
         "name": "Constant",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.other.property",
      "settings": {
         "name": "Constant as property",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.other.citation.latex",
      "settings": {
         "name": "Constant in latex",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.other.color",
      "settings": {
         "name": "Constant as color (in css / sass)",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.other.character-class.escape",
      "settings": {
         "name": "Constant as character class escape (e.g. in regex)",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.other.key",
      "settings": {
         "name": "Constant as key (e.g. in puppet manifests)",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.other.symbol",
      "settings": {
         "name": "Constant as symbol (e.g. in ruby)",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": "constant.other.elm",
      "settings": {
         "name": "Constants in elm",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "constant.numeric",
      "settings": {
         "name": "Number",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.language",
      "settings": {
         "name": "Constant",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.character.escape",
      "settings": {
         "name": "Character escape",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "constant.numeric.line-number.find-in-files",
      "settings": {
         "name": "Search result line numbers",
         "foreground": "#525053"
      }
   },
   {
      "scope": "constant.numeric.line-number.match.find-in-files",
      "settings": {
         "name": "Search result matched line numbes",
         "foreground": "#fce566"
      }
   },
   {
      "scope": "entity.name.section",
      "settings": {
         "name": "Sections",
         "foreground": "#fce566"
      }
   },
   {
      "scope": [
         "entity.name.function",
         "entity.name.function.templated"
      ],
      "settings": {
         "name": "Functions",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "entity.name.function.member.static",
      "settings": {
         "name": "Functions",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": [
         "entity.name.type.class.templated",
         "entity.name.type.class.generic",
         "entity.name.type.namespace"
      ],
      "settings": {
         "name": "Class template",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "entity.name.label",
      "settings": {
         "name": "label",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "entity.name.function.preprocessor",
      "settings": {
         "name": "Macros",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "entity.name",
      "settings": {
         "name": "Entity name",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "entity.name.class",
      "settings": {
         "name": "Class name",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "entity.name.constant",
      "settings": {
         "name": "Constant name",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "entity.name.namespace",
      "settings": {
         "name": "Namespace",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "entity.other.inherited-class",
      "settings": {
         "name": "Inherited class",
         "fontStyle": "italic",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "entity.name.function",
      "settings": {
         "name": "Function name",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": [
         "entity.name.tag",
         "entity.name.tag.js.jsx support.class.component.js.jsx",
         "entity.name.tag support.class.component",
         "source.vue support.class.component"
      ],
      "settings": {
         "name": "Tag name",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "entity.name.function.operator",
      "settings": {
         "name": "Operator",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "entity.name.type",
         "entity.name.type.class.reference",
         "entity.name.type.class.value"
      ],
      "settings": {
         "name": "Entity name type",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "entity.other.attribute-name",
      "settings": {
         "name": "Tag attribute",
         "fontStyle": "italic",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": [
         "entity.other.attribute-name.class.css",
         "entity.other.attribute-name.parent-selector-suffix.css",
         "entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
         "entity.other.attribute-name.css",
         "entity.other.animation-name.css"
      ],
      "settings": {
         "name": "CSS class",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "entity.other.attribute-name.id.css",
      "settings": {
         "name": "CSS id",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": [
         "entity.other.attribute-name.pseudo-class.css",
         "entity.other.pseudo-class.css",
         "entity.other.pseudo-element.css"
      ],
      "settings": {
         "name": "CSS pseudo class",
         "fontStyle": "italic",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": [
         "entity.name.function",
         "support.function"
      ],
      "settings": {
         "name": "Function names / calls",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "entity.other.git-status.hex",
      "settings": {
         "name": "git status commit hex",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "entity.other.jinja2.delimiter",
      "settings": {
         "name": "jinja delimiters",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": "entity.name.operator.custom-literal",
      "settings": {
         "name": "custom literal",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "entity.name.operator.custom-literal.string",
      "settings": {
         "name": "custom literal string",
         "foreground": "#fce566"
      }
   },
   {
      "scope": "entity.name.operator.custom-literal.number",
      "settings": {
         "name": "custom literal number",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "entity.name.type.rust",
      "settings": {
         "name": "rust specific",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "entity.name.lifetime.rust",
      "settings": {
         "name": "rust specific",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "invalid",
      "settings": {
         "name": "Invalid",
         "fontStyle": "italic"
      }
   },
   {
      "scope": "keyword",
      "settings": {
         "name": "Keyword",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "keyword.control",
      "settings": {
         "name": "Control keywords examples include if, try, end and while. Some syntaxes prefer to mark if and else with the conditional variant. The import variant is often used in appropriate situations.",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "keyword.control.directive",
      "settings": {
         "name": "keyword control directive",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "keyword.operator",
         "keyword.operator.member",
         "keyword.operator.new"
      ],
      "settings": {
         "name": "Operator",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "keyword.other.substitution",
      "settings": {
         "name": "Substitution string",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "keyword.other.template.begin",
         "keyword.other.template.end"
      ],
      "settings": {
         "name": "Template literal begin / end",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "keyword.operator.heading.restructuredtext",
         "keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext"
      ],
      "settings": {
         "name": "RestructuredText heading, table markup",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": "keyword.other.parenthesis.elm",
      "settings": {
         "name": "elm parenthesis",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "keyword.other.fn.rust",
         "keyword.other.rust",
         "keyword.other.unsafe.rust",
         "keyword.other.where.rust"
      ],
      "settings": {
         "name": "rust specific",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": [
         "keyword.control.rust",
         "keyword.operator.misc.rust"
      ],
      "settings": {
         "name": "rust specific",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "keyword.declaration.class.ruby",
         "keyword.declaration.function.ruby"
      ],
      "settings": {
         "name": "ruby specific",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "markup.italic",
      "settings": {
         "name": "Italic",
         "fontStyle": "italic"
      }
   },
   {
      "scope": "markup.bold",
      "settings": {
         "name": "Bold",
         "fontStyle": "bold"
      }
   },
   {
      "scope": "markup.heading",
      "settings": {
         "name": "Heading",
         "foreground": "#fce566"
      }
   },
   {
      "scope": "markup.raw",
      "settings": {
         "name": "Raw",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": "markup.underline",
      "settings": {
         "name": "Underline",
         "fontStyle": "underline"
      }
   },
   {
      "scope": "markup.underline.link",
      "settings": {
         "name": "Link",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": [
         "markup.inserted",
         "markup.inserted punctuation.definition.inserted"
      ],
      "settings": {
         "name": "Diff inserted",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": [
         "markup.deleted",
         "markup.deleted punctuation.definition.deleted"
      ],
      "settings": {
         "name": "Diff deleted",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "markup.changed",
         "markup.changed punctuation.definition.changed"
      ],
      "settings": {
         "name": "Diff changed",
         "foreground": "#fce566"
      }
   },
   {
      "scope": [
         "markup.ignored",
         "markup.ignored punctuation.definition.ignored"
      ],
      "settings": {
         "name": "Diff ignored",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": "markup.untracked",
      "settings": {
         "name": "Diff untracked",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": "markup.quote",
      "settings": {
         "name": "Markup quote",
         "fontStyle": "italic"
      }
   },
   {
      "scope": [
         "meta.brace.round",
         "meta.brace.square",
         "meta.brace.curly",
         "meta.delimiter.comma.js",
         "meta.function-call.without-arguments.js",
         "meta.function-call.method.without-arguments.js"
      ],
      "settings": {
         "name": "Braces, delimiters",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "meta.function-call.generic.python",
         "support.function.builtin.python"
      ],
      "settings": {
         "name": "Function call (vs)",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "meta.function-call.python meta.function-call.arguments.python",
      "settings": {
         "name": "Function arguments (vs)",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "meta.instance.constructor",
      "settings": {
         "name": "Constructor (new MyClass())",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": [
         "meta.attribute-with-value.class string",
         "meta.attribute.class.html string"
      ],
      "settings": {
         "name": "Class string name (i.e. in html attributes)",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": [
         "meta.attribute-with-value.id string",
         "meta.attribute.id.html string"
      ],
      "settings": {
         "name": "ID string name (i.e. in html attributes)",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": [
         "source.json meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
         "source.json meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
         "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string"
      ],
      "settings": {
         "name": "JSON keys (and invisibles)",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": [
         "source.json meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
         "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string"
      ],
      "settings": {
         "name": "JSON values",
         "foreground": "#fce566"
      }
   },
   {
      "scope": "meta.object.member",
      "settings": {
         "name": "Object members",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "meta.property-list.css variable.other",
      "settings": {
         "name": "SCSS Variable",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": [
         "entity.name.constant.preprocessor",
         "meta.preprocessor"
      ],
      "settings": {
         "name": "Preprocessor",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "meta.diff.git-diff.header",
      "settings": {
         "name": "git diff header",
         "foreground": "#fce566"
      }
   },
   {
      "scope": "meta.type_params.rust",
      "settings": {
         "name": "rust specific (brackets and certain type names)",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": [
         "meta.attribute.rust",
         "meta.annotation.rust",
         "variable.language.rust",
         "variable.annotation.rust",
         "meta.annotation.rust string",
         "meta.annotation.rust keyword",
         "meta.annotation.rust keyword.operator",
         "meta.attribute.rust string"
      ],
      "settings": {
         "name": "rust specific (variable.language.rust is 'self' keyword.",
         "foreground": "#bab6c0"
      }
   },
   {
      "scope": "punctuation",
      "settings": {
         "name": "Punctuation",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "punctuation.definition.tag",
         "punctuation.definition.tag source",
         "punctuation.definition.group.begin.ruby",
         "punctuation.definition.group.end.ruby",
         "punctuation.definition.group.begin.css",
         "punctuation.definition.group.end.css",
         "punctuation.definition.string.end.html source.css"
      ],
      "settings": {
         "name": "Punctuation tags",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": "punctuation.definition.group",
      "settings": {
         "name": "Group (i.e. in regex)",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "punctuation.definition.comment",
      "settings": {
         "name": "Comment start / end",
         "foreground": "#69676c"
      }
   },
   {
      "scope": [
         "punctuation.definition.variable",
         "punctuation.definition.keyword.scss",
         "punctuation.definition.entity.css"
      ],
      "settings": {
         "name": "Variable indicator (i.e. in php or in include directives in sass)",
         "foreground": "#bab6c0"
      }
   },
   {
      "scope": [
         "punctuation.section.embedded",
         "punctuation.section.embedded entity.name.tag",
         "punctuation.section.embedded constant.other",
         "punctuation.section.embedded source",
         "punctuation.section.embedded.begin"
      ],
      "settings": {
         "name": "Punctuation section embedded (i.e. ?php blocks in html)",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": [
         "punctuation.template-string.element.begin",
         "punctuation.template-string.element.end",
         "punctuation.definition.string.template.begin",
         "punctuation.definition.string.template.end",
         "string.quoted.template punctuation.definition.string.begin",
         "string.quoted.template punctuation.definition.string.end",
         "punctuation.definition.template-expression.begin",
         "punctuation.definition.template-expression.end"
      ],
      "settings": {
         "name": "Punctuation template string (`example`)",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "meta.paragraph.markdown meta.dummy.line-break",
         "meta.paragraph.markdown meta.hard-line-break.markdown"
      ],
      "settings": {
         "Name": "Punctuation hard line break in Markdown",
         "background": "#948ae3"
      }
   },
   {
      "scope": "region.redish",
      "settings": {
         "name": "region red color",
         "foreground": "#fc618d",
         "background": "#fc618d59"
      }
   },
   {
      "scope": "region.orangish",
      "settings": {
         "name": "region orange color",
         "foreground": "#fd9353",
         "background": "#fd935359"
      }
   },
   {
      "scope": "region.yellowish",
      "settings": {
         "name": "region yellow color",
         "foreground": "#fce566",
         "background": "#fce56659"
      }
   },
   {
      "scope": "region.greenish",
      "settings": {
         "name": "region green color",
         "foreground": "#7bd88f",
         "background": "#7bd88f59"
      }
   },
   {
      "scope": "region.bluish",
      "settings": {
         "name": "region blue color",
         "foreground": "#5ad4e6",
         "background": "#5ad4e659"
      }
   },
   {
      "scope": "region.purplish",
      "settings": {
         "name": "region purple color",
         "foreground": "#948ae3",
         "background": "#948ae359"
      }
   },
   {
      "scope": "region.pinkish",
      "settings": {
         "name": "region pink color",
         "foreground": "#fc618d",
         "background": "#fc618d59"
      }
   },
   {
      "scope": "region.whitish",
      "settings": {
         "name": "White for ST3 for non-colorized scheme",
         "foreground": "#FFFFFF"
      }
   },
   {
      "scope": "source",
      "settings": {
         "name": "source",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": [
         "source.scss",
         "source.sass"
      ],
      "settings": {
         "name": "SASS, SCSS default",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "source.sass variable.other",
         "source.sass variable.sass",
         "source.scss variable.other",
         "source.scss variable.scss",
         "source.scss variable.sass",
         "source.css variable.other",
         "source.css variable.scss",
         "source.less variable.other",
         "source.less variable.other.less",
         "source.less variable.declaration.less"
      ],
      "settings": {
         "name": "SASS, SCSS and LESS variables",
         "fontStyle": "italic",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": "source.git-show.commit.sha",
      "settings": {
         "name": "git",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": [
         "source.git-show.author",
         "source.git-show.date",
         "source.git-diff.command",
         "source.git-diff.command meta.diff.git-diff.header.from-file",
         "source.git-diff.command meta.diff.git-diff.header.to-file"
      ],
      "settings": {
         "name": "git",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "source.git-show meta.diff.git-diff.header.extended.index.from-sha",
         "source.git-show meta.diff.git-diff.header.extended.index.to-sha"
      ],
      "settings": {
         "name": "git diff header hash",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "source.git-show meta.diff.range.unified",
      "settings": {
         "name": "git diff header range",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": [
         "source.git-show meta.diff.header.from-file",
         "source.git-show meta.diff.header.to-file"
      ],
      "settings": {
         "name": "git diff header files",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": "storage",
      "settings": {
         "name": "Storage",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "storage.type",
      "settings": {
         "name": "Types and definition / declaration keywords should use the following scope. Examples include int, bool, char, func, function, class and def. Depending on the language and semantics, const may be this or storage.modifier.",
         "fontStyle": "italic",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "storage.type.extends",
      "settings": {
         "name": "Extends",
         "fontStyle": "normal",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "storage.type.function.arrow",
      "settings": {
         "name": "Fat arrow function",
         "fontStyle": "normal",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "storage.modifier",
         "storage.type.modifier"
      ],
      "settings": {
         "name": "Keywords that affect the storage of a variable, function or data structure should use the following scope. Examples include static, inline, const, public and private.",
         "fontStyle": "italic",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "storage.class.restructuredtext.ref",
      "settings": {
         "name": "refs (Restructured text)",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": [
         "storage.modifier.visibility.rust",
         "storage.modifier.lifetime.rust"
      ],
      "settings": {
         "name": "rust specific",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "storage.modifier.const.rust",
         "storage.modifier.dyn.rust",
         "storage.modifier.mut.rust",
         "storage.modifier.static.rust",
         "storage.type.rust",
         "storage.type.core.rust",
         "storage.class.std.rust"
      ],
      "settings": {
         "name": "rust specific",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": [
         "storage.type.rust",
         "storage.modifier.const.rust",
         "storage.modifier.dyn.rust",
         "storage.modifier.mut.rust",
         "storage.modifier.static.rust",
         "keyword.other.rust",
         "keyword.other.where.rust"
      ],
      "settings": {
         "name": "rust specific (adjust blue to red)",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "string",
      "settings": {
         "name": "String",
         "foreground": "#fce566"
      }
   },
   {
      "scope": "string.unquoted.label",
      "settings": {
         "name": "String label",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "string source",
      "settings": {
         "name": "Source in template string",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": [
         "string source punctuation.section.embedded",
         "string punctuation.definition.string source"
      ],
      "settings": {
         "name": "Embedded punctuation begin / end in template string",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "string.other.link.title",
         "string.other.link.description"
      ],
      "settings": {
         "name": "link title",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "string.other.link.description.title",
      "settings": {
         "name": "link description",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": [
         "string.regexp punctuation.definition.string.begin",
         "string.regexp punctuation.definition.string.end"
      ],
      "settings": {
         "name": "String regexp begin / end",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": [
         "string.other.ref",
         "string.other.restructuredtext.ref"
      ],
      "settings": {
         "name": "refs (Restructured text)",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "string.other.git-status.help.key",
      "settings": {
         "name": "git key in git status help text",
         "foreground": "#bab6c0"
      }
   },
   {
      "scope": "string.other.git-status.remote",
      "settings": {
         "name": "git status remote",
         "foreground": "#fc618d"
      }
   },
   {
      "scope": "support.constant",
      "settings": {
         "name": "Library constant",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "support.constant.handlebars",
      "settings": {
         "name": "Handlebars start / end",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": "support.type.vendor-prefix.css",
      "settings": {
         "name": "vendor prefix",
         "foreground": "#bab6c0"
      }
   },
   {
      "scope": "support.function",
      "settings": {
         "name": "Function name",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "support.function.delimiter.elm",
      "settings": {
         "name": "function brackets, comma's",
         "foreground": "#8b888f"
      }
   },
   {
      "scope": [
         "support.type",
         "entity.name.type.object.console"
      ],
      "settings": {
         "name": "Library type",
         "fontStyle": "italic",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "support.variable",
      "settings": {
         "name": "Support variables",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "support.type.property-name",
      "settings": {
         "name": "Library type property",
         "fontStyle": "normal",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "support.class",
      "settings": {
         "name": "Library class",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "support.constant.core.rust",
      "settings": {
         "name": "rust specific",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "text",
      "settings": {
         "name": "text",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "text.find-in-files",
      "settings": {
         "name": "Search result",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": [
         "variable",
         "variable.other"
      ],
      "settings": {
         "name": "Variable",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": [
         "variable.parameter",
         "parameters variable.function"
      ],
      "settings": {
         "name": "Function arguments",
         "fontStyle": "italic",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": [
         "variable.language",
         "variable.parameter.function.language.special.self.python",
         "variable.parameter.function.language.special.cls.python"
      ],
      "settings": {
         "name": "Reserved variable names that are specified by the language, such as this, self, super, arguments. Also in function arguments (e.g. like in Python)",
         "fontStyle": "italic",
         "foreground": "#bab6c0"
      }
   },
   {
      "scope": "variable.language.arguments",
      "settings": {
         "name": "Reserved variable names: 'arguments'",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "variable.other.class",
      "settings": {
         "name": "Library function",
         "foreground": "#5ad4e6"
      }
   },
   {
      "scope": "variable.other.constant",
      "settings": {
         "name": "Immutable variables, often via a const modifier, should receive the following scope. Depending on the language and semantics, entity.name.constant may be a better choice.",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "variable.other.readwrite",
      "settings": {
         "name": "read/write variables",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "variable.other.member",
      "settings": {
         "name": "Fields, properties, members and attributes of a class or other data structure should use:",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "variable.other.enummember",
      "settings": {
         "name": "Enum member",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": [
         "variable.other.property",
         "variable.other.property.static",
         "variable.other.event"
      ],
      "settings": {
         "name": "Variable property",
         "foreground": "#f7f1ff"
      }
   },
   {
      "scope": "variable.function",
      "settings": {
         "name": "Function and method names should be scoped using the following, but only when they are being invoked. When defined, they should use entity.name.function.",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "variable.other.substitution",
      "settings": {
         "name": "Substitution (restructured text)",
         "foreground": "#fd9353"
      }
   },
   {
      "scope": [
         "source.ruby variable.other.readwrite.instance.ruby",
         "source.ruby variable.other.readwrite.class.ruby"
      ],
      "settings": {
         "name": "Ruby instance variables",
         "foreground": "#948ae3"
      }
   },
   {
      "scope": "source.jinja2 variable.other.jinja2.block",
      "settings": {
         "name": "jinja2 variable block",
         "foreground": "#7bd88f"
      }
   },
   {
      "scope": "source.jinja2 variable.other.jinja2",
      "settings": {
         "name": "jinja2 variable",
         "foreground": "#fd9353"
      }
   }
];
