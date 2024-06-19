CALL paradedb.create_bm25(
    index_name => 'category_search_idx',
    table_name => 'TutorialCategory',
    key_field => 'bm25_id',
    text_fields => '{categoryname: {}}'
)