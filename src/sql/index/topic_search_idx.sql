CALL paradedb.create_bm25(
    index_name => 'topic_search_idx',
    table_name => 'TutorialTopic',
    key_field => 'bm25_id',
    text_fields => '{topicname: {}, topicdescription: {}, tutorialid: {}}'
)