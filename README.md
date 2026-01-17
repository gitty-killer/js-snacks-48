# js-snacks-48

A small JavaScript tool that computes text statistics for snacks.

## Goal
- Provide quick text metrics for snacks documents.
- Report top word frequencies for fast inspection.

## Usage
node index.js data/sample.txt --top 5

## Output
- lines: total line count
- words: total word count
- chars: total character count
- top words: most frequent tokens (case-insensitive)

## Notes
- Only ASCII letters and digits are treated as word characters.
