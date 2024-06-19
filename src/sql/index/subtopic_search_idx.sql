CALL paradedb.create_bm25(
    index_name => 'subtopic_search_idx',
    table_name => 'TutorialSubTopic',
    key_field => 'bm25_id',
    text_fields => '{subtopicname: {}, subtopicdescription: {tokenizer: {type: "en_stem"}}}'
)