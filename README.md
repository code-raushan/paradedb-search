# ParadeDB Search POC

For creating bm25 index, create sql files inside `src/sql/index` folder:

```sql
CALL paradedb.create_bm25(
    index_name => '<name_of_index>',
    table_name => '<name_of_db_table>',
    key_field => '<unique_identifier_field>',
    text_fields => '{<fieldnames>}'
)
```

For executing the sql files, run the following command in the terminal:

` npx ts-node src/executeSQL.ts --file sql/index/<sql_file_name>.sql `