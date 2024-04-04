type Props = {
    name: string;
    description?: string;
    questions?: number;
};

export const Tag = ({ name = 'javascript', questions = 2528741 }: Props) => {
    return (
        <div className="tag-box">
            <a>{name}</a>
            <p>{questions} questions</p>
        </div>
    );
};
