CALL paradedb.create_bm25(
    index_name => 'tutorial_search_idx',
    table_name => 'Tutorial',
    key_field => 'bm25_id',
    text_fields => '{tutorialname: {}, tutorialdescription: {tokenizer: {type: "en_stem"}}}'
)