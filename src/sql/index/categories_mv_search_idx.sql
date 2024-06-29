CALL paradedb.create_bm25(
    index_name => 'category_mv_search_idx',
    table_name => 'categorywithtutorials',
    key_field => 'bm25_id',
    text_fields => '{categoryname: {}}',
    json_fields => '{tutorials: {}}'
);