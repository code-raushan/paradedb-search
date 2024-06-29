CREATE MATERIALIZED VIEW CategoryWithTutorials AS
WITH
    subtopics AS (
        SELECT
            ts.topicid,
            jsonb_agg(jsonb_build_object(
                'id', ts.id,
                'subtopicname', ts.subtopicname,
                'order', ts.order,
                'subtopicdescription', ts.subtopicdescription,
                'content', ts.content,
                'writerid', ts.writerid,
                'reviewerid', ts.reviewerid,
                'writerassignedat', ts.writerassignedat,
                'reviewerassignedat', ts.reviewerassignedat,
                'status', ts.status,
                'createdat', ts.createdat,
                'updatedat', ts.updatedat
            )) AS subtopics
        FROM
            "TutorialSubTopic" ts
        GROUP BY
            ts.topicid
    ),
    topics AS (
        SELECT
            tt.tutorialid,
            jsonb_agg(jsonb_build_object(
                'id', tt.id,
                'topicname', tt.topicname,
                'order', tt.order,
                'topicdescription', tt.topicdescription,
                'createdat', tt.createdat,
                'updatedat', tt.updatedat,
                'subtopics', COALESCE(st.subtopics, '[]'::jsonb)
            )) AS topics
        FROM
            "TutorialTopic" tt
            LEFT JOIN subtopics st ON tt.id = st.topicid
        GROUP BY
            tt.tutorialid
    )
SELECT
    tc.id,
    tc.categoryname,
    tc.createdat,
    tc.updatedat,
    tc.bm25_id,
    jsonb_agg(jsonb_build_object(
        'id', t.id,
        'tutorialname', t.tutorialname,
        'tutorialdescription', t.tutorialdescription,
        'status', t.status,
        'createdat', t.createdat,
        'updatedat', t.updatedat,
        'topics', COALESCE(topics.topics, '[]'::jsonb)
    )) AS tutorials
FROM
    "TutorialCategory" tc
    LEFT JOIN "Tutorial" t ON tc.id = t.categoryid
    LEFT JOIN topics ON t.id = topics.tutorialid
GROUP BY
    tc.id;
