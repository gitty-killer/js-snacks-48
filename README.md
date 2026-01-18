# js-snacks-48

A small JavaScript tool that computes text statistics for snacks.

## Objective
- Provide quick text metrics for snacks documents.
- Report top word frequencies for fast inspection.

## Use cases
- Validate snacks drafts for repeated terms before review.
- Summarize snacks notes when preparing reports.

## Usage
node index.js data/sample.txt --top 5

## Output
- lines: total line count
- words: total word count
- chars: total character count
- top words: most frequent tokens (case-insensitive)

## Testing
- run `bash scripts/verify.sh`

## Notes
- Only ASCII letters and digits are treated as word characters.
