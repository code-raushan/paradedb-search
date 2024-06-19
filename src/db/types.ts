//eslint-disable-next-line
import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type mock_items = {
    id: Generated<number>;
    description: string | null;
    rating: number | null;
    category: string | null;
    in_stock: boolean | null;
    metadata: unknown | null;
    created_at: Timestamp | null;
    last_updated_date: Timestamp | null;
    latest_available_time: Timestamp | null;
};
export type Tutorial = {
    id: string;
    tutorialname: string;
    tutorialdescription: string | null;
    categoryid: string;
    status: string;
    createdat: Timestamp;
    updatedat: Timestamp;
    bm25_id: Generated<number>;
};
export type TutorialCategory = {
    id: string;
    categoryname: string;
    createdat: Timestamp;
    updatedat: Timestamp;
    bm25_id: Generated<number>;
};
export type TutorialSubTopic = {
    id: string;
    subtopicname: string;
    topicid: string;
    order: number;
    subtopicdescription: string | null;
    content: string | null;
    writerid: string | null;
    reviewerid: string | null;
    writerassignedat: Timestamp | null;
    reviewerassignedat: Timestamp | null;
    status: string;
    createdat: Timestamp;
    updatedat: Timestamp;
    bm25_id: Generated<number>;
};
export type TutorialTopic = {
    id: string;
    topicname: string;
    tutorialid: string;
    topicdescription: string | null;
    order: number;
    createdat: Timestamp;
    updatedat: Timestamp;
    bm25_id: Generated<number>;
};
export type DB = {
    mock_items: mock_items;
    Tutorial: Tutorial;
    TutorialCategory: TutorialCategory;
    TutorialSubTopic: TutorialSubTopic;
    TutorialTopic: TutorialTopic;
};
