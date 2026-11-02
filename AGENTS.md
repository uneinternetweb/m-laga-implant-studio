# Project conventions
- Keep new evidence-verified news in a dedicated data module composed into the existing news list; this isolates additions without rewriting legacy articles.
- News supports optional metadata and image descriptions, with an explicit unknown-authorship flag; do not infer clinical authorship from publisher identity.
- Store downloaded photography as asset pointers and retain source and license credits in the relevant article; this preserves provenance and licensing obligations.