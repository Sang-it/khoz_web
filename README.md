# Khoz


### Query Language Cheat Sheet

| Feature              | Syntax                   | Example                        | Explanation                                                         |
|----------------------|--------------------------|--------------------------------|----------------------------------------------------------------------|
| Simple Terms         | term1 term2              | Bob Ross                       | Matches docs with either terms.                           |
| Field Query          | field:term               | title:Ross                     | Match only in specified field.                                      |
| Boolean AND          | term1 AND term2          | Bob AND Ross                   | Both terms must be present.                                         |
| Boolean OR           | term1 OR term2           | Bob OR Ross                    | Either term can be present.                                         |
| Required Term        | +term                    | +Bob                           | Term must be present.                                               |
| Prohibited Term      | -term                    | -Ross                          | Term must not be present.                                           |
| Required + Optional  | +term1 term2             | +Bob Ross                      | Obama must appear; Michelle boosts score.                           |
| Exact Phrase         | "quoted phrase"          | "Bob Ross"                     | Terms must appear in exact order.                                   |
| Phrase Slop          | "phrase"~N               | "Big Ross"~1                   | Words can appear within N-word distance.                            |
| Prefix Phrase        | "partial phrase"*        | "Bob Ro"*                      | Last term matched by prefix (e.g. 'wolf').                          |
| Set Match (IN)       | field:IN [val1 val2]     | title:IN [Bob, Ross]           | Efficient OR across values in one field.                            |
| Range (inclusive)    | field:[a TO z]           | title:[a TO d]                 | Matches terms from "a" to "d", including both bounds.               |
| Range (exclusive)    | field:{a TO z}           | title:{a TO d}                 | Matches terms strictly between "a" and "d".                         |
| Boost Term           | term^n                   | "AI"^2.0 OR ML^0.5             | Adjusts relevance. Higher boost = more important.                   |
